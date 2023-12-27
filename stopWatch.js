const displayHouers = document.querySelector(".houers");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");
const displayMilliseconds = document.querySelector(".milliseconds");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let intervalId = null;
let houers = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function start() {
  intervalId = setInterval(() => {
    millisecondsIteration();
    display(displayMilliseconds, milliseconds);
  }, 100);
}

function stop() {
  clearInterval(intervalId);
  setLocal();
}

function reset() {
  houers = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayAll();
  setLocal();
}

function millisecondsIteration() {
  milliseconds++;
  if (milliseconds === 10) {
    milliseconds = 0;
    secondsIteration();
    display(displaySeconds, seconds);
  }
}

function secondsIteration() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutesIteration();
    display(displayMinutes, minutes);
  }
}

function minutesIteration() {
  minutes++;
  if (minutes === 60) {
    minutes = 0;
    houers++;
    display(displayHouers, houers);
  }
}

function display(span, value) {
  span.innerHTML = value < 10 ? "0" + value : value;
}

function displayAll() {
  display(displayMilliseconds, milliseconds);
  display(displaySeconds, seconds);
  display(displayMinutes, minutes);
  display(displayHouers, houers);
}

function setLocal() {
  localStorage.setItem("milliseconds", milliseconds);
  localStorage.setItem("seconds", seconds);
  localStorage.setItem("minutes", minutes);
  localStorage.setItem("houers", houers);
}

startBtn.addEventListener("click", () => start());
stopBtn.addEventListener("click", () => stop());
resetBtn.addEventListener("click", () => reset());

window.onload = () => {
  milliseconds = localStorage.getItem("milliseconds");
  seconds = localStorage.getItem("seconds");
  minutes = localStorage.getItem("minutes");
  houers = localStorage.getItem("houers");
  displayAll();
};
