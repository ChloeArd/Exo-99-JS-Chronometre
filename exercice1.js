// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let decompte = 0;
let timeoutID;
let countUp = function() {
    timeoutID = setInterval(function (){
        decompte++;
        seconds.innerHTML = decompte;
        console.log("le decompte est de " + decompte);
    }, 1000);
};
setTimeout(function (){
    countUp();
},1000);

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(timeoutID);
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

