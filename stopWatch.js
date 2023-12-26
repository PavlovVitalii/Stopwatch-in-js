const displayHouers = document.querySelector(".houers");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");
const displayMilliseconds = document.querySelector(".milliseconds");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let houers = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function start() {
  setInterval(() => {
    millisecondsIteration();
    displayMilliseconds.innerHTML =
      milliseconds < 10 ? "0" + milliseconds : milliseconds;
  }, 100);
}

function millisecondsIteration() {
  milliseconds++;
  if (milliseconds === 10) {
    milliseconds = 0;
    secondsIteration();
    displaySeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }
}

function secondsIteration() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutesIteration();
    displayMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  }
}

function minutesIteration() {
  minutes++;
  if (minutes === 60) {
    minutes = 0;
    houers++;
    displayHouers.innerHTML = houers < 10 ? "0" + houers : houers;
  }
}

startBtn.addEventListener("click", () => start());
