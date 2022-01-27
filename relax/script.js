const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const playBackMusic = new Audio("deep.mp3");
const onOff = document.querySelector(".circle ");

breathingCircle();

function breathingCircle() {
  text.innerText = "Breath In🧘";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold🧘";

    setTimeout(() => {
      text.innerText = "Breath Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathingCircle, totalTime);
function togglePlay() {
  return playBackMusic.paused ? playBackMusic.play() : playBackMusic.pause();
}
