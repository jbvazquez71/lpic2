const APP_VERSION = "3.1.0"; 
let arr = []; // Preguntas activas (las 60 seleccionadas)
let fullPool = []; // Pool completo
let arrOpt = ["A", "B", "C", "D", "E"];
let preguntas_hechas = [];
let numCorrect = 0;
let numIncorrect = 0;
let timerInterval;
let seconds = 0;

// --- MOTOR DE SELECCIÓN DE EXAMEN ---
function switchExam(examKey) {
    fullPool = [];
    
    // Mapeo de claves a variables globales
    if (examKey === "LPIC2_2") {
        if (window.preguntasLPIC2_2) fullPool = window.preguntasLPIC2_2;
    } else if (examKey === "LPIC2_2_EN") {
        if (window.preguntasLPIC2_2_EN) fullPool = window.preguntasLPIC2_2_EN;
    } else if (examKey === "LPI_400") {
        if (window.preguntas202_400) fullPool = window.preguntas202_400;
    } else if (examKey === "LPI_400_EN") {
        if (window.preguntas202_400_EN) fullPool = window.preguntas202_400_EN;
    }

    // Validación
    if (!fullPool || fullPool.length === 0) {
        $("#question").html(`<div style="color:var(--error-color); text-align:center; padding:20px;">
            <h2>⚠️ Error de carga</h2>
            <p>No se encontraron preguntas para: <b>${examKey}</b></p>
            <p><small>Verifica los archivos .js</small></p>
        </div>`);
        $("#answer, #buttons").html("");
        return;
    }

    // PREPARAR EXAMEN: Mezclar y cortar a 60
    let tempArr = [...fullPool];
    shuffle(tempArr);
    arr = tempArr.slice(0, 60);

    // Reiniciar
    resetStats();
    startTimer();
    nextQuestion();
}

// --- FUNCIONES DE ESTADO ---
function resetStats() {
    preguntas_hechas = []; 
    numCorrect = 0; 
    numIncorrect = 0;
    seconds = 0;
    $("#mainCard").show(); 
    $("#resultReport").hide();
    updateFooter();
    updateProgressBar(); 
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        let m = Math.floor(seconds / 60).toString().padStart(2, '0');
        let s = (seconds % 60).toString().padStart(2, '0');
        $("#timer").text(`${m}:${s}`);
    }, 1000);
}

// --- MOTOR DE PREGUNTAS ---
function nextQuestion() {
    $("#mainCard").removeClass("correct-border incorrect-border");
    
    // Fin del examen
    if (preguntas_hechas.length >= arr.length) {
        showFinalResults();
        return;
    }

    // Buscar siguiente pregunta no hecha
    let n = 0;
    do {
        n = Math.floor(Math.random() * arr.length);
    } while (preguntas_hechas.includes(n) && preguntas_hechas.length < arr.length);

    let q = arr[n];
    
    // Renderizar Pregunta
    let html = `<h3>${q.question}</h3>`;
    if (q.explicacion_extra) html += `<div class="code-block" style="background:rgba(0,0,0,0.05); padding:10px; border-radius:5px; font-family:monospace;">${q.explicacion_extra}</div>`;
    $("#question").html(html);

    // Renderizar Opciones
    let answersHtml = "";
    let isMulti = q.answer.includes(",") || q.answer.length > 2; 
    let inputType = isMulti ? "checkbox" : "radio";

    if (q.options) {
        q.options.forEach((opt, idx) => {
            let letter = arrOpt[idx]; 
            answersHtml += `
                <label class="option-label" id="label-${letter}">
                    <input type="${inputType}" name="opt" value="${letter}">
                    <span style="font-weight:bold; color:var(--primary-color); margin-right:10px;">${letter}</span>
                    <span>${opt.substring(2).trim()}</span> 
                </label>
            `;
        });
    } else {
        answersHtml = `<input type="text" id="textAnswer" placeholder="Escribe el comando..." class="text-input" autocomplete="off">`;
    }
    
    $("#answer").html(answersHtml);
    $("#buttons").html(`<button id="actionBtn" onclick="checkAnswer(${n})">Comprobar</button>`);
    
    if(!q.options) $("#textAnswer").focus();
}

function checkAnswer(index) {
    let q = arr[index];
    let userAns = [];
    
    if (q.options) {
        $("input[name='opt']:checked").each(function() { userAns.push($(this).val()); });
        userAns = userAns.join(", "); 
    } else {
        userAns = $("#textAnswer").val().trim();
    }

    if (!userAns) return; 

    let correct = q.answer.trim();
    let isCorrect = false;

    if (q.options) {
        let u = userAns.split(",").map(s=>s.trim()).sort().join(", ");
        let c = correct.split(",").map(s=>s.trim()).sort().join(", ");
        isCorrect = (u === c);
    } else {
        isCorrect = (userAns.toLowerCase() === correct.toLowerCase());
    }

    // Feedback Visual
    if (isCorrect) {
        numCorrect++;
        $("#mainCard").addClass("correct-border");
    } else {
        numIncorrect++;
        $("#mainCard").addClass("incorrect-border");
    }

    let feedbackHtml = `
        <div class="feedback-box ${isCorrect ? 'fb-success' : 'fb-error'}">
            <strong style="font-size:1.1rem;">${isCorrect ? '🎉 ¡Correcto!' : '❌ Incorrecto'}</strong>
            <div style="margin-top:10px;">
                ${!isCorrect ? `<p>Tu respuesta: <span style="text-decoration:line-through">${userAns}</span></p>` : ''}
                <p>✅ Correcta: <strong>${correct}</strong></p>
                <hr style="opacity:0.2; margin:15px 0;">
                <p>ℹ️ ${q.explicacion || "Sin explicación adicional."}</p>
            </div>
        </div>
    `;
    
    $("#answer").append(feedbackHtml);
    $("#buttons").html(`<button id="nextBtn" onclick="processNext(${index})">Siguiente ➡</button>`);
    $("input").prop("disabled", true);
    $("#nextBtn").focus();

    updateFooter();
}

function processNext(index) {
    preguntas_hechas.push(index);
    updateProgressBar();
    nextQuestion();
}

// --- UI & TOOLS ---
function updateFooter() {
    $("#number").text(`${preguntas_hechas.length} / ${arr.length}`);
    $("#hits").text(numCorrect);
    $("#fails").text(numIncorrect);
    
    let total = numCorrect + numIncorrect;
    let pct = total === 0 ? 0 : Math.round((numCorrect / total) * 100);
    $("#percent").text(pct + "%");
}

function updateProgressBar() {
    let pct = (preguntas_hechas.length / 60) * 100; 
    $("#progressBar").css("width", pct + "%");
}

function showFinalResults() {
    $("#mainCard").hide();
    $("#resultReport").show();
    clearInterval(timerInterval);
    
    let score = Math.round((numCorrect / 60) * 100);
    $("#finalScore").text(score + "%");
    $("#finalStatsText").html(`
        Has acertado <b>${numCorrect}</b> de <b>60</b> preguntas.<br><br>
        Tiempo total: <span style="font-family:monospace; background:#eee; padding:5px; border-radius:4px;">${$("#timer").text()}</span>
    `);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- INICIO ---
$(document).ready(() => {
    $(".version-badge").text("v=" + APP_VERSION);
    
    // Cambiar examen
    $("#examSelect").on('change', function() { 
        switchExam($(this).val()); 
    });

    // MODO OSCURO
    $("#toggleDarkMode").on('click', () => {
        $("body").toggleClass("dark-mode");
        const isDark = $("body").hasClass("dark-mode");
        $("#toggleDarkMode").text(isDark ? "☀️" : "🌙");
    });

    // Tecla Enter
    $(document).on('keypress', function(e) {
        if (e.which == 13) {
            if ($("#actionBtn").is(":visible")) $("#actionBtn").click();
            else if ($("#nextBtn").is(":visible")) $("#nextBtn").click();
        }
    });

    // Carga inicial
    setTimeout(() => { 
        let def = $("#examSelect").val();
        if(def) switchExam(def);
    }, 500);
});