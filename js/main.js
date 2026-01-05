let arr = []; 
let arrOpt = ["A", "B", "C", "D", "E"];
let rand = 0;
let preguntas_hechas = [];
let numCorrect = 0;
let numIncorrect = 0;
let totalSeconds = 0;
let errorStats = {};

const TEMAS = {
    "Redes/IPv6": ["ipv6", "ip6tables", "router", "forwarding", "dhcp"],
    "DNS/BIND": ["dns", "bind", "named", "dig", "ptr", "soa"],
    "Servicios Web": ["httpd", "apache", "nginx", "ssl", "vhost"],
    "Almacenamiento": ["samba", "nfs", "iscsi", "storage"],
    "Seguridad": ["pam", "ssh", "fail2ban", "iptables", "nmap"]
};

function switchExam(examKey) {
    if(examKey === "LPIC2_1") arr = preguntasLPIC2_1;
    else if(examKey === "LPIC2_2") arr = preguntasLPIC2_2;
    else if(examKey === "LPIC1") arr = preguntasLPIC1;
    resetStats();
    nextQuestion();
}

function resetStats() {
    preguntas_hechas = [];
    numCorrect = 0;
    numIncorrect = 0;
    errorStats = {};
    $("#mainCard").show();
    $("#resultReport").hide();
    updatefooter();
}

function nextQuestion() {
    if (preguntas_hechas.length >= arr.length) return showFinalReport();

    do {
        rand = Math.floor(Math.random() * arr.length);
    } while (preguntas_hechas.includes(rand));

    preguntas_hechas.push(rand);
    let q = arr[rand];

    $("#question").html(`<h2>${q.question}</h2>`);
    $("#answer").html(generateOptions(q));
    $("#buttons").html("<button onclick='checkAnswer()'>Verificar Respuesta</button>");
}

function generateOptions(q) {
    let splited = q.answer.split(", ");
    let type = (q.options) ? (splited.length === 1 ? 1 : 2) : 3;
    if (type === 3) return '<input type="text" id="text" style="width:100%; padding:10px;" placeholder="Comando...">';
    
    return q.options.map((opt, i) => `
        <div class="option-row">
            <label class="option-container">
                <input type="${type === 1 ? 'radio' : 'checkbox'}" name="answer" value="${i}">
                <span class="option-text">${opt}</span>
            </label>
        </div>
    `).join("");
}

function checkAnswer() {
    let question = arr[rand];
    let splited = question.answer.split(", ");
    let userAnswer = [];
    let type = (question.options) ? (splited.length === 1 ? 1 : 2) : 3;

    if (type === 1) {
        let val = $("input[name='answer']:checked").val();
        if(val === undefined) return alert("Selecciona una opción");
        userAnswer.push(arrOpt[val]);
    } else if (type === 2) {
        $("input[name='answer']:checked").each(function() { userAnswer.push(arrOpt[$(this).val()]); });
        if(userAnswer.length === 0) return alert("Selecciona al menos una");
    } else {
        userAnswer.push($("#text").val().trim());
    }

    let isCorrect = userAnswer.sort().toString().toLowerCase() === splited.sort().toString().toLowerCase();

    if (isCorrect) numCorrect++;
    else numIncorrect++;

    let color = isCorrect ? "#10b981" : "#ef4444";
    $("#answer").append(`
        <div style="margin-top:20px; padding:15px; border-radius:8px; background:rgba(0,0,0,0.03); border-left:5px solid ${color}">
            <strong>${isCorrect ? '✅ Correcto' : '❌ Incorrecto'}</strong><br>
            <small>Respuesta correcta: ${question.answer}</small>
            <p style="margin-top:10px; font-size:0.9rem;">${question.explicacion}</p>
        </div>
    `);

    $("#buttons").html("<button onclick='nextQuestion()'>Siguiente Pregunta</button>");
    updatefooter();
}

function showFinalReport() {
    $("#mainCard").hide();
    $("#resultReport").show();
    let perc = ((numCorrect / arr.length) * 100).toFixed(1);
    $("#finalScore").text(perc + "%");
}

function updatefooter() {
    $("#number").text(preguntas_hechas.length);
    $("#correct").text(numCorrect);
    $("#incorrect").text(numIncorrect);
    let perc = preguntas_hechas.length > 0 ? ((numCorrect / preguntas_hechas.length) * 100).toFixed(0) : 0;
    $("#percentage").text(perc + "%");
}

$(document).ready(() => {
    $(document).on('click', '#toggleDarkMode', function() {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        $(this).text(isDark ? '☀️' : '🌙');
    });

    if (localStorage.getItem("darkMode") === "enabled") {
        $("body").addClass("dark-mode");
        $("#toggleDarkMode").text("☀️");
    }

    $("#examSelect").on('change', function() { switchExam($(this).val()); });
    switchExam($("#examSelect").val());
    
    setInterval(() => {
        totalSeconds++;
        let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
        $("#timer").text(`${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`);
    }, 1000);
});
