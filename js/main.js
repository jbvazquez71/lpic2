const APP_VERSION = "4.1.3"; 

// Variables globales
let arr = []; // Preguntas del examen actual
let fullPool = []; // Todas las preguntas disponibles
let arrOpt = ["A", "B", "C", "D", "E"];
let preguntas_hechas = []; // índices de preguntas respondidas
let respuestasUsuario = []; // Guarda las respuestas del usuario
let currentQuestionIndex = -1; // índice de la pregunta actual
let numCorrect = 0;
let numIncorrect = 0;
let timerInterval;
let seconds = 0;
let examFinished = false;
let desiredQuestionCount = null; // Número de preguntas que el usuario quiere
let pendingExamKey = null; // Examen pendiente de iniciar

// Constantes para LocalStorage
const STORAGE_KEY = 'lpic_exam_state';
const STORAGE_HISTORY = 'lpic_exam_history';

// ===========================================
// PERSISTENCIA DE DATOS (LocalStorage)
// ===========================================

function saveProgress() {
    try {
        const state = {
            version: APP_VERSION,
            timestamp: Date.now(),
            currentExam: $("#examSelect").val(),
            currentQuestionIndex,
            preguntas_hechas,
            respuestasUsuario,
            numCorrect,
            numIncorrect,
            seconds,
            examFinished,
            desiredQuestionCount // Guardar el número de preguntas seleccionadas
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Error guardando progreso:", error);
        showNotification("⚠️ No se pudo guardar el progreso", "warning");
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return false;
        
        const state = JSON.parse(saved);
        
        // Verificar que el examen guardado existe
        const savedExam = state.currentExam;
        if (!savedExam) return false;
        
        // Preguntar al usuario si quiere continuar
        const timePassed = Math.floor((Date.now() - state.timestamp) / 60000); // minutos
        const countInfo = state.desiredQuestionCount === 'all' 
            ? 'todas las preguntas' 
            : `${state.desiredQuestionCount} preguntas`;
        const message = `¿Deseas continuar tu examen anterior?\n\nExamen: ${savedExam}\nModo: ${countInfo}\nProgreso: ${state.preguntas_hechas.length} contestadas\nTiempo: ${timePassed} min atrás`;
        
        if (!confirm(message)) {
            localStorage.removeItem(STORAGE_KEY);
            return false;
        }
        
        // Restaurar estado
        $("#examSelect").val(savedExam);
        switchExam(savedExam, true); // El true indica que no reinicie
        
        currentQuestionIndex = state.currentQuestionIndex;
        preguntas_hechas = state.preguntas_hechas || [];
        respuestasUsuario = state.respuestasUsuario || [];
        numCorrect = state.numCorrect || 0;
        numIncorrect = state.numIncorrect || 0;
        seconds = state.seconds || 0;
        examFinished = state.examFinished || false;
        desiredQuestionCount = state.desiredQuestionCount || null; // Restaurar número de preguntas
        
        updateFooter();
        updateProgressBar();
        
        if (examFinished) {
            showFinalResults();
        } else {
            nextQuestion();
        }
        
        showNotification("✅ Progreso restaurado", "success");
        return true;
        
    } catch (error) {
        console.error("Error cargando progreso:", error);
        localStorage.removeItem(STORAGE_KEY);
        return false;
    }
}

function clearProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Error limpiando progreso:", error);
    }
}

function saveToHistory(results) {
    try {
        let history = JSON.parse(localStorage.getItem(STORAGE_HISTORY) || '[]');
        history.unshift(results); // Agregar al inicio
        history = history.slice(0, 10); // Mantener solo los últimos 10
        localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));
    } catch (error) {
        console.error("Error guardando historial:", error);
    }
}

// ===========================================
// MANEJO DE ERRORES
// ===========================================

function showNotification(message, type = "info") {
    const colors = {
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        info: "#06b6d4"
    };
    
    const notification = $(`
        <div style="
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        ">
            ${message}
        </div>
    `);
    
    $("body").append(notification);
    
    setTimeout(() => {
        notification.css("animation", "slideOutRight 0.3s ease-in");
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar animaciones CSS para notificaciones
$("<style>")
    .prop("type", "text/css")
    .html(`
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `)
    .appendTo("head");

// ===========================================
// SELECCIÓN DE NÚMERO DE PREGUNTAS
// ===========================================

function showQuestionCountModal(examKey) {
    pendingExamKey = examKey;
    
    // Actualizar el contador de "Todas las preguntas"
    // Primero necesitamos cargar temporalmente el pool para saber cuántas hay
    let tempPool = [];
    if (examKey === "LPIC2_2") {
        if (window.preguntasLPIC2_2) tempPool = window.preguntasLPIC2_2;
    } else if (examKey === "LPIC2_2_EN") {
        if (window.preguntasLPIC2_2_EN) tempPool = window.preguntasLPIC2_2_EN;
    } else if (examKey === "LPI_400") {
        if (window.preguntas202_400) tempPool = window.preguntas202_400;
    } else if (examKey === "LPI_400_EN") {
        if (window.preguntas202_400_EN) tempPool = window.preguntas202_400_EN;
    }
    
    $("#allQuestionsCount").text(`Todas (${tempPool.length})`);
    $("#questionCountModal").fadeIn(200);
}

function selectQuestionCount(count) {
    if (count === 'all') {
        desiredQuestionCount = 'all';
    } else {
        desiredQuestionCount = parseInt(count);
    }
    
    $("#questionCountModal").fadeOut(200);
    
    // Iniciar el examen con el número de preguntas seleccionado
    if (pendingExamKey) {
        switchExam(pendingExamKey);
        pendingExamKey = null;
    }
}

function selectCustomCount() {
    const customValue = $("#customQuestionCount").val();
    const customCount = parseInt(customValue);
    
    // Validar
    if (!customValue || isNaN(customCount) || customCount < 1) {
        $("#questionCountError").text("⚠️ Introduce un número válido (mínimo 1)").show();
        return;
    }
    
    // Obtener el pool temporal para validar el máximo
    let tempPool = [];
    if (pendingExamKey === "LPIC2_2") {
        if (window.preguntasLPIC2_2) tempPool = window.preguntasLPIC2_2;
    } else if (pendingExamKey === "LPIC2_2_EN") {
        if (window.preguntasLPIC2_2_EN) tempPool = window.preguntasLPIC2_2_EN;
    } else if (pendingExamKey === "LPI_400") {
        if (window.preguntas202_400) tempPool = window.preguntas202_400;
    } else if (pendingExamKey === "LPI_400_EN") {
        if (window.preguntas202_400_EN) tempPool = window.preguntas202_400_EN;
    }
    
    if (customCount > tempPool.length) {
        $("#questionCountError").text(`⚠️ El examen solo tiene ${tempPool.length} preguntas`).show();
        return;
    }
    
    $("#questionCountError").hide();
    selectQuestionCount(customCount);
}

// Cerrar modal con Enter en el campo personalizado
$(document).on('keypress', '#customQuestionCount', function(e) {
    if (e.which === 13) {
        selectCustomCount();
    }
});

// ===========================================
// MOTOR DE SELECCIÓN DE EXAMEN
// ===========================================

function switchExam(examKey, restoring = false) {
    try {
        fullPool = [];
        
        // Identificar el pool de preguntas
        if (examKey === "LPIC2_2") {
            if (window.preguntasLPIC2_2) fullPool = window.preguntasLPIC2_2;
        } else if (examKey === "LPIC2_2_EN") {
            if (window.preguntasLPIC2_2_EN) fullPool = window.preguntasLPIC2_2_EN;
        } else if (examKey === "LPI_400") {
            if (window.preguntas202_400) fullPool = window.preguntas202_400;
        } else if (examKey === "LPI_400_EN") {
            if (window.preguntas202_400_EN) fullPool = window.preguntas202_400_EN;
        }

        // Validación de seguridad
        if (!fullPool || fullPool.length === 0) {
            throw new Error(`No se encontraron preguntas para: ${examKey}`);
        }

        // PREPARAR EXAMEN: Mezclar
        let tempArr = [...fullPool];
        shuffle(tempArr);
        
        // Aplicar el límite de preguntas si está configurado
        if (desiredQuestionCount && desiredQuestionCount !== 'all') {
            const limit = Math.min(desiredQuestionCount, tempArr.length);
            arr = tempArr.slice(0, limit);
        } else {
            arr = tempArr; // Usar todas
        }

        // Reiniciar solo si no estamos restaurando
        if (!restoring) {
            resetStats();
            startTimer();
            nextQuestion();
        }
        
        const countText = desiredQuestionCount === 'all' ? 'todas' : desiredQuestionCount;
        showNotification(`Examen cargado: ${arr.length} preguntas (${countText} seleccionadas)`, "success");
        
    } catch (error) {
        console.error("Error en switchExam:", error);
        $("#question").html(`
            <div style="color:#ef4444; text-align:center; padding:20px;">
                <h2><i class="fas fa-exclamation-triangle"></i> Error de carga</h2>
                <p>${error.message}</p>
                <p><small>Verifica los archivos .js en la carpeta js/</small></p>
            </div>
        `);
        $("#answer, #buttons").html("");
        showNotification("Error cargando examen", "error");
    }
}

// ===========================================
// FUNCIONES DE ESTADO
// ===========================================

function resetStats() {
    preguntas_hechas = []; 
    respuestasUsuario = [];
    currentQuestionIndex = -1;
    numCorrect = 0; 
    numIncorrect = 0;
    seconds = 0;
    examFinished = false;
    $("#mainCard").show(); 
    $("#resultReport").hide();
    $("#reviewPanel").hide();
    updateFooter();
    updateProgressBar();
    clearProgress(); // Limpiar progreso anterior
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        let m = Math.floor(seconds / 60).toString().padStart(2, '0');
        let s = (seconds % 60).toString().padStart(2, '0');
        $("#timer").text(`${m}:${s}`);
        saveProgress(); // Guardar cada minuto aproximadamente
    }, 1000);
}

// ===========================================
// NAVEGACIÓN POR PREGUNTAS
// ===========================================

function navigateQuestion(direction) {
    // direction: -1 para anterior, 1 para siguiente
    if (examFinished) return;
    
    let newIndex = currentQuestionIndex + direction;
    
    // Validar límites
    if (newIndex < 0 || newIndex >= arr.length) {
        showNotification("No hay más preguntas en esa dirección", "info");
        return;
    }
    
    // Si la pregunta ya fue contestada, mostrarla
    if (preguntas_hechas.includes(newIndex)) {
        currentQuestionIndex = newIndex;
        showAnsweredQuestion(newIndex);
    } else {
        currentQuestionIndex = newIndex;
        displayQuestion(newIndex);
    }
    
    saveProgress();
}

function skipQuestion() {
    if (examFinished) return;
    
    // Buscar siguiente pregunta no contestada
    let found = false;
    for (let i = currentQuestionIndex + 1; i < arr.length; i++) {
        if (!preguntas_hechas.includes(i)) {
            currentQuestionIndex = i;
            displayQuestion(i);
            found = true;
            break;
        }
    }
    
    if (!found) {
        // Si no hay más adelante, buscar desde el inicio
        for (let i = 0; i < currentQuestionIndex; i++) {
            if (!preguntas_hechas.includes(i)) {
                currentQuestionIndex = i;
                displayQuestion(i);
                found = true;
                break;
            }
        }
    }
    
    if (!found) {
        showNotification("No hay más preguntas sin contestar", "info");
    }
    
    saveProgress();
}

function showAnsweredQuestion(index) {
    let q = arr[index];
    let userResponse = respuestasUsuario[index];
    
    if (!userResponse) {
        displayQuestion(index);
        return;
    }
    
    // Mostrar la pregunta con la respuesta ya dada
    let html = `<h3>${q.question}</h3>`;
    if (q.explicacion_extra) {
        html += `<div class="code-block" style="background:rgba(0,0,0,0.05); padding:10px; border-radius:5px; font-family:monospace;">${q.explicacion_extra}</div>`;
    }
    $("#question").html(html);
    
    // Mostrar opciones deshabilitadas
    let answersHtml = "";
    let isMulti = q.answer.includes(",") || q.answer.length > 2;
    
    if (q.options) {
        q.options.forEach((opt, idx) => {
            let letter = arrOpt[idx];
            let checked = userResponse.userAnswer.includes(letter) ? "checked" : "";
            let inputType = isMulti ? "checkbox" : "radio";
            
            answersHtml += `
                <label class="option-label ${checked ? 'selected' : ''}" id="label-${letter}">
                    <input type="${inputType}" name="opt" value="${letter}" ${checked} disabled>
                    <span style="font-weight:bold; color:var(--primary-color); margin-right:10px;">${letter}</span>
                    <span>${opt.substring(2).trim()}</span>
                </label>
            `;
        });
    } else {
        answersHtml = `<input type="text" id="textAnswer" value="${userResponse.userAnswer}" class="text-input" disabled>`;
    }
    
    $("#answer").html(answersHtml);
    
    // Mostrar feedback
    let isCorrect = userResponse.isCorrect;
    $("#mainCard").removeClass("correct-border incorrect-border");
    $("#mainCard").addClass(isCorrect ? "correct-border" : "incorrect-border");
    
    let feedbackHtml = `
        <div class="feedback-box ${isCorrect ? 'fb-success' : 'fb-error'}">
            ${isCorrect ? '<img src="data:image/png;base64,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" alt="¡Correcto!" class="celebration-img" />' : ''}
            <strong style="font-size:1.1rem;">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${isCorrect ? ' ¡Correcto!' : ' Incorrecto'}
            </strong>
            <div style="margin-top:10px;">
                ${!isCorrect ? `<p>Tu respuesta: <span style="text-decoration:line-through">${userResponse.userAnswer}</span></p>` : ''}
                <p><i class="fas fa-check"></i> Correcta: <strong>${q.answer}</strong></p>
                <hr style="opacity:0.2; margin:15px 0;">
                <p><i class="fas fa-info-circle"></i> ${q.explicacion || "Sin explicación adicional."}</p>
            </div>
        </div>
    `;
    
    $("#answer").append(feedbackHtml);
    
    // Botones de navegación
    updateNavigationButtons();
}

function updateNavigationButtons() {
    $("#navigation").show();
    $("#prevBtn").prop("disabled", currentQuestionIndex <= 0);
    
    // Mostrar botón de revisión si todas las preguntas están contestadas
    if (preguntas_hechas.length === arr.length) {
        $("#reviewModeBtn").show();
    }
}

// ===========================================
// MOTOR DE PREGUNTAS
// ===========================================

function nextQuestion() {
    $("#mainCard").removeClass("correct-border incorrect-border");
    
    // Fin del examen
    if (preguntas_hechas.length >= arr.length) {
        examFinished = true;
        saveProgress();
        showFinalResults();
        return;
    }

    // Buscar siguiente pregunta no hecha
    let n = -1;
    for (let i = 0; i < arr.length; i++) {
        if (!preguntas_hechas.includes(i)) {
            n = i;
            break;
        }
    }
    
    if (n === -1) {
        // No hay más preguntas
        examFinished = true;
        saveProgress();
        showFinalResults();
        return;
    }
    
    currentQuestionIndex = n;
    displayQuestion(n);
    saveProgress();
}

function displayQuestion(index) {
    let q = arr[index];
    
    // Renderizar Pregunta
    let html = `<h3>${q.question}</h3>`;
    if (q.explicacion_extra) {
        html += `<div class="code-block" style="background:rgba(0,0,0,0.05); padding:10px; border-radius:5px; font-family:monospace;">${q.explicacion_extra}</div>`;
    }
    $("#question").html(html);

    // Determinar si es multi-selección
    let isMulti = q.answer.includes(",") || q.answer.length > 2; 
    let inputType = isMulti ? "checkbox" : "radio";
    
    // Mostrar indicador de respuestas múltiples
    if (isMulti && q.options) {
        $("#multiSelectInfo").show();
    } else {
        $("#multiSelectInfo").hide();
    }

    // Renderizar Opciones
    let answersHtml = "";
    if (q.options) {
        q.options.forEach((opt, idx) => {
            let letter = arrOpt[idx]; 
            answersHtml += `
                <label class="option-label" id="label-${letter}" tabindex="0">
                    <input type="${inputType}" name="opt" value="${letter}" 
                           aria-label="Opción ${letter}">
                    <span style="font-weight:bold; color:var(--primary-color); margin-right:10px;">${letter}</span>
                    <span>${opt.substring(2).trim()}</span>
                </label>
            `;
        });
    } else {
        answersHtml = `<input type="text" 
                              id="textAnswer" 
                              placeholder="Escribe el comando..." 
                              class="text-input" 
                              autocomplete="off"
                              aria-label="Campo de respuesta">`;
    }
    
    $("#answer").html(answersHtml);
    $("#buttons").html(`
        <button id="actionBtn" 
                onclick="checkAnswer(${index})"
                aria-label="Comprobar respuesta">
            <i class="fas fa-check"></i> Comprobar
        </button>
    `);
    
    // Actualizar navegación
    updateNavigationButtons();
    
    // Event listeners para marcar visualmente opciones seleccionadas
    $("input[name='opt']").on('change', function() {
        $(".option-label").removeClass("selected");
        $("input[name='opt']:checked").each(function() {
            $(this).closest(".option-label").addClass("selected");
        });
    });
    
    // Focus en el campo de texto si existe
    if (!q.options) {
        $("#textAnswer").focus();
    }
    
    // Mostrar ayuda de teclado
    $("#keyboardHelp").show();
}

function checkAnswer(index) {
    let q = arr[index];
    let userAns = [];
    
    if (q.options) {
        $("input[name='opt']:checked").each(function() { 
            userAns.push($(this).val()); 
        });
        userAns = userAns.join(", "); 
    } else {
        userAns = $("#textAnswer").val().trim();
    }

    if (!userAns) {
        showNotification("⚠️ Selecciona al menos una respuesta", "warning");
        return;
    }

    let correct = q.answer.trim();
    let isCorrect = false;

    if (q.options) {
        let u = userAns.split(",").map(s=>s.trim()).sort().join(", ");
        let c = correct.split(",").map(s=>s.trim()).sort().join(", ");
        isCorrect = (u === c);
    } else {
        isCorrect = (userAns.toLowerCase() === correct.toLowerCase());
    }

    // Guardar respuesta del usuario
    respuestasUsuario[index] = {
        userAnswer: userAns,
        correctAnswer: correct,
        isCorrect: isCorrect,
        question: q.question
    };

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
            ${isCorrect ? '<img src="data:image/png;base64,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" alt="¡Correcto!" class="celebration-img" />' : ''}
            <strong style="font-size:1.1rem;">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${isCorrect ? ' ¡Correcto!' : ' Incorrecto'}
            </strong>
            <div style="margin-top:10px;">
                ${!isCorrect ? `<p>Tu respuesta: <span style="text-decoration:line-through">${userAns}</span></p>` : ''}
                <p><i class="fas fa-check"></i> Correcta: <strong>${correct}</strong></p>
                <hr style="opacity:0.2; margin:15px 0;">
                <p><i class="fas fa-info-circle"></i> ${q.explicacion || "Sin explicación adicional."}</p>
            </div>
        </div>
    `;
    
    $("#answer").append(feedbackHtml);
    $("#buttons").html(`
        <button id="nextBtn" 
                onclick="processNext(${index})"
                aria-label="Siguiente pregunta">
            Siguiente <i class="fas fa-arrow-right"></i>
        </button>
    `);
    $("input").prop("disabled", true);
    $("#nextBtn").focus();

    // Marcar pregunta como contestada ANTES de actualizar el footer
    if (!preguntas_hechas.includes(index)) {
        preguntas_hechas.push(index);
    }
    
    updateFooter();
    saveProgress();
}

function processNext(index) {
    // La pregunta ya fue agregada a preguntas_hechas en checkAnswer
    updateProgressBar();
    nextQuestion();
}

// ===========================================
// MODO DE REVISIÓN POST-EXAMEN
// ===========================================

function showReviewMode() {
    $("#resultReport").hide();
    $("#mainCard").hide();
    $("#reviewPanel").show();
    
    generateReviewList();
}

function enterReviewMode() {
    showReviewMode();
}

function exitReviewMode() {
    $("#reviewPanel").hide();
    
    if (examFinished) {
        $("#resultReport").show();
    } else {
        $("#mainCard").show();
        if (currentQuestionIndex >= 0) {
            showAnsweredQuestion(currentQuestionIndex);
        }
    }
}

function generateReviewList() {
    let html = "";
    
    arr.forEach((q, idx) => {
        let userResponse = respuestasUsuario[idx];
        let statusClass = "";
        let statusBadge = "";
        let statusIcon = "";
        
        if (!userResponse) {
            statusClass = "unanswered";
            statusBadge = "badge-unanswered";
            statusIcon = '<i class="fas fa-question-circle"></i>';
        } else if (userResponse.isCorrect) {
            statusClass = "correct";
            statusBadge = "badge-correct";
            statusIcon = '<i class="fas fa-check-circle"></i>';
        } else {
            statusClass = "incorrect";
            statusBadge = "badge-incorrect";
            statusIcon = '<i class="fas fa-times-circle"></i>';
        }
        
        html += `
            <div class="review-item ${statusClass}" onclick="reviewQuestion(${idx})" tabindex="0" role="button">
                <div class="review-item-header">
                    <span><strong>Pregunta ${idx + 1}</strong></span>
                    <span class="review-item-badge ${statusBadge}">
                        ${statusIcon} ${!userResponse ? 'Sin contestar' : userResponse.isCorrect ? 'Correcta' : 'Incorrecta'}
                    </span>
                </div>
                <div class="review-item-question">
                    ${q.question.substring(0, 100)}${q.question.length > 100 ? '...' : ''}
                </div>
                ${userResponse ? `
                    <div class="review-item-answer">
                        <span><i class="fas fa-user"></i> Tu respuesta: <strong>${userResponse.userAnswer}</strong></span>
                        ${!userResponse.isCorrect ? `<span><i class="fas fa-check"></i> Correcta: <strong>${userResponse.correctAnswer}</strong></span>` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    $("#reviewList").html(html);
}

function reviewQuestion(index) {
    $("#reviewPanel").hide();
    $("#mainCard").show();
    currentQuestionIndex = index;
    showAnsweredQuestion(index);
}

// ===========================================
// ATAJOS DE TECLADO
// ===========================================

function setupKeyboardShortcuts() {
    $(document).on('keydown', function(e) {
        // No activar atajos si está escribiendo en un input
        if ($(e.target).is('input[type="text"]')) {
            return;
        }
        
        // Enter - Confirmar acción
        if (e.which === 13) {
            e.preventDefault();
            if ($("#actionBtn").is(":visible")) {
                $("#actionBtn").click();
            } else if ($("#nextBtn").is(":visible")) {
                $("#nextBtn").click();
            }
            return;
        }
        
        // Números 1-5 para seleccionar opciones A-E
        if (e.which >= 49 && e.which <= 53) { // teclas 1-5
            e.preventDefault();
            let index = e.which - 49; // 0-4
            let letter = arrOpt[index];
            let input = $(`input[value="${letter}"]`);
            
            if (input.length && !input.prop('disabled')) {
                if (input.attr('type') === 'checkbox') {
                    input.prop('checked', !input.prop('checked'));
                } else {
                    input.prop('checked', true);
                }
                input.trigger('change');
            }
            return;
        }
        
        // Flecha izquierda - Pregunta anterior
        if (e.which === 37) {
            e.preventDefault();
            if ($("#prevBtn").is(":visible") && !$("#prevBtn").prop('disabled')) {
                navigateQuestion(-1);
            }
            return;
        }
        
        // Flecha derecha - Saltar pregunta
        if (e.which === 39) {
            e.preventDefault();
            if ($("#skipBtn").is(":visible")) {
                skipQuestion();
            }
            return;
        }
        
        // H - Mostrar ayuda de teclado
        if (e.which === 72) {
            e.preventDefault();
            toggleKeyboardModal();
            return;
        }
        
        // R - Modo revisión (solo si el examen terminó)
        if (e.which === 82 && examFinished) {
            e.preventDefault();
            if ($("#reviewBtn").is(":visible")) {
                showReviewMode();
            }
            return;
        }
    });
    
    // Permitir cerrar modales con ESC
    $(document).on('keydown', function(e) {
        if (e.which === 27) { // ESC
            closeKeyboardModal();
        }
    });
}

function toggleKeyboardModal() {
    $("#keyboardModal").toggle();
}

function closeKeyboardModal() {
    $("#keyboardModal").hide();
}

// ===========================================
// UI & TOOLS
// ===========================================

function updateFooter() {
    $("#number").text(`${preguntas_hechas.length} / ${arr.length}`);
    $("#hits").text(numCorrect);
    $("#fails").text(numIncorrect);
    
    let total = numCorrect + numIncorrect;
    let pct = total === 0 ? 0 : Math.round((numCorrect / total) * 100);
    $("#percent").text(pct + "%");
    
    // Actualizar barra de progreso ARIA
    updateProgressBar();
}

function updateProgressBar() {
    let total = arr.length > 0 ? arr.length : 1;
    let pct = (preguntas_hechas.length / total) * 100; 
    $("#progressBar").css("width", pct + "%");
    
    // Actualizar atributos ARIA
    $(".progress-container").attr("aria-valuenow", Math.round(pct));
}

function showFinalResults() {
    $("#mainCard").hide();
    $("#resultReport").show();
    $("#reviewPanel").hide();
    clearInterval(timerInterval);
    
    let total = arr.length > 0 ? arr.length : 1;
    let score = Math.round((numCorrect / total) * 100);
    
    // Determinar emoji según la puntuación
    let emoji = score >= 90 ? "🏆" : score >= 75 ? "🎉" : score >= 60 ? "👍" : "📚";
    
    $("#finalScore").html(`${emoji} ${score}%`);
    
    // Texto con información del número de preguntas
    const countText = desiredQuestionCount === 'all' 
        ? `todas las ${total}` 
        : `${total} de ${fullPool.length}`;
    
    $("#finalStatsText").html(`
        Has acertado <b>${numCorrect}</b> de <b>${total}</b> preguntas.<br>
        Fallaste <b>${numIncorrect}</b> preguntas.<br>
        <small style="color: #64748b;">(Respondiste ${countText} preguntas disponibles)</small><br><br>
        Tiempo total: <span style="font-family:monospace; background:#eee; padding:5px; border-radius:4px;">
            <i class="fas fa-clock"></i> ${$("#timer").text()}
        </span>
    `);
    
    // Guardar en historial
    saveToHistory({
        date: new Date().toISOString(),
        exam: $("#examSelect").val(),
        score: score,
        correct: numCorrect,
        incorrect: numIncorrect,
        total: total,
        time: $("#timer").text(),
        questionCount: desiredQuestionCount
    });
    
    clearProgress(); // Limpiar progreso al terminar
    showNotification("🎊 ¡Examen completado!", "success");
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ===========================================
// CONFIRMACIÓN ANTES DE REINICIAR
// ===========================================

function confirmRestart() {
    if (preguntas_hechas.length > 0) {
        return confirm("¿Estás seguro de que quieres comenzar un nuevo test?\n\nSe perderá todo el progreso actual.");
    }
    return true;
}

// ===========================================
// INICIO DE LA APLICACIÓN
// ===========================================

$(document).ready(() => {
    try {
        $(".version-badge").text("v" + APP_VERSION);
        
        // Configurar atajos de teclado
        setupKeyboardShortcuts();
        
        // Cambiar examen con confirmación
        $("#examSelect").on('change', function() {
            if (confirmRestart()) {
                const examKey = $(this).val();
                showQuestionCountModal(examKey); // Mostrar modal de selección
            } else {
                // Restaurar selección anterior
                $(this).val(localStorage.getItem('current_exam') || 'LPIC2_2');
            }
        });

        // MODO OSCURO
        $("#toggleDarkMode").on('click', () => {
            $("body").toggleClass("dark-mode");
            const isDark = $("body").hasClass("dark-mode");
            $("#toggleDarkMode").html(isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>');
            
            // Guardar preferencia
            localStorage.setItem('dark_mode', isDark);
        });
        
        // Restaurar preferencia de modo oscuro
        if (localStorage.getItem('dark_mode') === 'true') {
            $("body").addClass("dark-mode");
            $("#toggleDarkMode").html('<i class="fas fa-sun"></i>');
        }

        // Botón de reinicio con confirmación
        $("#restartBtn").on('click', function(e) {
            e.preventDefault();
            if (confirm("¿Seguro que quieres empezar un nuevo test?")) {
                clearProgress();
                window.location.reload();
            }
        });
        
        // Intentar cargar progreso guardado
        setTimeout(() => {
            const progressLoaded = loadProgress();
            
            if (!progressLoaded) {
                // Carga inicial: mostrar modal de selección
                let def = $("#examSelect").val();
                if (def) {
                    showQuestionCountModal(def);
                }
            }
        }, 500);
        
        showNotification("✨ Bienvenido al Simulador LPIC-2 Pro", "info");
        
    } catch (error) {
        console.error("Error en inicialización:", error);
        showNotification("❌ Error al iniciar la aplicación", "error");
    }
});

// Guardar progreso antes de cerrar la ventana
window.addEventListener('beforeunload', function(e) {
    if (preguntas_hechas.length > 0 && !examFinished) {
        saveProgress();
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir? Tu progreso se guardará.';
    }
});
