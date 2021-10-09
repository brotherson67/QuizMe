//OULINE FOR THE TIMER
let timeRemaining = 70; 

const timer = setInterval(function() {
    const interval = document.getElementById('timeRemaining');

    interval.textContent = --timeRemaining;
    if (timeRemaining <= 0) {
        clearInterval(timer);
    };
}, 1000);