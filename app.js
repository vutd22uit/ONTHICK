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
    currentExam: null, // For exam mode: contains exam config
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [], // Array of indices
    flaggedQuestions: new Set(), // Set of flagged question indices
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

// Subject Configuration
const SUBJECT_CONFIG = {
    'cloud': {
        name: 'Cloud Computing',
        getQuestions: () => typeof cloudQuestions !== 'undefined' ? cloudQuestions : [],
        hasExams: true,
        exams: () => typeof cloudExams !== 'undefined' ? cloudExams : []
    },
    'network': {
        name: 'Mạng Viễn Thông',
        getQuestions: () => typeof networkQuestions !== 'undefined' ? networkQuestions : [],
        hasExams: false
    },
    'security-ch1': {
        name: 'Security Ch 1',
        getQuestions: () => typeof securityCh1Questions !== 'undefined' ? securityCh1Questions : [],
        hasExams: false
    },
    'security-ch2': {
        name: 'Security Ch 2',
        getQuestions: () => typeof securityCh2Questions !== 'undefined' ? securityCh2Questions : [],
        hasExams: false
    },
    'security-ch3': {
        name: 'Security Ch 3',
        getQuestions: () => typeof securityCh3Questions !== 'undefined' ? securityCh3Questions : [],
        hasExams: false
    },
    'security-ch4': {
        name: 'Security Ch 4',
        getQuestions: () => typeof securityCh4Questions !== 'undefined' ? securityCh4Questions : [],
        hasExams: false
    }
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
function startQuiz(subject, mode, examId = null) {
    state.currentSubject = subject;
    state.currentMode = mode;
    state.currentExam = null;
    state.currentQuestionIndex = 0;
    // Initialize empty answers and flags
    state.userAnswers = new Array(state.questions.length).fill(null);
    state.flaggedQuestions = new Set();
    state.correctAnswers = 0;
    state.quizCompleted = false;
    state.startTime = new Date();

    // Get questions for this subject
    const subjectConfig = SUBJECT_CONFIG[subject];
    let allQuestions = [];

    if (subjectConfig) {
        allQuestions = subjectConfig.getQuestions();
    } else {
        console.error(`Unknown subject: ${subject}`);
        return;
    }

    // Handle exam mode with specific exam
    if (mode === 'exam' && examId !== null && subjectConfig.hasExams) {
        const exams = subjectConfig.exams();
        const exam = exams.find(e => e.id === examId);
        if (exam) {
            state.currentExam = exam;
            // Get questions by indices (handle invalid indices gracefully)
            state.questions = exam.questionIndices
                .filter(idx => idx < allQuestions.length)
                .map(idx => allQuestions[idx]);
        } else {
            // Fallback to random selection
            state.questions = shuffleArray([...allQuestions]).slice(0, 25);
        }
    } else {
        // Shuffle and pick questions for practice mode
        state.questions = shuffleArray([...allQuestions]).slice(0, SETTINGS.questionsPerQuiz);
    }

    // Update UI
    let subjectName = subjectConfig ? subjectConfig.name : subject;
    // Special handling for dynamic chapter names if needed, but config handles it mostly

    let modeName = mode === 'practice' ? 'Chế độ ôn tập' : 'Chế độ thi thử';
    if (state.currentExam) {
        modeName = state.currentExam.name;
    }

    document.getElementById('quiz-subject-name').textContent = subjectName;
    document.getElementById('quiz-mode-name').textContent = modeName;
    document.getElementById('total-q').textContent = state.questions.length;

    // Setup timer for exam mode
    const timerElement = document.getElementById('quiz-timer');
    if (mode === 'exam') {
        timerElement.classList.remove('hidden');
        if (state.currentExam && state.currentExam.timeLimit) {
            state.timeRemaining = state.currentExam.timeLimit * 60;
        } else {
            state.timeRemaining = SETTINGS.examTimeMinutes * 60;
        }
        startTimer();
    } else {
        timerElement.classList.add('hidden');
    }

    showView('quiz');
    renderNavigationGrid(); // Render grid
    showQuestion(0);
}

// Show exam selection modal for Cloud Computing
function selectExam(subject) {
    if (subject !== 'cloud' || typeof cloudExams === 'undefined') {
        // Fallback to regular exam mode
        startQuiz(subject, 'exam');
        return;
    }

    const modal = document.getElementById('exam-modal');
    const examList = document.getElementById('exam-list');

    // Generate exam buttons
    examList.innerHTML = cloudExams.map(exam => `
        <button class="exam-option" onclick="startQuiz('cloud', 'exam', ${exam.id})">
            <div class="exam-option-header">
                <span class="exam-option-number">${exam.name}</span>
                <span class="exam-option-time">⏱️ ${exam.timeLimit} phút</span>
            </div>
            <div class="exam-option-desc">${exam.description}</div>
            <div class="exam-option-info">
                <span>📝 ${exam.questionIndices.length} câu hỏi</span>
            </div>
        </button>
    `).join('');

    modal.classList.add('active');
}

function closeExamModal() {
    document.getElementById('exam-modal').classList.remove('active');
}

function showQuestion(index) {
    const question = state.questions[index];
    state.currentQuestionIndex = index;

    // Update question number
    document.getElementById('q-number').textContent = index + 1;
    document.getElementById('current-q').textContent = index + 1;

    // Update buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').textContent = index === state.questions.length - 1 ? 'Hoàn thành' : 'Tiếp theo';

    // Update flag button
    const flagBtn = document.getElementById('flag-btn');
    if (flagBtn) {
        if (state.flaggedQuestions.has(index)) {
            flagBtn.classList.add('active'); // You might need CSS for .btn.active
            flagBtn.innerHTML = '<span>🚩</span> Bỏ đánh dấu';
            flagBtn.style.backgroundColor = '#fff9db';
            flagBtn.style.color = '#f59f00';
            flagBtn.style.borderColor = '#f59f00';
        } else {
            flagBtn.classList.remove('active');
            flagBtn.innerHTML = '<span>🏳️</span> Đánh dấu';
            flagBtn.style.backgroundColor = '';
            flagBtn.style.color = '';
            flagBtn.style.borderColor = '';
        }
    }

    // Update progress bar
    const progress = ((index) / state.questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progress}%`;
    updateNavigationGrid(); // Update grid highlights

    // Update question text
    document.getElementById('question-text').textContent = question.question;

    // Generate answer options
    const answersContainer = document.getElementById('answers-list');
    answersContainer.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];
    const userAnswer = state.userAnswers[index]; // Get stored answer

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

        // Restore state if answered
        if (userAnswer !== null) {
            if (state.currentMode === 'exam') {
                // Exam Mode: Just highlight selected
                if (i === userAnswer) {
                    div.classList.add('selected');
                }
            } else {
                // Practice Mode: Show full results
                div.classList.add('disabled');
                if (i === userAnswer) {
                    div.classList.add('selected');
                    div.classList.add(i === question.correct ? 'correct' : 'wrong');
                    div.querySelector('.answer-icon').textContent = i === question.correct ? '✓' : '✗';
                }
                if (i === question.correct && userAnswer !== question.correct) {
                    div.classList.add('correct');
                    div.querySelector('.answer-icon').textContent = '✓';
                }
            }
        }

        answersContainer.appendChild(div);
    });

    // Hide explanation initially
    document.getElementById('answer-explanation').classList.add('hidden');

    // Show explanation if answered in Practice mode
    if (userAnswer !== null && state.currentMode === 'practice' && question.explanation) {
        document.getElementById('explanation-text').textContent = question.explanation;
        document.getElementById('answer-explanation').classList.remove('hidden');
    }

    // Update Next button
    const nextBtn = document.getElementById('next-btn');
    if (state.currentMode === 'practice') {
        nextBtn.disabled = userAnswer === null; // Disable in practice until answered
    } else {
        nextBtn.disabled = false; // Always enabled in exam to skip
    }

    nextBtn.innerHTML = index < state.questions.length - 1
        ? '<span>Tiếp theo</span> <span>→</span>'
        : '<span>Hoàn thành</span> <span>✓</span>';
}

function selectAnswer(answerIndex) {
    const question = state.questions[state.currentQuestionIndex];
    const options = document.querySelectorAll('.answer-option');

    // PRACTICE MODE: Prevent changing answer if already answered
    if (state.currentMode === 'practice' && state.userAnswers[state.currentQuestionIndex] !== null) {
        return;
    }

    // Store answer
    state.userAnswers[state.currentQuestionIndex] = answerIndex;

    updateNavigationGrid(); // Mark as answered in grid

    // EXAM MODE: Just highlight selection, allow changing
    if (state.currentMode === 'exam') {
        options.forEach((option, i) => {
            option.classList.remove('selected', 'correct', 'wrong', 'disabled'); // Reset
            // option.classList.add('disabled'); // Don't disable in exam mode to allow changing

            if (i === answerIndex) {
                option.classList.add('selected');
                // Don't show icon yet
            }
        });
        return; // Exit, don't show results yet
    }

    // PRACTICE MODE: Show results immediately
    const isCorrect = answerIndex === question.correct;
    if (isCorrect) {
        state.correctAnswers++;
    }

    // Update UI for Practice
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
    if (question.explanation) {
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

    const subjectConfig = SUBJECT_CONFIG[state.currentSubject];
    let subjectName = subjectConfig ? subjectConfig.name : state.currentSubject;

    history.unshift({
        subject: state.currentSubject,
        subjectName: subjectName,
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

    // Dynamic Stats Update based on SUBJECT_CONFIG
    Object.keys(SUBJECT_CONFIG).forEach(subjectKey => {
        const config = SUBJECT_CONFIG[subjectKey];
        const subjectHistory = history.filter(h => h.subject === subjectKey);

        const completedEl = document.getElementById(`${subjectKey}-completed`);
        const totalEl = document.getElementById(`${subjectKey}-total`);

        if (completedEl) {
            // Estimate questions done based on history count * per quiz
            // Or if we track total questions answered in history, we could use that. 
            // Current logic assumes 1 entry = 1 quiz (20 questions).
            // But let's check if the history object actually has 'total' property (yes it does in saveQuizResult)
            // However, previous logic was: length * SETTINGS.questionsPerQuiz. 
            // Let's stick to previous logic for consistency or improve it to sum 'total' from history?
            // Previous: document.getElementById('cloud-completed').textContent = cloudHistory.length * SETTINGS.questionsPerQuiz;
            completedEl.textContent = subjectHistory.length * SETTINGS.questionsPerQuiz;
        }

        if (totalEl) {
            const questions = config.getQuestions();
            totalEl.textContent = questions.length;
        }
    });
}

function updateStatsView() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');

    // Overall progress
    // Overall progress
    let totalQuestions = 0;
    let answeredQuestions = history.reduce((sum, h) => sum + h.total, 0);

    Object.values(SUBJECT_CONFIG).forEach(config => {
        totalQuestions += config.getQuestions().length;
    });

    const progressPercent = totalQuestions > 0 ? Math.min(100, Math.round((answeredQuestions / totalQuestions) * 100)) : 0;
    document.getElementById('progress-value').textContent = progressPercent + '%';

    // Update circular progress (stroke-dashoffset)
    const circle = document.getElementById('progress-circle');
    if (circle) {
        const circumference = 283; // 2 * PI * 45
        const offset = circumference - (progressPercent / 100 * circumference);
        circle.style.strokeDashoffset = offset;
        circle.style.stroke = `url(#gradient)`;
    }

    // Dynamic Subject Stats
    Object.keys(SUBJECT_CONFIG).forEach(subjectKey => {
        const subjectHistory = history.filter(h => h.subject === subjectKey);
        // HTML IDs: cloud-stats-done, cloud-stats-accuracy, etc.
        const doneEl = document.getElementById(`${subjectKey}-stats-done`);
        const accEl = document.getElementById(`${subjectKey}-stats-accuracy`);
        const bestEl = document.getElementById(`${subjectKey}-stats-best`);

        if (subjectHistory.length > 0) {
            if (doneEl) doneEl.textContent = subjectHistory.reduce((sum, h) => sum + h.total, 0) + ' câu';

            if (accEl) {
                const avg = Math.round(subjectHistory.reduce((sum, h) => sum + h.score, 0) / subjectHistory.length);
                accEl.textContent = avg + '%';
            }

            if (bestEl) {
                const best = Math.max(...subjectHistory.map(h => h.score));
                bestEl.textContent = best + '%';
            }
        }
    });

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
