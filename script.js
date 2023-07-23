const timeDisplay = document.querySelector(".timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timerId;
let isRunning = false;
let ms = 0;
let hours = 0;
let minutes = 0;
let secs = 0;

function updateTime() {
  if (ms == 100) {
    secs = secs + 1;
    ms = 0;
  }
  if (secs == 60) {
    minutes = minutes + 1;
    secs = 0;
  }
  if (minutes == 60) {
    hours = hours + 1;
    minutes = 0;
    secs = 0;
  }
  timeDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes  //(0:0:0) => (00:00:00)
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function startTimer() {
  // console.log("clicked")
  if (!isRunning) {
    timerId = setInterval(() => {
      ms++;
      updateTime();
    }, 10);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerId);
    isRunning = false;
  }
}

function resetTimer() {
    isRunning = false;
    //stopTimer();
    ms = 0;
    hours = 0;
    minutes = 0;
    secs = 0;
    
    updateTime();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
