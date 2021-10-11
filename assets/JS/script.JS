//GLOBAL VARIABLES
let score = 17;
let timeRemaining = 5;
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

// BRING UP QUIZ QUESTION 2
const toQuestion2 = question1.addEventListener('click', function() {
    question1.style.display = 'none'
    question2.style.display = 'block'
});

// BRING UP QUIZ QUESTION 3
const toQuestion3 = question2.addEventListener('click', function() {
    question2.style.display = 'none'
    question3.style.display = 'block'
});

//BRING TO ENTER INITIALS
const initials = question3.addEventListener('click', function(){
    window.location.href = './assets/HTML/highScores.html';
    return
})


//RANDOM SCORE
// let random = Math.floor(Math.random * 64)

// SCORE KEEPING FUNCTION
const scoreKeeper = addEventListener('click', function() {
    const question1Answer = document.getElementById('question1Answer3');
    const question2Answer = document.getElementById('question2Answer3');
    const question3Answer = document.getElementById('question3Answer2');

    if (question1Answer.clicked === true) {
        score = 5 + score
        console.log('hello');
    }else if (question1.click === false){
        timeRemaining -= 10;
    }
console.log(score);
});


// const btn = document.getElementById('startBtn');
// console.log(btn);

// btn.addEventListener('click', function(evt){
//     console.log('clicked button');

//     console.log(evt);
// });
