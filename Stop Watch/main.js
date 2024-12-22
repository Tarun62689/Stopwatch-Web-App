let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let timer = false;
let lapCount = 1;

let startbtn = document.querySelector("#Start");
let stopbtn = document.querySelector("#Stop");
let resetbtn = document.querySelector("#Reset");
let lapbtn = document.querySelector("#Lap");
let lapsContainer = document.querySelector("#laps");

startbtn.addEventListener("click", function () {
  if (!timer) {
    timer = true;
    stopwatch();
  }
});

stopbtn.addEventListener("click", function () {
  timer = false;
});

resetbtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  lapCount = 1;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("milesec").innerHTML = "00";
  lapsContainer.innerHTML = "";
});

lapbtn.addEventListener("click", function () {
  if (timer) {
    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;
    let milesecString = millisecond < 10 ? "0" + millisecond : millisecond;

    let lapTime = `${hrString}:${minString}:${secString}:${milesecString}`;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsContainer.appendChild(lapItem);

    lapCount++;

    if (lapsContainer.style.display === "none") {
      lapsContainer.style.display = "block";
    }
  }
});

function stopwatch() {
  if (timer) {
    millisecond += 10;

    if (millisecond === 1000) {
      second++;
      millisecond = 0;
    }
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }

    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;
    let milesecString = millisecond < 10 ? "0" + millisecond : millisecond;

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("milesec").innerHTML = milesecString;

    setTimeout(stopwatch, 10);
  }
}