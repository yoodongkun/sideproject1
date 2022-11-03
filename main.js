let hour = 0;
let min = 0;
let sec = 0;
let timer = 0;

const startBtn = document.getElementById("startBtn");
const watchValue = document.getElementById("watch");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const recordBtn = document.getElementById("recordBtn");
function render() {
  watchValue.innerText = `${addLeadingZeros(hour, 2)} : ${addLeadingZeros(
    min,
    2
  )} : ${addLeadingZeros(sec, 2)}`;
}
function refreshValues() {
  hour = Math.floor(timer / (60 * 60));
  min = Math.floor((timer % (60 * 60)) / 60);
  sec = timer % 60;
}

function addLeadingZeros(num, totallength) {
  return String(num).padStart(totallength, "0");
}

let set;
let stopTime = 0;

function start() {
  const startDate = new Date().getTime();

  set = setInterval(() => {
    const CurrentDate = new Date().getTime();
    timer = Math.floor((CurrentDate - startDate) / 1000 + stopTime);
    refreshValues();
    render();
  }, 1);
}

function stop() {
  clearInterval(set);
  stopTime = timer;
}

function reset() {
  stopTime = 0;
  timer = 0;
  refreshValues();
  render();
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
recordBtn.addEventListener("click", record);
console.log(sec);
