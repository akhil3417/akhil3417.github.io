var audio = document.getElementById("myAudio");
var playIcon = document.getElementById("play-icon");
var backwardIcon = document.getElementById("backward-icon");
var forwardIcon = document.getElementById("forward-icon");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playIcon.src = "../images/pause.png";
  } else {
    audio.pause();
    playIcon.src = "../images/play.png";
  }
}

function seekBackward() {
  audio.currentTime -= 10;
}

function seekForward() {
  audio.currentTime += 10;
}
