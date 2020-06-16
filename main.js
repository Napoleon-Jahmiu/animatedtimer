const countdownArea = document.querySelector('.countdown');
const numbersArea = document.querySelector('.numbers');
const resetBtn = document.querySelector('.reset');
let intervalTime;
let count = 0;

 // This makes javaScript to determine the height of the the coundownArea
 const heightCountdown = countdownArea.getBoundingClientRect().height;
// create the timer when page loads
setTimer();

resetBtn.addEventListener('click', setTimer)

// create the timer that creates the timer
function setTimer() {
    clearInterval(intervalTime);
    count = 0;
    numbersArea.style.transform = 'translateY(0)'

    // This function helps JavaScript to determine the interval of time for the animation to move
    intervalTime = setInterval(() => {

        // This means that the javascript should count the time from 0 but in the order that we input the nunbers which is from 10 to 0
        count++;

        /* this section treats the countdown height in pixels multiply by the 
        the number of counts that it will take for the user to wait for the next function to run 
        i.e from 10 to 0*/

        // calculate the offset and apply it
        const offsetTime = heightCountdown * count;
        // This section is for the numbers to start moving vertically along the Y axis from upward
        numbersArea.style.transform = `translateY(-${offsetTime}px)`;
        
        /* This functions is saying stop the countdown at the last number and run the next function if there's any.
        it ensures that the countdown doesn't just disapper from the screen*/

        // what happens when the countdown is done.
        if (count >= 10) {
            // at this point, the next function is suppose to run
            clearInterval(intervalTime);
        }

    }, 1000)

}
