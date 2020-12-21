// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let decompte = 0;
let timeoutID;
let countUp = function() {
    timeoutID = setTimeout(function () {
        if(decompte <= 60){
            seconds.innerHTML = decompte;
            decompte++;
            countUp();
        }
    }, 1000)
};

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(timeoutID);
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

