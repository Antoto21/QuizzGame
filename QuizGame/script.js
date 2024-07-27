let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

const questionElement = document.getElementById('question');
const themeElement = document.createElement('p');
themeElement.id = 'theme';
questionElement.parentNode.insertBefore(themeElement, questionElement); // Ajouter l'élément du thème au-dessus de la question
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const searchInput = document.getElementById('search-input');
const backToMenuButton = document.getElementById('back-to-menu');

// Liste des thèmes triés par ordre alphabétique
const themes = ['amidon', 'beurre', 'ble', 'creme', 'farine', 'farinesSansGluten', 'fermentation', 'glucose', 'huiles', 'lait', 'levures', 'margarine', 'oeufs', 'fruits', 'sel', 'eau', 'cacao', 'derivesCacao'];
themes.sort();

function loadTheme(theme) {
    console.log(`Loading theme: ${theme}`);
    clearExistingScripts();
    const script = document.createElement('script');
    script.src = `themes/${theme}.js`;
    script.onload = () => {
        console.log(`Loaded theme: ${theme}`);
        currentQuestions.forEach(question => {
            question.theme = theme; // Ajouter le thème à chaque question
        });
        document.getElementById('menu-container').style.display = 'none';
        searchInput.style.display = 'none';
        backToMenuButton.style.display = 'block';
        document.getElementById('quiz-container').style.display = 'block';
        currentQuestions = getRandomQuestions(10); // Sélectionne 10 questions aléatoires
        currentQuestionIndex = 0;
        score = 0;
        updateScore(); // Mise à jour de l'affichage du score
        userAnswers.length = 0; // Clear previous answers
        loadQuestion();
    };
    script.onerror = () => {
        console.error(`Failed to load theme: ${theme}`);
    };
    document.head.appendChild(script);
}

function startRandomQuiz() {
    const numQuestions = 10;
    console.log(`Starting random quiz with ${numQuestions} questions`);
    loadRandomQuestions(numQuestions);
}

function loadRandomQuestions(numQuestions) {
    console.log(`Loading random questions, total questions: ${numQuestions}`);
    clearExistingScripts();
    let allQuestions = [];
    let loadedScripts = 0;
    const themesToLoad = [...themes]; // Copy of the themes array

    function loadNextTheme() {
        if (themesToLoad.length === 0 || allQuestions.length >= numQuestions) {
            console.log('All themes loaded or required number of questions reached');
            document.getElementById('menu-container').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            currentQuestions = allQuestions.slice(0, numQuestions); // Utiliser les premières questions jusqu'au nombre requis
            console.log(`Selected ${currentQuestions.length} questions for the quiz`);
            currentQuestionIndex = 0;
            score = 0;
            updateScore(); // Mise à jour de l'affichage du score
            userAnswers.length = 0; // Clear previous answers
            loadQuestion();
            return;
        }

        const theme = themesToLoad.shift();
        const script = document.createElement('script');
        script.src = `themes/${theme}.js`;
        script.onload = () => {
            console.log(`Loaded questions from theme: ${theme}`);
            if (typeof currentQuestions !== 'undefined' && currentQuestions.length > 0) {
                currentQuestions.forEach(question => {
                    question.theme = theme; // Ajouter le thème à chaque question
                });
                const randomQuestion = currentQuestions[Math.floor(Math.random() * currentQuestions.length)];
                allQuestions.push(randomQuestion);
                console.log(`Selected question from theme: ${theme}`);
            }
            currentQuestions = []; // Reset currentQuestions for the next theme
            loadNextTheme(); // Load the next theme
        };
        script.onerror = () => {
            console.error(`Failed to load theme: ${theme}`);
            loadNextTheme(); // Continue to the next theme even if one fails
        };
        document.head.appendChild(script);
    }

    loadNextTheme();
}

function clearExistingScripts() {
    console.log('Clearing existing scripts');
    const scripts = document.querySelectorAll('head script');
    scripts.forEach(script => {
        if (script.src.includes('themes/')) {
            document.head.removeChild(script);
        }
    });
}

function getRandomQuestions(num) {
    console.log(`Getting ${num} random questions`);
    const shuffled = currentQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    console.log(`Loading question ${currentQuestionIndex + 1}: ${currentQuestion.questionText}`);
    themeElement.textContent = `Thème : ${currentQuestion.theme}`; // Afficher le thème
    questionElement.textContent = currentQuestion.questionText;
    feedbackElement.textContent = ''; // Clear previous feedback

    const shuffledAnswers = shuffle(currentQuestion.answerOptions.map((option, index) => ({
        text: option,
        index: index
    })));
    
    answerButtons.forEach((button, index) => {
        button.textContent = shuffledAnswers[index].text;
        button.disabled = false;
        button.onclick = () => checkAnswer(shuffledAnswers[index].index);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswerIndex;
    const userAnswer = {
        question: currentQuestion.questionText,
        selectedAnswer: currentQuestion.answerOptions[selectedIndex],
        correctAnswer: currentQuestion.answerOptions[correctIndex],
        feedback: currentQuestion.feedback,
        isCorrect: selectedIndex === correctIndex
    };
    userAnswers.push(userAnswer);
    
    const bodyElement = document.body;
    if (userAnswer.isCorrect) {
        feedbackElement.innerHTML = '<span class="correct">Correct!</span> ' + currentQuestion.feedback;
        score++;
        bodyElement.classList.add('correct');
    } else {
        feedbackElement.innerHTML = '<span class="incorrect">Incorrect.</span> ' + currentQuestion.feedback;
        bodyElement.classList.add('incorrect');
    }
    updateScore(); // Mise à jour de l'affichage du score

    answerButtons.forEach(button => button.disabled = true);

    setTimeout(() => {
        bodyElement.classList.remove('correct', 'incorrect');
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 5000); // 5 secondes pour lire la réponse
}

function updateScore() {
    scoreElement.textContent = `${score}/${currentQuestions.length}`;
}

function showResults() {
    questionElement.textContent = `Quiz terminé ! Vous avez obtenu ${score} sur ${currentQuestions.length}.`;
    feedbackElement.textContent = ''; // Clear feedback
    answerButtons.forEach(button => {
        button.style.display = 'none';
    });
    displaySummary();
}

function displaySummary() {
    const summaryElement = document.createElement('div');
    summaryElement.id = 'summary';
    summaryElement.innerHTML = '<h2>Récapitulatif</h2>';
    
    userAnswers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer-summary');
        
        const questionElement = document.createElement('p');
        questionElement.innerHTML = `<strong>Question :</strong> ${answer.question}`;
        answerElement.appendChild(questionElement);
        
        const feedbackElement = document.createElement('p');
        feedbackElement.innerHTML = `<strong>Explication :</strong> ${answer.feedback}`;
        answerElement.appendChild(feedbackElement);
        
        summaryElement.appendChild(answerElement);
        summaryElement.appendChild(document.createElement('br')); // Ajout d'une ligne vide pour espacer les questions
    });
    
    document.getElementById('quiz-container').appendChild(summaryElement);
}

function filterThemes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const buttons = document.querySelectorAll('#menu-container .grid-container button');
    
    buttons.forEach(button => {
        const theme = button.textContent.toLowerCase();
        if (theme.includes(searchInput)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

function backToMenu() {
    document.getElementById('menu-container').style.display = 'block';
    searchInput.style.display = 'block';
    backToMenuButton.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
}
