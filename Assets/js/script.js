//Elements at the top of the page
var viewHighScoresText = document.querySelector(".viewHighScores");
var timerElement = document.querySelector(".timeLeft");

//Used to make sections visible or hidden
var divStartMenu = document.querySelector(".startMenu");
var divQuiz = document.querySelector(".quiz"); 
var divAllDone = document.querySelector(".allDone");
var divHighScores = document.querySelector(".highScores");
var divCorrectIncorrect = document.querySelector(".correctIncorrect");

//---Text inputs---
  //Display current question
var currentQuestionText = document.getElementById("quizQuestion")

  //Display answers in the buttons
var buttonOne = document.getElementById("buttonAnswerOne");
var buttonTwo = document.getElementById("buttonAnswerTwo");
var buttonThree = document.getElementById("buttonAnswerThree");
var buttonFour = document.getElementById("buttonAnswerFour");

  //Display incorrect or correct depending on answer validation
var correctIncorrectText = document.getElementById("correctIncorrectText");

//---Button clicks---
  //Start Button
var startButton = document.querySelector(".startButton");
 
  //Answer Buttons
var buttonOneClick = document.querySelector(".buttonAnswerOne");
var buttonTwoClick = document.querySelector(".buttonAnswerTwo");
var buttonThreeClick = document.querySelector(".buttonAnswerThree");
var buttonFourClick = document.querySelector(".buttonAnswerFour");

  //Submit initials button for high score
var submitButtonClick = document.querySelector(".submitButton");

  //Buttons on high score page
var goBackButton = document.querySelector(".goBack");
var clearHighScoresButton = document.querySelector(".clearHighScores");

//Global Math Variables
var selectedAnswer = 0;
var timerCount = 60;
var questionCount = 0;

//Scoreboard variables
var gameOver = false;
var finalScore = 0;
var userInitials = "";
var highScores = [];
var highScoresNames = [];

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

//Kicks app off when start button is pushed
function openQuiz(){
  startButton.addEventListener("click", function() {

    divStartMenu.setAttribute("class", "hidden");
    divHighScores.setAttribute("class", "hidden");
    divQuiz.setAttribute("class", "visible");

    timerCount = 60;
    startTimer()
    askQuestions(questionCount);
  });
}

//Asks questions and displays answer buttons
function askQuestions(int) {

  currentQuestionText.innerHTML = questions[int];
  console.log("Int: ", int);

  var questionMath = 0;
    if(int === 0){
      questionMath = 0
    }
    else{
      questionMath = int * 4;
    }

    //sets the buttons to the correct set of answers
    buttonOne.innerHTML = answers[questionMath];
    buttonTwo.innerHTML = answers[questionMath+1];
    buttonThree.innerHTML = answers[questionMath+2];
    buttonFour.innerHTML = answers[questionMath+3];

    //Submits the chosen answer
    if(selectedAnswer == 0){
    buttonOneClick.addEventListener("click", function(){
      console.log("button one pushed");
      selectedAnswer = 1;
      checkAnswer(int, selectedAnswer);
    });

    buttonTwoClick.addEventListener("click", function(){      
      console.log("button two pushed");
      selectedAnswer = 2;
      checkAnswer(int, selectedAnswer);
    });

    buttonThreeClick.addEventListener("click", function(){     
      console.log("button three pushed");
      selectedAnswer = 3;
      checkAnswer(int, selectedAnswer);
    });

    buttonFourClick.addEventListener("click", function(){    
      console.log("button four pushed");
      selectedAnswer = 4;
      checkAnswer(int, selectedAnswer);
    });
    }

    //Resets the selected answer variable
    selectedAnswer=0;

  return;
  }  

//Check to see if the selected answer is correct
function checkAnswer(question, answer){

  var correctAnswerAddress = answerAddresses[question];
  var answeredAnswerAddress = 0;
  
  //If the selected question is zero (first), subtract 1 for the array address
  if(question === 0){
    answeredAnswerAddress = answer-1;
  }

  //If the question is not zero, multiply question and answer to find correct address
  else{
    answeredAnswerAddress = ((question*answer)-1);
  }

  //debug
  //console.log("Question", question);
  //console.log("Answer", answer)
  //console.log("correctAnswerAddress", correctAnswerAddress);
  //console.log("answeredAnswerAddress", answeredAnswerAddress);
  //console.log("Question Count", questionCount);

  //End the game after the 5th question is asked
  //Functions if answer is correct
  if(correctAnswerAddress == answeredAnswerAddress){
    console.log("Correct Answer")
    questionCount++;
    askQuestions(questionCount);
    correctIncorrect(true);
    if(questionCount == 5){
      endGame ();
      gameOver = true;
    }
  }
  //Functions if answer is wrong
  else{
    console.log("Wrong Answer")
    questionCount++;
    timerCount = timerCount-10;
    askQuestions(questionCount);
    correctIncorrect(false);
    if(questionCount == 5){
      endGame ();
      gameOver = true;
    }
  }
}

//Display "correct or incorrect" when answer button is clicked
function correctIncorrect(value) {

  if(value == true){
    divCorrectIncorrect.setAttribute("class", "visible");
    correctIncorrectText.innerHTML="Correct!";
    finalScore +1;
  }
  else{
    divCorrectIncorrect.setAttribute("class", "visible");
    correctIncorrectText.innerHTML="Incorrect";
    finalScore -1;
  }
}

//---SCORE BOARD FUNCTIONS---
  //End the quiz questions and display the page showing score and asking for initials
function endGame (){
  divQuiz.setAttribute("class", "hidden");
  divAllDone.setAttribute("class", "visible");
  timerElement.setAttribute("class", "hidden");

  divCorrectIncorrect.setAttribute("class", "hidden");

  submitButtonClick.addEventListener("click", function(){
    submitHighScore();
  });
}

//Open the scoreboard
function openScoreboard(){
  divAllDone.setAttribute("class", "hidden");
  divHighScores.setAttribute("class", "visible");

  goBackButton.addEventListener("click", function(){
    goBack();
    console.log("Go back button clicked");
  });

  clearHighScoresButton.addEventListener("click", function(){
    clearHighScores();
  });
}

//Set the score after quiz is over
function setHighScores(score){
  finalScore = score;
  highScores.push(finalScore);
}

//Return the high scores in decending order
function getHighScores(){

  console.log("ALL OF THE HIGH SCORES", highScores.sort(function(a, b){return b-a}));

}

//Clear the high scores when clear button is pushed
function clearHighScores(){

  highScores = [];

}

function submitHighScore (){

  setHighScores(timerCount);
  openScoreboard();
  userInitials = document.getElementById("initials").value;
}

function goBack(){
  //reset variables
  selectedAnswer = 0;
  questionCount = 0;
  gameOver = false;
  inalScore = 0;
  userInitials = "";

  divStartMenu.setAttribute("class", "visible");

  //Restart the quiz
  openQuiz();
}
//----END SCOREBAORD FUNCTIONS----


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time left: " + timerCount;
    
    if(timerCount <= 0){
      
      if(gameOver == true){
        timerElement.innerHTML = ("");
      }
      
      else {
        timerElement.innerHTML = ("Time's up! (GAME OVER)")
        endGame();
      }
    }
    }, 1000);

    timerElement.innerHTML = (timerCount);
  }

  openQuiz();
