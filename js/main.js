let arr = []; 
let arrOpt = ["A", "B", "C", "D", "E"];
let rand = 0;
let preguntas_hechas = [];
let numCorrect = 0;
let numIncorrect = 0;
let totalSeconds = 0;

function switchExam(examKey) {
    if(examKey === "LPIC2_1") arr = (typeof preguntasLPIC2_1 !== 'undefined') ? preguntasLPIC2_1 : [];
    else if(examKey === "LPIC2_2") arr = (typeof preguntasLPIC2_2 !== 'undefined') ? preguntasLPIC2_2 : [];
    else if(examKey === "LPIC1") arr = (typeof preguntasLPIC1 !== 'undefined') ? preguntasLPIC1 : [];
    resetStats();
    nextQuestion();
}

function resetStats() {
    preguntas_hechas = []; numCorrect = 0; numIncorrect = 0;
    $("#mainCard").show(); $("#resultReport").hide();
    updateProgressBar(); updatefooter();
}

function updateProgressBar() {
    let progress = (preguntas_hechas.length / arr.length) * 100;
    $("#progressBar").css("width", progress + "%");
}

function nextQuestion() {
    if (!arr || arr.length === 0) return $("#question").html("<h2>Cargando...</h2>");
    if (preguntas_hechas.length >= arr.length) {
        $("#mainCard").hide(); $("#resultReport").show();
        $("#finalScore").text(((numCorrect / arr.length) * 100).toFixed(1) + "%");
        return;
    }
    $("#mainCard").hide(0, function() {
        do { rand = Math.floor(Math.random() * arr.length); } while (preguntas_hechas.includes(rand));
        let q = arr[rand]; preguntas_hechas.push(rand);
        $("#question").html(`<h2>${q.question}</h2>`);
        $("#answer").html(generateOptions(q));
        $("#buttons").html("<button id='actionBtn' onclick='checkAnswer()'>Verificar Respuesta (Intro)</button>");
        $(this).show(); updateProgressBar();
    });
}

function generateOptions(q) {
    if (!q || !q.answer) return "";
    let splitedLetters = q.answer.split(", ");
    let type = (q.options) ? (splitedLetters.length === 1 ? 1 : 2) : 3;
    if (type === 3) return '<input type="text" id="text" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ccc;" placeholder="Escribe el comando...">';
    
    // Mostramos opciones con números (1), (2)... y valor alfabético original
    return q.options.map((opt, i) => `
        <div class="option-row" style="width:100%;">
            <label class="option-container">
                <input type="${type === 1 ? 'radio' : 'checkbox'}" name="answer" value="${i}">
                <span class="option-text" style="margin-left:10px;"><strong>(${i+1})</strong> ${opt}</span>
            </label>
        </div>
    `).join("");
}

function checkAnswer() {
    let question = arr[rand];
    let splitedLetters = question.answer.split(", ");
    let userAnswer = [];
    let type = (question.options) ? (splitedLetters.length === 1 ? 1 : 2) : 3;
    
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

    let isCorrect = userAnswer.sort().toString().toLowerCase() === splitedLetters.sort().toString().toLowerCase();
    if (isCorrect) numCorrect++; else numIncorrect++;

    let color = isCorrect ? "#10b981" : "#ef4444";
    let message = isCorrect ? '✅ ¡Correcto!' : '❌ ¡Incorrecto!';

    $("#answer").append(`
        <div style="margin-top:20px; padding:15px; background:rgba(0,0,0,0.03); border-radius:8px; border-left:5px solid ${color}">
            <p><strong>${message}</strong></p>
            <p><strong>Respuesta correcta:</strong> ${question.answer}</p>
            <hr style="opacity:0.1">
            <p style="font-size:0.9rem;">${question.explicacion}</p>
        </div>
    `);

    $("input").prop("disabled", true);
    $("#buttons").html("<button id='actionBtn' onclick='nextQuestion()'>Siguiente Pregunta (Intro)</button>");
    updatefooter();
}

function updatefooter() {
    $("#number").text(preguntas_hechas.length); $("#correct").text(numCorrect); $("#incorrect").text(numIncorrect);
    let perc = preguntas_hechas.length > 0 ? ((numCorrect / preguntas_hechas.length) * 100).toFixed(0) : 0;
    $("#percentage").text(perc + "%");
}

$(document).ready(() => {
    // --- SOPORTE PARA TECLAS 1-5 e INTRO ---
    $(document).on('keydown', function(e) {
        if ($(e.target).is("input[type='text']")) {
            if (e.key === "Enter") $("#actionBtn").click();
            return;
        }

        if (e.key === "Enter") {
            if ($("#resultReport").is(":visible")) $("#restartBtn").click();
            else if ($("#actionBtn").length > 0) $("#actionBtn").click();
        }

        // Detección de números 1-5
        if (e.key >= "1" && e.key <= "5") {
            let index = parseInt(e.key) - 1;
            let input = $("input[name='answer']").eq(index);
            if (input.length > 0 && !input.prop("disabled")) {
                input.prop("checked", !input.prop("checked")).change();
            }
        }
    });

    $(document).on('click', '#toggleDarkMode', function() {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        $(this).text(isDark ? '☀️' : '🌙');
    });

    if (localStorage.getItem("darkMode") === "enabled") { $("body").addClass("dark-mode"); $("#toggleDarkMode").text("☀️"); }
    $("#examSelect").on('change', function() { switchExam($(this).val()); });
    setTimeout(() => { switchExam($("#examSelect").val()); }, 500);
    setInterval(() => { totalSeconds++; let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60; $("#timer").text(`${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`); }, 1000);
});
