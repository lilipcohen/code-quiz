var qContainer = document.getElementById("quiz-container");
var quizIntro = document.getElementById("quiz-intro");
var startBtn = document.getElementById("start");
var quizContent = document.getElementById("quiz");
var quizQuestions = document.getElementById(".questions");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timeEl = document.getElementById("timer");
var scoreDiv = document.getElementById("score");

//My questions for the quiz
var myQuestions = [
	{
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

//When click start, time will start
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
      
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
        console.log(timerInterval);
    }, 1000);
}

function startQuiz() {
    setTime();
    for (var i = 0; i < myQuestions.length; i++) {
        myQuestions[i];
    
    }
}

startBtn.addEventListener("click", function() {
   startQuiz();
   
});