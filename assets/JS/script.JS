//GLOBAL VARIABLES
let score = 17;
let timeRemaining = 2;
const questions = document.getElementsByClassName('questions');
const startBtn = document.getElementById('startBtn');
const welcome = document.getElementById('quiz_welcome');
const question1 = document.getElementById('quiz_question1');
const question2 = document.getElementById('quiz_question2');
const question3 = document.getElementById('quiz_question3');

//START QUIZ FUNCTION
const timerFunction = startBtn.addEventListener('click', function() {
    if (timeRemaining > 0) {
        startTimer();
    }
    toQuestion1();
});

//TIMER FUNCTION
function startTimer() {
    const timeDisplay = document.getElementById("timeRemaining");

    intervalID = setInterval(function () {
        timeRemaining--;

        timeDisplay.innerText = timeRemaining + "s";

        if (timeRemaining <= 0) {
        stopTimer();
        }
    }, 1000)
};

//STOP TIMER FUNCITON
function stopTimer() {
clearInterval(intervalID);
// document.querySelector('main').innerHTML = '<h1>Time is up!</h1>';
};

//BRING UP QUIZ QUESTION 1
const toQuestion1 = function() {
    welcome.style.display = 'none';
    question1.style.display = 'block'
};

//BRING UP QUIZ QUESTION 2
const toQuestion2 = function() {
    question1.style.display = 'none'
    question2.style.display = 'block'
};

//event listener to go to question 2
const test = question1.addEventListener('click', toQuestion2())