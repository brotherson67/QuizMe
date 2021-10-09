//OULINE FOR THE TIMER
let timeRemaining = 10; 

// const timer = setInterval(function() {
//     const interval = document.getElementById('timeRemaining');

//     interval.textContent = --timeRemaining;
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//     };
// }, 1000);

const startBtn = document.getElementById('startBtn');

const timerFunction = startBtn.addEventListener('click', function() {
    console.log('button clicked')

    setInterval(function() {
        const interval = document.getElementById('timeRemaining');
    
        interval.textContent = --timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerFunction);
        };
    }, 1000);
})