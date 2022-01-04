const START_MINUTES = 25;
const START_SECONDS = 0;
const timeoutStack = [];

function decrement(minutes, seconds) {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    alert("Time's up");
    alarm();
    return;
  }
  let timer = document.getElementById("timer");
  timer.innerText = `${minutes}:${seconds}`;
  let call = setTimeout(() => {
    decrement(minutes, seconds);
  }, 1000);
  timeoutStack.push(call);
}

function clearTimeouts() {
  for (let index = 0; index < timeoutStack.length; index++) {
    let call = timeoutStack.pop();
    clearTimeout(call);
  }
}

// Start Timer
function start() {
  let start = document.getElementById("start");
  start.disabled = true;
  let stop = document.getElementById("stop");
  stop.disabled = false;
  decrement(START_MINUTES, START_SECONDS);
}

// Stop and restart timer
function stop() {
  clearTimeouts();
  let start = document.getElementById("start");
  start.disabled = false;
  let stop = document.getElementById("stop");
  stop.disabled = true;
  minutes = START_MINUTES;
  seconds = START_SECONDS;
  let timer = document.getElementById("timer");
  timer.innerText = `${minutes > 9 ? minutes : "0" + minutes}:${
    seconds > 9 ? seconds : "0" + seconds
  }`;
}

// Play the .mp3 file of the alarm
function alarm() {
  var alarm = new Audio("../resources/SoftAlarm.mp3");
  alarm.play();
}

function click() {
  start();
}
