const APP_VERSION = "2.7.3"; 
let arr = []; 
let arrOpt = ["A", "B", "C", "D", "E"];
let preguntas_hechas = [];
let numCorrect = 0;
let numIncorrect = 0;

function switchExam(examKey) {
    arr = [];
    // Verificación robusta usando el objeto window
    if (examKey === "LPIC2_2") {
        if (window.preguntasLPIC2_2) arr = window.preguntasLPIC2_2;
    } else if (examKey === "LPIC2_2_EN") {
        if (window.preguntasLPIC2_2_EN) arr = window.preguntasLPIC2_2_EN;
    }

    if (!arr || arr.length === 0) {
        $("#question").html(`<div style="color:red; text-align:center;">
            <h2>Error: No se han podido cargar las preguntas.</h2>
            <p>Verifica que los archivos JS están en la carpeta /js/ y que las variables existen.</p>
        </div>`);
        $("#answer, #buttons").html("");
    } else {
        resetStats();
        nextQuestion();
    }
}

function resetStats() {
    preguntas_hechas = []; 
    numCorrect = 0; 
    numIncorrect = 0;
    $("#mainCard").show(); 
    $("#resultReport").hide();
    updateProgressBar(); 
    updatefooter();
}

function updatefooter() {
    $("#number").text(preguntas_hechas.length + "/" + arr.length);
    $("#correct").text(numCorrect);
    $("#incorrect").text(numIncorrect); // Actualiza los fallos
}

function updateProgressBar() {
    if (arr.length === 0) return;
    let pct = (preguntas_hechas.length / arr.length) * 100;
    $("#progressBar").css("width", pct + "%");
}

function nextQuestion() {
    if (preguntas_hechas.length >= arr.length) {
        showFinalResults();
        return;
    }

    let r;
    do {
        r = Math.floor(Math.random() * arr.length);
    } while (preguntas_hechas.includes(r));

    let q = arr[r];
    renderQuestion(q, r);
}

function renderQuestion(q, index) {
    $("#question").html(`<h3>${q.question}</h3>`);
    let html = "";
    
    if (q.options && q.options.length > 0) {
        // Si la respuesta contiene coma, es multiselección
        const isMulti = q.answer.includes(","); 
        const inputType = isMulti ? "checkbox" : "radio";
        
        q.options.forEach((opt, i) => {
            html += `
                <label class="option-container">
                    <input type="${inputType}" name="answer" value="${arrOpt[i]}">
                    <span><strong>${arrOpt[i]}:</strong> ${opt}</span>
                </label>`;
        });
        if(isMulti) html += `<p><small>ℹ️ Selecciona varias opciones</small></p>`;
    } else {
        html = `<input type="text" id="cmdInput" placeholder="Escribe tu respuesta aquí..." style="width:100%; padding:10px;">`;
    }
    $("#answer").html(html);
    $("#buttons").html(`<button id="actionBtn" onclick="checkAnswer(${index})">Validar</button>`);
}

function checkAnswer(index) {
    let q = arr[index];
    let userAns = "";
    
    // 1. Obtener respuesta (Soporte Multiselección)
    if (q.options && q.options.length > 0) {
        let selected = [];
        $("input[name='answer']:checked").each(function() {
            selected.push($(this).val());
        });
        userAns = selected.sort().join(", "); // Une respuestas: "A, B"
    } else {
        userAns = $("#cmdInput").val().trim();
    }

    if (!userAns) return;

    // 2. Validar y dar Feedback Visual
    const isCorrect = userAns.toUpperCase() === q.answer.toUpperCase();
    const card = $("#mainCard");

    if (isCorrect) {
        numCorrect++;
        card.addClass("correct-border"); // Verde (definido en tu CSS)
    } else {
        numIncorrect++;
        card.addClass("incorrect-border"); // Rojo (definido en tu CSS)
    }

    // 3. Mostrar Explicación y bloquear botón
    let feedbackHtml = `
        <div class="feedback-box ${isCorrect ? 'text-success' : 'text-error'}">
            <strong>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong><br>
            <p><strong>Tu respuesta:</strong> ${userAns}</p>
            <p><strong>Respuesta correcta:</strong> ${q.answer}</p>
            <hr>
            <p><strong>Explicación:</strong> ${q.explicacion || "Sin explicación disponible."}</p>
        </div>
    `;
    
    $("#answer").append(feedbackHtml);
    $("#buttons").html(`<button id="nextBtn" onclick="processNext(${index})">Siguiente Pregunta</button>`);
    
    // Deshabilitar inputs para que no se cambie la respuesta
    $("input").prop("disabled", true);
}

function processNext(index) {
    $("#mainCard").removeClass("correct-border incorrect-border");
    preguntas_hechas.push(index);
    updatefooter();
    updateProgressBar();
    nextQuestion();
}

function showFinalResults() {
    $("#mainCard").hide();
    $("#resultReport").show();
    let score = Math.round((numCorrect / arr.length) * 100);
    $("#finalScore").text(score + "%");
}

$(document).ready(() => {
    $(".version-badge").text("v=" + APP_VERSION);
    
    // Configuración del Selector de Examen
    $("#examSelect").on('change', function() { 
        switchExam($(this).val()); 
    });

    // Lógica del Modo Oscuro
    $("#toggleDarkMode").on('click', () => {
        $("body").toggleClass("dark-mode");
        const isDark = $("body").hasClass("dark-mode");
        $("#toggleDarkMode").text(isDark ? "☀️" : "🌙");
    });

    // --- NUEVO: Control de teclado para Intro ---
    $(document).on('keypress', function(e) {
        if (e.which == 13) { // 13 es la tecla Enter
            if ($("#actionBtn").length > 0) {
                $("#actionBtn").click(); // Valida la respuesta
            } else if ($("#nextBtn").length > 0) {
                $("#nextBtn").click(); // Pasa a la siguiente
            }
        }
    });
    // --------------------------------------------

    // Pequeño retardo para asegurar que los scripts de datos se han interpretado
    setTimeout(() => { 
        switchExam($("#examSelect").val()); 
    }, 100);
});