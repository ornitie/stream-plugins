const START_MINUTES = 25;
const START_SECONDS = 0;
const timeoutStack = [];

var minutes = 25;
var seconds = 0;

function decrement() {
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
  timer.innerText = `${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }`;
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
  clearTimeouts();
  let start = document.getElementById("start");
  start.disabled = true;
  let stop = document.getElementById("stop");
  stop.disabled = false;
  let pause = document.getElementById("pause");
  pause.disabled = false;
  decrement();
  paused = false;
}

// Stop and restart timer
function stop() {
  clearTimeouts();
  let start = document.getElementById("start");
  start.disabled = false;
  let stop = document.getElementById("stop");
  stop.disabled = true;
  let pause = document.getElementById("pause");
  pause.disabled = true;
  minutes = START_MINUTES;
  seconds = START_SECONDS;
  let timer = document.getElementById("timer");
  timer.innerText = `${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }`;
  paused = false;
}

// Pause the current timer
function pause() {
  clearTimeouts();
  let start = document.getElementById("start");
  start.disabled = false;
  let stop = document.getElementById("stop");
  stop.disabled = false;
  let pause = document.getElementById("pause");
  pause.disabled = true;

  paused = true;
}

// Play the .mp3 file of the alarm
function alarm() {
  var alarm = new Audio("../resources/SoftAlarm.mp3");
  alarm.play();
}

function click() {
  start();
}
