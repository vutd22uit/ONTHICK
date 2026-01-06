/* =========================================
   ÔN THI CUỐI KỲ - MAIN APP LOGIC
   ========================================= */

// =========================================
// STATE MANAGEMENT
// =========================================
const state = {
    currentView: 'home',
    currentSubject: null,
    currentMode: null, // 'practice' or 'exam'
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    correctAnswers: 0,
    timer: null,
    timeRemaining: 0,
    startTime: null,
    quizCompleted: false
};

// Quiz settings
const SETTINGS = {
    questionsPerQuiz: 20,
    examTimeMinutes: 30
};

// =========================================
// INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadProgress();
    updateHomeStats();
});

function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            showView(view);
            
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// =========================================
// VIEW MANAGEMENT
// =========================================
function showView(viewName) {
    // Stop timer if leaving quiz
    if (state.currentView === 'quiz' && viewName !== 'quiz') {
        stopTimer();
    }
    
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewName}-view`).classList.add('active');
    state.currentView = viewName;
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    
    // Special handling for stats view
    if (viewName === 'stats') {
        updateStatsView();
    }
    
    if (viewName === 'home') {
        updateHomeStats();
    }
}

// =========================================
// QUIZ FUNCTIONS
// =========================================
function startQuiz(subject, mode) {
    state.currentSubject = subject;
    state.currentMode = mode;
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.correctAnswers = 0;
    state.quizCompleted = false;
    state.startTime = new Date();
    
    // Get questions for this subject
    const allQuestions = subject === 'cloud' ? cloudQuestions : networkQuestions;
    
    // Shuffle and pick questions
    state.questions = shuffleArray([...allQuestions]).slice(0, SETTINGS.questionsPerQuiz);
    
    // Update UI
    const subjectName = subject === 'cloud' ? 'Cloud Computing' : 'Mạng Viễn Thông';
    const modeName = mode === 'practice' ? 'Chế độ ôn tập' : 'Chế độ thi thử';
    
    document.getElementById('quiz-subject-name').textContent = subjectName;
    document.getElementById('quiz-mode-name').textContent = modeName;
    document.getElementById('total-q').textContent = state.questions.length;
    
    // Setup timer for exam mode
    const timerElement = document.getElementById('quiz-timer');
    if (mode === 'exam') {
        timerElement.classList.remove('hidden');
        state.timeRemaining = SETTINGS.examTimeMinutes * 60;
        startTimer();
    } else {
        timerElement.classList.add('hidden');
    }
    
    // Show first question
    showQuestion(0);
    showView('quiz');
}

function showQuestion(index) {
    const question = state.questions[index];
    state.currentQuestionIndex = index;
    
    // Update question number
    document.getElementById('q-number').textContent = index + 1;
    document.getElementById('current-q').textContent = index + 1;
    
    // Update progress bar
    const progress = ((index) / state.questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progress}%`;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Generate answer options
    const answersContainer = document.getElementById('answers-list');
    answersContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, i) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        div.dataset.index = i;
        div.innerHTML = `
            <span class="answer-label">${labels[i]}</span>
            <span class="answer-text">${option}</span>
            <span class="answer-icon"></span>
        `;
        div.addEventListener('click', () => selectAnswer(i));
        answersContainer.appendChild(div);
    });
    
    // Hide explanation
    document.getElementById('answer-explanation').classList.add('hidden');
    
    // Reset next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.innerHTML = index < state.questions.length - 1 
        ? '<span>Tiếp theo</span> <span>→</span>'
        : '<span>Hoàn thành</span> <span>✓</span>';
}

function selectAnswer(answerIndex) {
    const question = state.questions[state.currentQuestionIndex];
    const options = document.querySelectorAll('.answer-option');
    
    // Check if already answered (practice mode shows immediately)
    if (state.userAnswers[state.currentQuestionIndex] !== undefined) {
        return;
    }
    
    // Store answer
    state.userAnswers[state.currentQuestionIndex] = answerIndex;
    
    // Check if correct
    const isCorrect = answerIndex === question.correct;
    if (isCorrect) {
        state.correctAnswers++;
    }
    
    // Update UI
    options.forEach((option, i) => {
        option.classList.add('disabled');
        
        if (i === answerIndex) {
            option.classList.add('selected');
            if (isCorrect) {
                option.classList.add('correct');
                option.querySelector('.answer-icon').textContent = '✓';
            } else {
                option.classList.add('wrong');
                option.querySelector('.answer-icon').textContent = '✗';
            }
        }
        
        if (i === question.correct && !isCorrect) {
            option.classList.add('correct');
            option.querySelector('.answer-icon').textContent = '✓';
        }
    });
    
    // Show explanation in practice mode
    if (state.currentMode === 'practice' && question.explanation) {
        document.getElementById('explanation-text').textContent = question.explanation;
        document.getElementById('answer-explanation').classList.remove('hidden');
    }
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        showQuestion(state.currentQuestionIndex + 1);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    stopTimer();
    state.quizCompleted = true;
    
    // Calculate results
    const score = Math.round((state.correctAnswers / state.questions.length) * 100);
    const wrongCount = state.questions.length - state.correctAnswers;
    
    // Calculate time spent
    const endTime = new Date();
    const timeSpentMs = endTime - state.startTime;
    const minutes = Math.floor(timeSpentMs / 60000);
    const seconds = Math.floor((timeSpentMs % 60000) / 1000);
    const timeSpentStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update result UI
    document.getElementById('result-score').textContent = score;
    document.getElementById('correct-count').textContent = state.correctAnswers;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('time-spent').textContent = timeSpentStr;
    
    // Set result icon and title based on score
    let icon, title;
    if (score >= 90) {
        icon = '🏆';
        title = 'Xuất sắc!';
    } else if (score >= 70) {
        icon = '🎉';
        title = 'Tốt lắm!';
    } else if (score >= 50) {
        icon = '💪';
        title = 'Cố gắng thêm!';
    } else {
        icon = '📚';
        title = 'Cần ôn tập thêm!';
    }
    
    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    
    // Save to history
    saveQuizResult(score, timeSpentStr);
    
    showView('result');
}

function exitQuiz() {
    if (state.quizCompleted || confirm('Bạn có chắc muốn thoát? Tiến độ sẽ bị mất.')) {
        stopTimer();
        showView('home');
    }
}

function reviewAnswers() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    
    state.questions.forEach((question, qIndex) => {
        const userAnswer = state.userAnswers[qIndex];
        const isCorrect = userAnswer === question.correct;
        
        const div = document.createElement('div');
        div.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        
        let answersHtml = question.options.map((opt, i) => {
            let classes = 'review-answer';
            if (i === userAnswer) classes += ' user-answer';
            if (i === question.correct) classes += ' correct-answer';
            
            return `
                <div class="${classes}">
                    <span class="review-answer-label">${labels[i]}.</span>
                    <span>${opt}</span>
                    ${i === question.correct ? '<span style="margin-left: auto;">✓</span>' : ''}
                    ${i === userAnswer && !isCorrect ? '<span style="margin-left: auto;">✗</span>' : ''}
                </div>
            `;
        }).join('');
        
        div.innerHTML = `
            <div class="review-question">
                <span class="review-question-number">Câu ${qIndex + 1}:</span> ${question.question}
            </div>
            <div class="review-answers">
                ${answersHtml}
            </div>
            ${question.explanation ? `<div class="review-explanation">💡 ${question.explanation}</div>` : ''}
        `;
        
        reviewList.appendChild(div);
    });
    
    showView('review');
}

// =========================================
// TIMER FUNCTIONS
// =========================================
function startTimer() {
    updateTimerDisplay();
    state.timer = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        
        if (state.timeRemaining <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-value').textContent = display;
    
    // Warning when time is low
    const timerElement = document.getElementById('quiz-timer');
    if (state.timeRemaining <= 60) {
        timerElement.style.animation = 'pulse 1s infinite';
    }
}

// =========================================
// PROGRESS & STATS
// =========================================
function saveQuizResult(score, timeSpent) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    history.unshift({
        subject: state.currentSubject,
        subjectName: state.currentSubject === 'cloud' ? 'Cloud Computing' : 'Mạng Viễn Thông',
        mode: state.currentMode,
        score: score,
        correct: state.correctAnswers,
        total: state.questions.length,
        timeSpent: timeSpent,
        date: new Date().toISOString()
    });
    
    // Keep only last 50 entries
    if (history.length > 50) {
        history.pop();
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

function loadProgress() {
    // This runs on page load to update stats
}

function updateHomeStats() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    // Total sessions
    document.getElementById('total-sessions').textContent = history.length;
    
    // Average score
    if (history.length > 0) {
        const avgScore = Math.round(history.reduce((sum, h) => sum + h.score, 0) / history.length);
        document.getElementById('avg-score').textContent = avgScore + '%';
        
        // Best score
        const bestScore = Math.max(...history.map(h => h.score));
        document.getElementById('best-score').textContent = bestScore + '%';
    }
    
    // Per-subject completed
    const cloudHistory = history.filter(h => h.subject === 'cloud');
    const networkHistory = history.filter(h => h.subject === 'network');
    
    document.getElementById('cloud-completed').textContent = cloudHistory.length * SETTINGS.questionsPerQuiz;
    document.getElementById('network-completed').textContent = networkHistory.length * SETTINGS.questionsPerQuiz;
    
    // Update total questions
    document.getElementById('cloud-total').textContent = typeof cloudQuestions !== 'undefined' ? cloudQuestions.length : 50;
    document.getElementById('network-total').textContent = typeof networkQuestions !== 'undefined' ? networkQuestions.length : 50;
}

function updateStatsView() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    
    // Overall progress
    const totalQuestions = (typeof cloudQuestions !== 'undefined' ? cloudQuestions.length : 50) + 
                          (typeof networkQuestions !== 'undefined' ? networkQuestions.length : 50);
    const answeredQuestions = history.reduce((sum, h) => sum + h.total, 0);
    const progressPercent = Math.min(100, Math.round((answeredQuestions / totalQuestions) * 100));
    
    document.getElementById('progress-value').textContent = progressPercent + '%';
    
    // Update circular progress (stroke-dashoffset)
    const circle = document.getElementById('progress-circle');
    if (circle) {
        const circumference = 283; // 2 * PI * 45
        const offset = circumference - (progressPercent / 100 * circumference);
        circle.style.strokeDashoffset = offset;
        circle.style.stroke = `url(#gradient)`;
    }
    
    // Cloud stats
    const cloudHistory = history.filter(h => h.subject === 'cloud');
    if (cloudHistory.length > 0) {
        document.getElementById('cloud-stats-done').textContent = 
            cloudHistory.reduce((sum, h) => sum + h.total, 0) + ' câu';
        document.getElementById('cloud-stats-accuracy').textContent = 
            Math.round(cloudHistory.reduce((sum, h) => sum + h.score, 0) / cloudHistory.length) + '%';
        document.getElementById('cloud-stats-best').textContent = 
            Math.max(...cloudHistory.map(h => h.score)) + '%';
    }
    
    // Network stats
    const networkHistory = history.filter(h => h.subject === 'network');
    if (networkHistory.length > 0) {
        document.getElementById('network-stats-done').textContent = 
            networkHistory.reduce((sum, h) => sum + h.total, 0) + ' câu';
        document.getElementById('network-stats-accuracy').textContent = 
            Math.round(networkHistory.reduce((sum, h) => sum + h.score, 0) / networkHistory.length) + '%';
        document.getElementById('network-stats-best').textContent = 
            Math.max(...networkHistory.map(h => h.score)) + '%';
    }
    
    // History list
    const historyList = document.getElementById('history-list');
    if (history.length === 0) {
        historyList.innerHTML = `
            <div class="history-empty">
                <span>📭</span>
                <p>Chưa có lịch sử làm bài</p>
            </div>
        `;
    } else {
        historyList.innerHTML = history.slice(0, 10).map(h => {
            const date = new Date(h.date);
            const dateStr = date.toLocaleDateString('vi-VN') + ' ' + date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
            return `
                <div class="history-item">
                    <div class="history-item-info">
                        <span class="history-item-subject">${h.subjectName}</span>
                        <span class="history-item-date">${dateStr}</span>
                    </div>
                    <span class="history-item-score">${h.score}%</span>
                </div>
            `;
        }).join('');
    }
}

function resetProgress() {
    if (confirm('Bạn có chắc muốn xóa tất cả dữ liệu? Hành động này không thể hoàn tác.')) {
        localStorage.removeItem('quizHistory');
        updateHomeStats();
        updateStatsView();
        alert('Đã xóa tất cả dữ liệu!');
    }
}

// =========================================
// UTILITY FUNCTIONS
// =========================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
