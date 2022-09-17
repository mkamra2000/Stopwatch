let timer = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let countSec = 0;
// Initially all buttons except start is disabled
if (
  document.getElementById("start").getAttribute("disabled") == null ||
  document.getElementById("start").getAttribute("disabled") == false
) {
  document.getElementById("resume").setAttribute("disabled", true);
  document.getElementById("stop").setAttribute("disabled", true);
  document.getElementById("reset").setAttribute("disabled", true);
}
// Start
function start() {
  timer = true;
  stopwatch();
}
// Stop
function stop() {
  if (timer) {
    document.getElementById("stop").setAttribute("disabled", true);
    document.getElementById("resume").removeAttribute("disabled");
  }
  timer = false;
}
// Resume
function resume() {
  document.getElementById("stop").removeAttribute("disabled");
  timer = true;
  stopwatch();
}
// Reset
function reset() {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  countSec = 0;
  // Reset the timer
  document.getElementById("secCount").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("resume").setAttribute("disabled", true);
  document.getElementById("stop").setAttribute("disabled", true);
  document.getElementById("reset").setAttribute("disabled", true);
  document.getElementById("start").removeAttribute("disabled");
}
function stopwatch() {
  if (timer) {
    document.getElementById("start").setAttribute("disabled", true);
    document.getElementById("stop").removeAttribute("disabled");
    document.getElementById("reset").removeAttribute("disabled");
    document.getElementById("resume").setAttribute("disabled", true);
    countSec = countSec + 1;
    if (countSec == 100) {
      countSec = 0;
      seconds += 1;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes == 60) {
      minutes = 0;
      seconds = 0;
      hours += 1;
    }
    let countSecString = countSec;
    let secondsString = seconds;
    let minutesString = minutes;
    let hoursString = hours;
    // If time is between 0 to 9
    // then add 0 before single digit
    if (countSec < 10) {
      countSecString = "0" + countSecString;
    }
    if (seconds < 10) {
      secondsString = "0" + secondsString;
    }
    if (minutes < 10) {
      minutesString = "0" + minutesString;
    }
    if (hours < 10) {
      hoursString = "0" + hoursString;
    }
    document.getElementById("secCount").innerHTML = countSecString;
    document.getElementById("seconds").innerHTML = secondsString;
    document.getElementById("minutes").innerHTML = minutesString;
    document.getElementById("hours").innerHTML = hoursString;
    // for the 100th part of second
    setTimeout(stopwatch, 10);
  }
}
