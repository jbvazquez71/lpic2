const APP_VERSION = "4.3.0"; // Versión con Swipe UX y Haptics

// Estado centralizado de la aplicación
const state = {
    arr: [],
    fullPool: [],
    arrOpt: ["A", "B", "C", "D", "E"],
    preguntas_hechas: [],
    respuestasUsuario: [],
    currentQuestionIndex: -1,
    numCorrect: 0,
    numIncorrect: 0,
    timerInterval: null,
    timerStartTime: 0,
    seconds: 0,
    examFinished: false,
    desiredQuestionCount: null,
    pendingExamKey: null
};

// Constantes para LocalStorage
const STORAGE_KEY = 'lpic_exam_state';
const STORAGE_HISTORY = 'lpic_exam_history';

// Variables para Swipe
let touchStartX = 0;
let touchEndX = 0;

// ===========================================
// FUNCIONES AUXILIARES DOM
// ===========================================
function el(id) { return document.getElementById(id); }

// ===========================================
// PERSISTENCIA DE DATOS (LocalStorage)
// ===========================================
function saveProgress() {
    try {
        const data = {
            version: APP_VERSION,
            timestamp: Date.now(),
            currentExam: el("examSelect").value,
            currentQuestionIndex: state.currentQuestionIndex,
            preguntas_hechas: state.preguntas_hechas,
            respuestasUsuario: state.respuestasUsuario,
            numCorrect: state.numCorrect,
            numIncorrect: state.numIncorrect,
            seconds: state.seconds,
            examFinished: state.examFinished,
            desiredQuestionCount: state.desiredQuestionCount
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Error guardando progreso:", error);
        showNotification("⚠️ No se pudo guardar el progreso", "warning");
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return false;
        
        const data = JSON.parse(saved);
        const savedExam = data.currentExam;
        if (!savedExam) return false;
        
        const timePassed = Math.floor((Date.now() - data.timestamp) / 60000);
        const countInfo = data.desiredQuestionCount === 'all' 
            ? 'todas las preguntas' 
            : `${data.desiredQuestionCount} preguntas`;
        const message = `¿Deseas continuar tu examen anterior?\n\nExamen: ${savedExam}\nModo: ${countInfo}\nProgreso: ${data.preguntas_hechas.length} contestadas\nTiempo: ${timePassed} min atrás`;
        
        if (!confirm(message)) {
            localStorage.removeItem(STORAGE_KEY);
            return false;
        }
        
        el("examSelect").value = savedExam;
        switchExam(savedExam, true);
        
        state.currentQuestionIndex = data.currentQuestionIndex;
        state.preguntas_hechas = data.preguntas_hechas || [];
        state.respuestasUsuario = data.respuestasUsuario || [];
        state.numCorrect = data.numCorrect || 0;
        state.numIncorrect = data.numIncorrect || 0;
        state.seconds = data.seconds || 0;
        state.examFinished = data.examFinished || false;
        state.desiredQuestionCount = data.desiredQuestionCount || null;
        
        updateFooter();
        updateProgressBar();
        
        if (state.examFinished) {
            showFinalResults();
        } else {
            startTimer(); 
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
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function saveToHistory(results) {
    try {
        let history = JSON.parse(localStorage.getItem(STORAGE_HISTORY) || '[]');
        history.unshift(results);
        history = history.slice(0, 10);
        localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));
    } catch (e) {}
}

// ===========================================
// MANEJO DE ERRORES / NOTIFICACIONES
// ===========================================
function showNotification(message, type = "info") {
    const notification = document.createElement('div');
    notification.className = `app-notification notify-${type}`;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('slide-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================================
// SELECCIÓN DE NÚMERO DE PREGUNTAS
// ===========================================
function showQuestionCountModal(examKey) {
    state.pendingExamKey = examKey;
    
    let tempPool = [];
    if (examKey === "LPIC2_2" && window.preguntasLPIC2_2) tempPool = window.preguntasLPIC2_2;
    else if (examKey === "LPIC2_2_EN" && window.preguntasLPIC2_2_EN) tempPool = window.preguntasLPIC2_2_EN;
    else if (examKey === "LPI_400" && window.preguntas202_400) tempPool = window.preguntas202_400;
    else if (examKey === "LPI_400_EN" && window.preguntas202_400_EN) tempPool = window.preguntas202_400_EN;
    
    el("allQuestionsCount").innerText = `Todas (${tempPool.length})`;
    el("questionCountModal").style.display = "flex";
}

function selectQuestionCount(count) {
    state.desiredQuestionCount = count === 'all' ? 'all' : parseInt(count);
    el("questionCountModal").style.display = "none";
    
    if (state.pendingExamKey) {
        switchExam(state.pendingExamKey);
        state.pendingExamKey = null;
    }
}

function selectCustomCount() {
    const customValue = el("customQuestionCount").value;
    const customCount = parseInt(customValue);
    const errorEl = el("questionCountError");
    
    if (!customValue || isNaN(customCount) || customCount < 1) {
        errorEl.innerText = "⚠️ Introduce un número válido (mínimo 1)";
        errorEl.style.display = "block";
        return;
    }
    
    let tempPool = [];
    if (state.pendingExamKey === "LPIC2_2") tempPool = window.preguntasLPIC2_2 || [];
    else if (state.pendingExamKey === "LPIC2_2_EN") tempPool = window.preguntasLPIC2_2_EN || [];
    else if (state.pendingExamKey === "LPI_400") tempPool = window.preguntas202_400 || [];
    else if (state.pendingExamKey === "LPI_400_EN") tempPool = window.preguntas202_400_EN || [];
    
    if (customCount > tempPool.length) {
        errorEl.innerText = `⚠️ El examen solo tiene ${tempPool.length} preguntas`;
        errorEl.style.display = "block";
        return;
    }
    
    errorEl.style.display = "none";
    selectQuestionCount(customCount);
}

// ===========================================
// MOTOR DE SELECCIÓN DE EXAMEN
// ===========================================
function switchExam(examKey, restoring = false) {
    try {
        state.fullPool = [];
        
        if (examKey === "LPIC2_2") state.fullPool = window.preguntasLPIC2_2 || [];
        else if (examKey === "LPIC2_2_EN") state.fullPool = window.preguntasLPIC2_2_EN || [];
        else if (examKey === "LPI_400") state.fullPool = window.preguntas202_400 || [];
        else if (examKey === "LPI_400_EN") state.fullPool = window.preguntas202_400_EN || [];

        if (!state.fullPool.length) throw new Error(`No se encontraron preguntas para: ${examKey}`);

        let tempArr = [...state.fullPool];
        shuffle(tempArr);
        
        if (state.desiredQuestionCount && state.desiredQuestionCount !== 'all') {
            const limit = Math.min(state.desiredQuestionCount, tempArr.length);
            state.arr = tempArr.slice(0, limit);
        } else {
            state.arr = tempArr; 
        }

        if (!restoring) {
            resetStats();
            startTimer();
            nextQuestion();
        }
        
        const countText = state.desiredQuestionCount === 'all' ? 'todas' : state.desiredQuestionCount;
        showNotification(`Examen cargado: ${state.arr.length} preguntas (${countText} seleccionadas)`, "success");
        
    } catch (error) {
        console.error("Error en switchExam:", error);
        el("question").innerHTML = `
            <div style="color:var(--error-color); text-align:center; padding:20px;">
                <h2><i class="fas fa-exclamation-triangle"></i> Error de carga</h2>
                <p>${error.message}</p>
                <p><small>Verifica los archivos .js en la carpeta js/</small></p>
            </div>
        `;
        el("answer").innerHTML = "";
        el("buttons").innerHTML = "";
        showNotification("Error cargando examen", "error");
    }
}

// ===========================================
// FUNCIONES DE ESTADO Y TEMPORIZADOR
// ===========================================
function resetStats() {
    state.preguntas_hechas = []; 
    state.respuestasUsuario = [];
    state.currentQuestionIndex = -1;
    state.numCorrect = 0; 
    state.numIncorrect = 0;
    state.seconds = 0;
    state.examFinished = false;
    
    el("mainCard").style.display = "block"; 
    el("resultReport").style.display = "none";
    el("reviewPanel").style.display = "none";
    
    updateFooter();
    updateProgressBar();
    clearProgress(); 
}

function startTimer() {
    clearInterval(state.timerInterval);
    state.timerStartTime = Date.now() - (state.seconds * 1000);
    
    state.timerInterval = setInterval(() => {
        state.seconds = Math.floor((Date.now() - state.timerStartTime) / 1000);
        let m = Math.floor(state.seconds / 60).toString().padStart(2, '0');
        let s = (state.seconds % 60).toString().padStart(2, '0');
        el("timer").innerText = `${m}:${s}`;
        
        if (state.seconds % 60 === 0) saveProgress(); 
    }, 1000);
}

// ===========================================
// NAVEGACIÓN POR PREGUNTAS
// ===========================================
function navigateQuestion(direction) {
    if (state.examFinished) return;
    let newIndex = state.currentQuestionIndex + direction;
    
    if (newIndex < 0 || newIndex >= state.arr.length) {
        showNotification("No hay más preguntas en esa dirección", "info");
        return;
    }
    
    state.currentQuestionIndex = newIndex;
    if (state.preguntas_hechas.includes(newIndex)) {
        showAnsweredQuestion(newIndex);
    } else {
        displayQuestion(newIndex);
    }
    saveProgress();
}

function skipQuestion() {
    if (state.examFinished) return;
    let found = false;
    
    for (let i = state.currentQuestionIndex + 1; i < state.arr.length; i++) {
        if (!state.preguntas_hechas.includes(i)) {
            state.currentQuestionIndex = i;
            displayQuestion(i);
            found = true; break;
        }
    }
    
    if (!found) {
        for (let i = 0; i < state.currentQuestionIndex; i++) {
            if (!state.preguntas_hechas.includes(i)) {
                state.currentQuestionIndex = i;
                displayQuestion(i);
                found = true; break;
            }
        }
    }
    
    if (!found) showNotification("No hay más preguntas sin contestar", "info");
    saveProgress();
}

function showAnsweredQuestion(index) {
    let q = state.arr[index];
    let userResponse = state.respuestasUsuario[index];
    
    if (!userResponse) {
        displayQuestion(index);
        return;
    }
    
    let html = `<h3>${q.question}</h3>`;
    if (q.explicacion_extra) {
        html += `<div class="explanation-block">${q.explicacion_extra}</div>`;
    }
    el("question").innerHTML = html;
    
    let answersHtml = "";
    let isMulti = q.answer.includes(",") || q.answer.length > 2;
    
    if (q.options) {
        q.options.forEach((opt, idx) => {
            let letter = state.arrOpt[idx];
            let isChecked = userResponse.userAnswer.includes(letter);
            let checkedAttr = isChecked ? "checked" : "";
            let inputType = isMulti ? "checkbox" : "radio";
            
            answersHtml += `
                <label class="option-label ${isChecked ? 'selected' : ''}" id="label-${letter}">
                    <input type="${inputType}" name="opt" value="${letter}" ${checkedAttr} disabled>
                    <span style="font-weight:bold; color:var(--primary-color); margin-right:10px;">${letter}</span>
                    <span>${opt.substring(2).trim()}</span>
                </label>
            `;
        });
    } else {
        answersHtml = `<input type="text" id="textAnswer" value="${userResponse.userAnswer}" class="text-input" disabled>`;
    }
    
    el("answer").innerHTML = answersHtml;
    
    let isCorrect = userResponse.isCorrect;
    const mainCard = el("mainCard");
    mainCard.classList.remove("correct-border", "incorrect-border");
    mainCard.classList.add(isCorrect ? "correct-border" : "incorrect-border");
    
    let feedbackHtml = `
        <div class="feedback-box ${isCorrect ? 'fb-success' : 'fb-error'}">
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
    
    el("answer").insertAdjacentHTML('beforeend', feedbackHtml);
    el("buttons").innerHTML = ""; 
    updateNavigationButtons();
}

function updateNavigationButtons() {
    el("navigation").style.display = "grid";
    el("prevBtn").disabled = (state.currentQuestionIndex <= 0);
    
    if (state.preguntas_hechas.length === state.arr.length) {
        el("reviewModeBtn").style.display = "block";
    } else {
        el("reviewModeBtn").style.display = "none";
    }
}

// ===========================================
// MOTOR DE PREGUNTAS
// ===========================================
function nextQuestion() {
    const mainCard = el("mainCard");
    mainCard.classList.remove("correct-border", "incorrect-border");
    
    if (state.preguntas_hechas.length >= state.arr.length) {
        state.examFinished = true;
        saveProgress();
        showFinalResults();
        return;
    }

    let n = state.arr.findIndex((_, i) => !state.preguntas_hechas.includes(i));
    
    if (n === -1) {
        state.examFinished = true;
        saveProgress();
        showFinalResults();
        return;
    }
    
    state.currentQuestionIndex = n;
    displayQuestion(n);
    saveProgress();
}

function displayQuestion(index) {
    let q = state.arr[index];
    
    let html = `<h3>${q.question}</h3>`;
    if (q.explicacion_extra) {
        html += `<div class="explanation-block">${q.explicacion_extra}</div>`;
    }
    el("question").innerHTML = html;

    let isMulti = q.answer.includes(",") || q.answer.length > 2; 
    let inputType = isMulti ? "checkbox" : "radio";
    
    el("multiSelectInfo").style.display = (isMulti && q.options) ? "flex" : "none";

    let answersHtml = "";
    if (q.options) {
        q.options.forEach((opt, idx) => {
            let letter = state.arrOpt[idx]; 
            answersHtml += `
                <label class="option-label" id="label-${letter}" tabindex="0">
                    <input type="${inputType}" name="opt" value="${letter}" aria-label="Opción ${letter}">
                    <span style="font-weight:bold; color:var(--primary-color); margin-right:10px;">${letter}</span>
                    <span>${opt.substring(2).trim()}</span>
                </label>
            `;
        });
    } else {
        answersHtml = `<input type="text" id="textAnswer" placeholder="Escribe el comando..." class="text-input" autocomplete="off" aria-label="Campo de respuesta">`;
    }
    
    el("answer").innerHTML = answersHtml;
    el("buttons").innerHTML = `<button id="actionBtn" onclick="checkAnswer(${index})" aria-label="Comprobar respuesta"><i class="fas fa-check"></i> Comprobar</button>`;
    
    updateNavigationButtons();
    
    document.querySelectorAll('input[name="opt"]').forEach(input => {
        input.addEventListener('change', function() {
            document.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
            document.querySelectorAll('input[name="opt"]:checked').forEach(checked => {
                checked.closest('.option-label').classList.add('selected');
            });
        });
    });
    
    if (!q.options) el("textAnswer").focus();
    el("keyboardHelp").style.display = "block";
}

function checkAnswer(index) {
    let q = state.arr[index];
    let userAns = [];
    
    if (q.options) {
        document.querySelectorAll('input[name="opt"]:checked').forEach(el => userAns.push(el.value));
        userAns = userAns.join(", "); 
    } else {
        userAns = el("textAnswer").value;
    }

    if (!userAns || userAns.trim() === "") {
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
        let cleanUserAns = userAns.replace(/\s+/g, ' ').trim().toLowerCase();
        let cleanCorrect = correct.replace(/\s+/g, ' ').trim().toLowerCase();
        isCorrect = (cleanUserAns === cleanCorrect);
    }

    state.respuestasUsuario[index] = {
        userAnswer: userAns,
        correctAnswer: correct,
        isCorrect: isCorrect,
        question: q.question
    };

    const mainCard = el("mainCard");
    if (isCorrect) {
        state.numCorrect++;
        mainCard.classList.add("correct-border");
        // Haptic feedback (Vibración de acierto)
        if (navigator.vibrate) navigator.vibrate(50);
    } else {
        state.numIncorrect++;
        mainCard.classList.add("incorrect-border");
        // Haptic feedback (Vibración de error)
        if (navigator.vibrate) navigator.vibrate([50, 60, 50]);
    }

    let feedbackHtml = `
        <div class="feedback-box ${isCorrect ? 'fb-success' : 'fb-error'}">
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
    
    el("answer").insertAdjacentHTML('beforeend', feedbackHtml);
    el("buttons").innerHTML = `<button id="nextBtn" onclick="processNext(${index})" aria-label="Siguiente pregunta">Siguiente <i class="fas fa-arrow-right"></i></button>`;
    
    document.querySelectorAll("input").forEach(input => input.disabled = true);
    el("nextBtn").focus();

    if (!state.preguntas_hechas.includes(index)) {
        state.preguntas_hechas.push(index);
    }
    
    updateFooter();
    saveProgress();
}

function processNext(index) {
    updateProgressBar();
    nextQuestion();
}

// ===========================================
// MODO DE REVISIÓN POST-EXAMEN
// ===========================================
function showReviewMode() {
    el("resultReport").style.display = "none";
    el("mainCard").style.display = "none";
    el("reviewPanel").style.display = "block";
    generateReviewList();
}

function enterReviewMode() { showReviewMode(); }

function exitReviewMode() {
    el("reviewPanel").style.display = "none";
    
    if (state.examFinished) {
        el("resultReport").style.display = "block";
    } else {
        el("mainCard").style.display = "block";
        if (state.currentQuestionIndex >= 0) {
            showAnsweredQuestion(state.currentQuestionIndex);
        }
    }
}

function generateReviewList() {
    let html = "";
    
    state.arr.forEach((q, idx) => {
        let userResponse = state.respuestasUsuario[idx];
        let statusClass = !userResponse ? "unanswered" : (userResponse.isCorrect ? "correct" : "incorrect");
        let statusBadge = !userResponse ? "badge-unanswered" : (userResponse.isCorrect ? "badge-correct" : "badge-incorrect");
        let statusIcon = !userResponse ? '<i class="fas fa-question-circle"></i>' : (userResponse.isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>');
        let statusText = !userResponse ? 'Sin contestar' : (userResponse.isCorrect ? 'Correcta' : 'Incorrecta');
        
        html += `
            <div class="review-item ${statusClass}" onclick="reviewQuestion(${idx})" tabindex="0" role="button">
                <div class="review-item-header">
                    <span><strong>Pregunta ${idx + 1}</strong></span>
                    <span class="review-item-badge ${statusBadge}">${statusIcon} ${statusText}</span>
                </div>
                <div class="review-item-question">${q.question.substring(0, 100)}${q.question.length > 100 ? '...' : ''}</div>
                ${userResponse ? `
                    <div class="review-item-answer">
                        <span><i class="fas fa-user"></i> Tu respuesta: <strong>${userResponse.userAnswer}</strong></span>
                        ${!userResponse.isCorrect ? `<span><i class="fas fa-check"></i> Correcta: <strong>${userResponse.correctAnswer}</strong></span>` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    el("reviewList").innerHTML = html;
}

function reviewQuestion(index) {
    el("reviewPanel").style.display = "none";
    el("mainCard").style.display = "block";
    state.currentQuestionIndex = index;
    showAnsweredQuestion(index);
}

// ===========================================
// ATAJOS DE TECLADO Y GESTOS MÓVILES
// ===========================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'text') return;
        
        if (e.which === 13) {
            e.preventDefault();
            const actionBtn = el("actionBtn");
            const nextBtn = el("nextBtn");
            if (actionBtn && actionBtn.offsetParent !== null) actionBtn.click();
            else if (nextBtn && nextBtn.offsetParent !== null) nextBtn.click();
            return;
        }
        
        if (e.which >= 49 && e.which <= 53) {
            e.preventDefault();
            let index = e.which - 49; 
            let letter = state.arrOpt[index];
            let input = document.querySelector(`input[value="${letter}"]`);
            
            if (input && !input.disabled) {
                if (input.type === 'checkbox') input.checked = !input.checked;
                else input.checked = true;
                
                input.dispatchEvent(new Event('change'));
            }
            return;
        }
        
        if (e.which === 37) {
            e.preventDefault();
            const prevBtn = el("prevBtn");
            if (prevBtn && prevBtn.offsetParent !== null && !prevBtn.disabled) navigateQuestion(-1);
            return;
        }
        
        if (e.which === 39) {
            e.preventDefault();
            const skipBtn = el("skipBtn");
            if (skipBtn && skipBtn.offsetParent !== null) skipQuestion();
            return;
        }
        
        if (e.which === 72) {
            e.preventDefault();
            toggleKeyboardModal();
            return;
        }
        
        if (e.which === 82 && state.examFinished) {
            e.preventDefault();
            const reviewBtn = el("reviewBtn");
            if (reviewBtn && reviewBtn.offsetParent !== null) showReviewMode();
            return;
        }
        
        if (e.which === 27) closeKeyboardModal();
    });
    
    document.addEventListener('keypress', function(e) {
        if (e.target.id === 'customQuestionCount' && e.which === 13) {
            selectCustomCount();
        }
    });
}

function handleSwipe() {
    const swipeThreshold = 50; 
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < swipeThreshold) return; 

    if (diff > 0) {
        // Deslizar izquierda -> Siguiente o Saltar
        const nextBtn = el("nextBtn");
        const skipBtn = el("skipBtn");
        if (nextBtn && nextBtn.offsetParent !== null) nextBtn.click();
        else if (skipBtn && skipBtn.offsetParent !== null) skipQuestion();
    } else {
        // Deslizar derecha -> Anterior
        const prevBtn = el("prevBtn");
        if (prevBtn && prevBtn.offsetParent !== null && !prevBtn.disabled) navigateQuestion(-1);
    }
}

function setupTouchGestures() {
    const mainCard = el("mainCard");
    
    mainCard.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    mainCard.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
}

function toggleKeyboardModal() {
    const modal = el("keyboardModal");
    modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "flex" : "none";
}

function closeKeyboardModal() { el("keyboardModal").style.display = "none"; }

// ===========================================
// UI & TOOLS
// ===========================================
function updateFooter() {
    el("number").innerText = `${state.preguntas_hechas.length} / ${state.arr.length}`;
    el("hits").innerText = state.numCorrect;
    el("fails").innerText = state.numIncorrect;
    
    let total = state.numCorrect + state.numIncorrect;
    let pct = total === 0 ? 0 : Math.round((state.numCorrect / total) * 100);
    el("percent").innerText = pct + "%";
    
    updateProgressBar();
}

function updateProgressBar() {
    let total = state.arr.length > 0 ? state.arr.length : 1;
    let pct = (state.preguntas_hechas.length / total) * 100; 
    el("progressBar").style.width = pct + "%";
    document.querySelector(".progress-container").setAttribute("aria-valuenow", Math.round(pct));
}

function showFinalResults() {
    el("mainCard").style.display = "none";
    el("resultReport").style.display = "block";
    el("reviewPanel").style.display = "none";
    clearInterval(state.timerInterval);
    
    let total = state.arr.length > 0 ? state.arr.length : 1;
    let score = Math.round((state.numCorrect / total) * 100);
    let emoji = score >= 90 ? "🏆" : score >= 75 ? "🎉" : score >= 60 ? "👍" : "📚";
    
    el("finalScore").innerHTML = `${emoji} ${score}%`;
    
    const countText = state.desiredQuestionCount === 'all' 
        ? `todas las ${total}` 
        : `${total} de ${state.fullPool.length}`;
    
    el("finalStatsText").innerHTML = `
        Has acertado <b>${state.numCorrect}</b> de <b>${total}</b> preguntas.<br>
        Fallaste <b>${state.numIncorrect}</b> preguntas.<br>
        <small style="color: #64748b;">(Respondiste ${countText} preguntas disponibles)</small><br><br>
        Tiempo total: <span style="font-family:monospace; background:var(--bg-light); padding:5px; border-radius:4px; border: 1px solid #cbd5e1;">
            <i class="fas fa-clock"></i> ${el("timer").innerText}
        </span>
    `;
    
    saveToHistory({
        date: new Date().toISOString(),
        exam: el("examSelect").value,
        score: score,
        correct: state.numCorrect,
        incorrect: state.numIncorrect,
        total: total,
        time: el("timer").innerText,
        questionCount: state.desiredQuestionCount
    });
    
    clearProgress(); 
    showNotification("🎊 ¡Examen completado!", "success");
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function confirmRestart() {
    if (state.preguntas_hechas.length > 0) {
        return confirm("¿Estás seguro de que quieres comenzar un nuevo test?\n\nSe perderá todo el progreso actual.");
    }
    return true;
}

// ===========================================
// INICIO DE LA APLICACIÓN
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        el("versionBadge").innerText = "v" + APP_VERSION;
        setupKeyboardShortcuts();
        setupTouchGestures(); // Iniciar los gestos del móvil
        
        el("examSelect").addEventListener('change', function() {
            if (confirmRestart()) {
                const examKey = this.value;
                showQuestionCountModal(examKey);
            } else {
                this.value = localStorage.getItem('current_exam') || 'LPIC2_2';
            }
        });

        el("toggleDarkMode").addEventListener('click', () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            el("toggleDarkMode").innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('dark_mode', isDark);
        });
        
        if (localStorage.getItem('dark_mode') === 'true') {
            document.body.classList.add("dark-mode");
            el("toggleDarkMode").innerHTML = '<i class="fas fa-sun"></i>';
        }

        document.body.addEventListener('click', function(e) {
            if (e.target.closest('#restartBtn')) {
                e.preventDefault();
                if (confirm("¿Seguro que quieres empezar un nuevo test?")) {
                    clearProgress();
                    window.location.reload();
                }
            }
        });
        
        setTimeout(() => {
            const progressLoaded = loadProgress();
            if (!progressLoaded) {
                let def = el("examSelect").value;
                if (def) showQuestionCountModal(def);
            }
        }, 500);
        
        showNotification("✨ Bienvenido al Simulador LPIC-2 Pro", "info");
        
    } catch (error) {
        console.error("Error en inicialización:", error);
        showNotification("❌ Error al iniciar la aplicación", "error");
    }
});

window.addEventListener('beforeunload', function(e) {
    if (state.preguntas_hechas.length > 0 && !state.examFinished) {
        saveProgress();
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir? Tu progreso se guardará.';
    }
});