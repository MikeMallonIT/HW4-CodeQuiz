var viewHighScoresText = document.querySelector(".viewHighScores");
var timerElement = document.querySelector(".timeLeft");
var startButton = document.querySelector(".startButton");
var goBackButton = document.querySelector(".goBack");
var clearHighScoresButton = document.querySelector(".clearHighScores");

var divStartMenu = document.querySelector(".startMenu");
var divQuiz = document.querySelector(".quiz"); 
var divAllDone = document.querySelector(".allDone");

var currentQuestionText = document.getElementById("quizQuestion")
var buttonOne = document.getElementById("buttonAnswerOne");
var buttonTwo = document.getElementById("buttonAnswerTwo");
var buttonThree = document.getElementById("buttonAnswerThree");
var buttonFour = document.getElementById("buttonAnswerFour");

var nextButton = document.querySelector(".nextButton");

var buttonOneClick = document.querySelector(".buttonAnswerOne");
var buttonTwoClick = document.querySelector(".buttonAnswerTwo");
var buttonThreeClick = document.querySelector(".buttonAnswerThree");
var buttonFourClick = document.querySelector(".buttonAnswerFour");

var selectedAnswer = 0;

var timerCount = 5;

//Questions array
var questions = [
//Question 1
'Commonly used data types DO NOT include:',
//Question 2
'The condition in a if / else statement is enclosed within ______.',
//Question 3
'Arrays in JavaScript can be used to store ______.',
//Question 4
'String values must be enclosed within ______ when being assigned to variables.',
//Question 5
'A very useful tool during development and debugging for printing content to the debugger is:'
];

//Answers array
var answers = [
//Question 1, answer = 2  
'strings', 'booleans', 'alerts', 'numbers',

//Question 2, answer = 6
'quotes', 'curly brackts', 'parenthesis', 'square brackets',

//Question 3, answer = 11
'numbers and strings', 'other arrays', 'boolenas', 'all of the above',

//Question 4, answer = 14
'commas', 'curly brackets', 'quotes', 'parenthesis',

//Question 5, answer = 19
'JavaScript', 'terminal/ bash', 'for keep', 'console.log'
];

//Keys linking address in questions array to correct answer address in answers array
var answerAddresses = [2,6,11,14,19];

//Scoreboard variables
var finalScore = 0;
var highScores = [];
var highScoresNames = [];


function openQuiz(){
  startButton.addEventListener("click", function() {

    divStartMenu.setAttribute("class", "hidden");
    divQuiz.setAttribute("class", "visible");
    startTimer()
  });
}

function openScoreboard(){
}

function askQuestions(questionNumber) {

  openQuiz(); 

  currentQuestionText.innerHTML = questions[questionNumber];

    rightAnswer = false;


    if(questionNumber === 0){
      questionNumber = 0
    }
    else{
      questionNumber = questionNumber * 4;
    }

    buttonOne.innerHTML = answers[questionNumber];
    buttonTwo.innerHTML = answers[questionNumber+1];
    buttonThree.innerHTML = answers[questionNumber+2];
    buttonFour.innerHTML = answers[questionNumber+3];

    buttonOneClick.addEventListener("click", function(){
      console.log("button one pushed");
      selectedAnswer = 1;
    });

    buttonTwoClick.addEventListener("click", function(){      
      console.log("button two pushed");
      selectedAnswer = 2;
    });

    buttonThreeClick.addEventListener("click", function(){     
      console.log("button three pushed");
      selectedAnswer = 3
    });

    buttonFourClick.addEventListener("click", function(){    
      console.log("button four pushed");
      selectedAnswer = 4
    });

  return;
  }  


function testCode() {
  


  askQuestions(2);

}

testCode();

function setHighScores(){

}

function getHighScores(){

}

function clearHighScores(){

}

function endGame (){
  divQuiz.setAttribute("class", "hidden");
  divAllDone.setAttribute("class", "visible");

}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      
    if(timerCount <= 0){
      endGame ();
      timerElement.innerHTML = ("")
    }
     
    }, 1000);

    timerElement.innerHTML = (timerCount);
  }