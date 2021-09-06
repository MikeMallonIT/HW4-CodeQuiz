var startButton = document.querySelector(".startButton");

var scoreList = document.querySelector(".scoreList");

var divStartMenu = document.querySelector(".startMenu");
var divQuiz = document.querySelector(".quiz"); 

//var scores = [1,2,3,4];
//var names = ["Alex", "Mike", "Steve", "Joe"];



var scoreBoard = [
{
  initials: ["MM", "MD", "NM", "DM"],
  highScore: [10,15,20,25]
}
];

localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));


var testOutput = JSON.parse(localStorage.getItem("scoreBoard"));



startButton.addEventListener("click", function() {


  document.getElementById("startButton").innerHTML = "test123";

  //scoreList.innerHTML = testOutput;

  console.log(testOutput.initials);

  //divStartMenu.setAttribute("class", "hidden");
  //divQuiz.setAttribute("class", "visible");

});






//for(let i = 0; i <= questions.length-1; i++){

//  var currentQuestion = questions[i];
//  var currentAnswer = answers[answerAddresses[i]];

//  var userInput = 'console.log';

//  if(userInput = currentAnswer){
//      console.log("Correct!!!")
//  }

//  console.log("Current Question Number: ", i)
//  console.log("Current Question", currentQuestion);
//  console.log("Current Answer: ", currentAnswer)
//  }
