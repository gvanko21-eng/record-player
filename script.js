const scene = document.getElementById("scene");
const audio = document.getElementById("audio");

let isPlaying = false;

function togglePlay() {

  if (!audio) return;

  if (!isPlaying) {
    audio.play().catch(()=>{});
    scene.classList.add("playing");
  } else {
    audio.pause();
    scene.classList.remove("playing");
  }

  isPlaying = !isPlaying;
}

scene.addEventListener("click", togglePlay);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  }
});
