var minutes = 25;
var seconds = 0;
const timeoutStack = [];

function decrement(minutes, seconds) {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    alert("Time's up");
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

function start() {
  let start = document.getElementById("start");
  start.disabled = true;
  let stop = document.getElementById("stop");
  stop.disabled = false;
  decrement(minutes, seconds);
}

function stop() {
  clearTimeouts();
  let start = document.getElementById("start");
  start.disabled = false;
  let stop = document.getElementById("stop");
  stop.disabled = true;
  minutes = 25;
  seconds = 0;
  let timer = document.getElementById("timer");
  timer.innerText = `${minutes > 9 ? minutes : "0" + minutes}:${
    seconds > 9 ? seconds : "0" + seconds
  }`;
}

function click() {
  start();
}
