const player = document.getElementById("player");
const audio = document.getElementById("audio");
const toggle = document.getElementById("toggle");
const vinyl = document.getElementById("vinyl");

let isPlaying = false;

function togglePlay() {
  if (!isPlaying) {
    audio.play();
    player.classList.add("playing");
    vinyl.style.animationPlayState = "running";
  } else {
    audio.pause();
    player.classList.remove("playing");
    vinyl.style.animationPlayState = "paused";
  }
  isPlaying = !isPlaying;
}

/* 点击唱片机任意位置 */
toggle.addEventListener("click", togglePlay);

/* 空格键控制 */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  }
});
