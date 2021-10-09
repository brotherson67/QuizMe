
























/* increment and decrement counter based on buttons
var count= 0;

//deckarubg variables that reference buttons
var decrementE1 = document.querySelector ('#decrement');
var countE1 = document.querySelector('#count');

//updates the count in the DOM
function setCounterText() {
    countE1.textContent = count;
};

//listening to click event to run increment function
incrementE1.addEventListener('click', function() {
    count++;
    setCounterText();
})

//when the decrement button is clicked decrease the count by one
decrementE1.addEventListener('click', function() {
    //will only fire if count is greater than 0 
    if (count > 0) {
        count--;
        setCounterText();
    }
});
*/