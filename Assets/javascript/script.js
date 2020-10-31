var qContainer = document.getElementById("quiz-container");
var quizIntro = document.getElementById("quiz-intro");
var startBtn = document.getElementById("start");
var quizContent = document.getElementById("quiz");
var questionPrompt = document.getElementById("questionPrompt");
var quizQuestions = document.getElementById("questions");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var submitBtn = document.getElementById("submit");
var timeEl = document.getElementById("timer");
var scoreDiv = document.getElementById("score");
var gameOver = document.getElementById("game-over");
var startOver = document.getElementById("re-start");

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
var secondsLeft = 50;
var correct = 0;
var currentQuestionIndex = 0
var scores = getScores()

// Timer counts down 50 seconds
function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft;

		if (secondsLeft <= 0 || currentQuestionIndex === myQuestions.length) {
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
		endGame();
		return
	}

	showQuestion()
}

//display end game screen
function endGame() {
	showGameOver();
}

//resetting variables and questions
function restartGame() {
	secondsLeft = 50
	currentQuestionIndex = 0
	correct = 0

	hideGameOver();
	startQuiz();
}

//Displays quiz questions 
function showQuestion() {
	questionPrompt.textContent = myQuestions[currentQuestionIndex].question;
	choiceA.textContent = myQuestions[currentQuestionIndex].answers.a;
	choiceB.textContent = myQuestions[currentQuestionIndex].answers.b;
	choiceC.textContent = myQuestions[currentQuestionIndex].answers.c;
	showSubmitButton();

}

// When quiz starts these functions are called, intro is hidden, timer starts
function startQuiz() {
	hidequizIntro ();
	setTime();
	showQuestion();

}

//click start button to start quiz!
startBtn.addEventListener("click", function () {
	startQuiz();
});

//Show submit button
function showSubmitButton() {
	document.getElementById("submit").style.display = "block";
}

//When hit submit show Game over
submitBtn.addEventListener("click", function () {
endGame();
});

//Show game over
function showGameOver() {
	document.getElementById("game-over").style.display = "block"
}

//Hide quiz intro with start button
function hidequizIntro () {
	document.getElementById("quiz-intro").style.display = "none";
}

//hide game over
function hideGameOver() {
	document.getElementById("game-over").style.display = "none";
}

//click to start over
startOver.addEventListener("click", function () {
	restartGame();
	});

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