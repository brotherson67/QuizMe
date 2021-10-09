const startBtn = document.getElementById('startBtn');

const timerFunction = startBtn.addEventListener('click', function() {
    console.log('button clicked')

    let timeRemaining = 10;

    intervalID = setInterval(function () {
      timeRemaining--;
  
      timeDisplay.innerText = timeRemaining + "s";
  
      if (timeRemaining <= 0) {
        stopTimer();
      }
    }, 1000);
})


//TIMER FUNCTION
function startTimer() {
    const timeDisplay = document.getElementById("timeRemaining");
    let timeRemaining = 10;
  
    intervalID = setInterval(function () {
      timeRemaining--;
  
      timeDisplay.innerText = timeRemaining + "s";
  
      if (timeRemaining <= 0) {
        stopTimer();
      }
    }, 1000);
  }


  //STOP TIMER FUNCITON
  function stopTimer() {
    clearInterval(intervalID);
    document.querySelector('main').innerHTML = '<h1>Time is up!</h1>';
  }





// const timer = setInterval(function() {
//     const interval = document.getElementById('timeRemaining');

//     interval.textContent = --timeRemaining;
//     if (timeRemaining <= 0) {
//         clearInterval(timer);
//     };
// }, 1000);
