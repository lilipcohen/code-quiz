var qContainer = document.getElementById("quiz-container");
var quizIntro = document.getElementById("quiz-intro");
var startBtn = document.getElementById("start");
var quizContent = document.getElementById("quiz");
var questionPrompt = document.getElementById("questionPrompt");
var quizQuestions = document.getElementById("questions");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timeEl = document.getElementById("timer");
var scoreDiv = document.getElementById("score");

//My questions for the quiz
var myQuestions = [{
		question: "What does HTML stand for?",
		answers: {
			a: 'Hyper Text Markup Language',
			b: 'Hyperlinks and Text Markup Language',
			c: 'Hyper Tool Markup Language'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which one of these is an example of a boolean?",
		answers: {
			a: 'true',
			b: '12',
			c: 'Big Bird'
		},
		correctAnswer: 'a'
	},
	{
		question: "In the following array, what would the index of dog be? Ex: myAnimals = [cat, dog, parrot]",
		answers: {
			a: '0',
			b: '1',
			c: '2'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which one of these is an example of a class in CSS?",
		answers: {
			a: '#dragon',
			b: 'h1',
			c: '.monster-mash'
		},
		correctAnswer: 'c'
	},
	{
		question: "How does a computer read code?",
		answers: {
			a: 'Top down',
			b: 'Bottom up',
			c: 'All at once'
		},
		correctAnswer: 'a'
	}
];

//Variables for time and score
var secondsLeft = 30;
var correct = 0;
var currentQuestionIndex = 0
var scores = getScores()

// Timer counts down 30 seconds
function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft;

		if (secondsLeft <= 0) {
			clearInterval(timerInterval);
			endGame()
		}
		console.log(timerInterval);
	}, 1000);
}

function checkAnswer(clickedAnswer) {
	var lower = clickedAnswer.toLowerCase()

	if (lower === myQuestions[currentQuestionIndex].correctAnswer) {
		// If the answer is correct
		correct++
	} else {
		// Otherwise
		secondsLeft -= 5
	}

	// TODO - Move to next question
	currentQuestionIndex++

	if (currentQuestionIndex >= myQuestions.length) {
		// TODO - End the game
		endGame()
		return
	}

	showQuestion()
}

function endGame() {
	console.log("END")
	// TODO - Show end game screen
}

function restartGame() {
	secondsLeft = 30
	currentQuestionIndex = 0
	correct = 0

	// TODO - Hide the end game screen 
	startQuiz()
}

function showQuestion() {
	questionPrompt.textContent = myQuestions[currentQuestionIndex].question;
	choiceA.textContent = myQuestions[currentQuestionIndex].answers.a;
	choiceB.textContent = myQuestions[currentQuestionIndex].answers.b;
	choiceC.textContent = myQuestions[currentQuestionIndex].answers.c;
}

// trying to create a for loop for my questions
function startQuiz() {
	setTime();
	showQuestion()

}

startBtn.addEventListener("click", function () {
	startQuiz();
});

function showSubmitButton() {
	document.getElementById("submit").style.display = "block"
}

function saveScore(initials, score) {
	scores.push({
		initials,
		score
	})
	localStorage.setItem('scores', JSON.stringify(scores))
}

function getScores() {
	return JSON.parse(
		localStorage.getItem('scores')
	) || []
}