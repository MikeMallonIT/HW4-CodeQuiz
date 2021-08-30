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

var timerCount = 60;
var questionCount = 0;

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
    askQuestions(questionCount);
  });
}

function askQuestions(int) {

  currentQuestionText.innerHTML = questions[int];
  var questionMath = 0;

    if(int === 0){
      questionMath = 0
    }
    else{
      questionMath = int * 4;
    }

    buttonOne.innerHTML = answers[questionMath];
    buttonTwo.innerHTML = answers[questionMath+1];
    buttonThree.innerHTML = answers[questionMath+2];
    buttonFour.innerHTML = answers[questionMath+3];

    buttonOneClick.addEventListener("click", function(){
      console.log("button one pushed");
      selectedAnswer = 1;
      checkAnswer(int, 1);
    });

    buttonTwoClick.addEventListener("click", function(){      
      console.log("button two pushed");
      selectedAnswer = 2;
      checkAnswer(int, 2);
    });

    buttonThreeClick.addEventListener("click", function(){     
      console.log("button three pushed");
      selectedAnswer = 3
      checkAnswer(int, 3);
    });

    buttonFourClick.addEventListener("click", function(){    
      console.log("button four pushed");
      selectedAnswer = 4
      checkAnswer(int, 4);
    });

  return;
  }  


function testCode() {
  
  openQuiz();

}

testCode();

function checkAnswer(question, answer){
  
  var correctAnswerAddress = answerAddresses[question];
  var answeredAnswerAddress = 0;
  
  if(question === 0){
    answeredAnswerAddress = answer-1;
  }
  else{
    answeredAnswerAddress = ((question+1)*answer)-1;
  }

  //debug
  console.log("Question", question);
  console.log("Answer", answer)
  console.log("correctAnswerAddress", correctAnswerAddress);
  console.log("answeredAnswerAddress", answeredAnswerAddress);
  console.log("Question Count", questionCount);

  //Correct Answer
  if(correctAnswerAddress == answeredAnswerAddress){
    console.log("THATS RIGHT!")
    questionCount++;
    askQuestions(questionCount)
  }
  else if(correctAnswerAddress >= 13){
    console.log("End Game");
  }

  //wrong answer
  else{
    console.log("You're dumb!")
    questionCount++;
    askQuestions(questionCount)
  }
}


function openScoreboard(){
}

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