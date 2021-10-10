//GLOBAL VARIABLES
let score = 17;
let timeRemaining = 2;
const questions = document.getElementsByClassName('questions');



const startBtn = document.getElementById('startBtn');

const timerFunction = startBtn.addEventListener('click', function() {
    if (timeRemaining > 0) {
        startTimer();
    }
    buttonFunction();
})



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
