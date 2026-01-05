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
    updatefooter();
}

// --- MODIFICADO PARA LA ANIMACIÓN (NUEVO) ---
function nextQuestion() {
    if (!arr || arr.length === 0) return $("#question").html("<h2>Cargando datos...</h2>");

    if (preguntas_hechas.length >= arr.length) {
        $("#mainCard").hide(); 
        $("#resultReport").show(); // Aquí también se activará la animación fadeIn de la card de resultados
        $("#finalScore").text(((numCorrect / arr.length) * 100).toFixed(1) + "%");
        return;
    }

    // Pequeña pausa para que la tarjeta principal se oculte y reaparezca con la animación
    $("#mainCard").hide(0, function() {
        do { rand = Math.floor(Math.random() * arr.length); } while (preguntas_hechas.includes(rand));
        let q = arr[rand]; preguntas_hechas.push(rand);
        
        // Actualizamos el contenido
        $("#question").html(`<h2>${q.question}</h2>`);
        $("#answer").html(generateOptions(q));
        $("#buttons").html("<button onclick='checkAnswer()'>Verificar Respuesta</button>");
        
        // Mostramos la tarjeta de nuevo, lo que activa la animación fadeIn CSS
        $(this).show();
    });
}

function generateOptions(q) {
    if (!q || !q.answer) return "";
    let splited = q.answer.split(", ");
    let type = (q.options) ? (splited.length === 1 ? 1 : 2) : 3;
    if (type === 3) return '<input type="text" id="text" style="width:100%; padding:12px; border-radius:8px; border:2px solid #ccc;" placeholder="Escribe el comando...">';
    return q.options.map((opt, i) => `
        <div class="option-row">
            <label class="option-container">
                <input type="${type === 1 ? 'radio' : 'checkbox'}" name="answer" value="${i}">
                <span class="option-text" style="margin-left:10px;">${opt}</span>
            </label>
        </div>
    `).join("");
}

// --- ARREGLO DE FEEDBACK VISUAL (imagen 10) ---
function checkAnswer() {
    let question = arr[rand]; let splited = question.answer.split(", "); let userAnswer = [];
    let type = (question.options) ? (splited.length === 1 ? 1 : 2) : 3;
    
    if (type === 1) {
        let val = $("input[name='answer']:checked").val();
        if(val === undefined) return alert("Por favor, selecciona una opción");
        userAnswer.push(arrOpt[val]);
    } else if (type === 2) {
        $("input[name='answer']:checked").each(function() { userAnswer.push(arrOpt[$(this).val()]); });
        if(userAnswer.length === 0) return alert("Por favor, selecciona al menos una");
    } else { userAnswer.push($("#text").val().trim()); }

    let isCorrect = userAnswer.sort().toString().toLowerCase() === splited.sort().toString().toLowerCase();
    if (isCorrect) numCorrect++; else numIncorrect++;

    let color = isCorrect ? "#10b981" : "#ef4444";
    let message = isCorrect ? '✅ ¡Correcto!' : '❌ ¡Incorrecto!';

    // Caja de feedback restaurada y mejorada visualmente
    $("#answer").append(`
        <div class="feedback-box" style="border-left:5px solid ${color}; border-radius:8px; transition: 0.3s;">
            <p><strong>${message}</strong></p>
            <p><strong>Respuesta correcta: ${question.answer}</strong></p>
            <hr style="opacity:0.1">
            <p style="font-size:0.9rem; margin-top:10px;">${question.explicacion}</p>
        </div>
    `);

    $("input").prop("disabled", true);
    $("#buttons").html("<button onclick='nextQuestion()'>Siguiente Pregunta</button>");
    updatefooter();
}

function updatefooter() {
    $("#number").text(preguntas_hechas.length); $("#correct").text(numCorrect); $("#incorrect").text(numIncorrect);
    let perc = preguntas_hechas.length > 0 ? ((numCorrect / preguntas_hechas.length) * 100).toFixed(0) : 0;
    $("#percentage").text(perc + "%");
}

$(document).ready(() => {
    // Evento Modo Oscuro reparado
    $(document).on('click', '#toggleDarkMode', function() {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
        $(this).text(isDark ? '☀️' : '🌙');
    });
    
    if (localStorage.getItem("darkMode") === "enabled") { $("body").addClass("dark-mode"); $("#toggleDarkMode").text("☀️"); }
    
    $("#examSelect").on('change', function() { switchExam($(this).val()); });
    
    // Pequeño retraso para asegurar la carga de datos
    setTimeout(() => { switchExam($("#examSelect").val()); }, 500);
    
    setInterval(() => { 
        totalSeconds++; 
        let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60; 
        $("#timer").text(`${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`); 
    }, 1000);
});
