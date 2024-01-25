let timer = document.querySelector(".timertid")
let seconds = 0;
const startButton = document.querySelector(".start");
const rundeButton = document.querySelector(".runde");
let myInterval;
let state = true;
let rundeliste = document.querySelector(".rundeliste")
let runder = 0;

const countSeconds = () => {
    
        seconds += 1;
    timer.innerHTML = seconds;

};

const appTimer = () => {
    if (state) {
        myInterval = setInterval(countSeconds, 1000);
        timer.innerHTML = 0;
        seconds = 0;
        startButton.innerHTML = "STOPP";
        state = false;
        rundeliste.innerHTML = "";
        runder = 0;
}else {
        clearInterval(myInterval);
        seconds == 0;
        timer.innerHTML = "0";
        state = true;
        startButton.innerHTML = "START"
    }
}
    
const runde = () => {
    runder ++;
    rundeliste.innerHTML += "Runde " + runder + ": " + seconds + " sekunder ";
    seconds = 0;
    timer.innerHTML = 0;
}
    





startButton.addEventListener("click", appTimer);

rundeButton.addEventListener("click", runde)