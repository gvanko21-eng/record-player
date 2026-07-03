const scene = document.getElementById("scene");
const audio = document.getElementById("audio");

let isPlaying = false;

/* 🎯 自适应“安全点击区域”（核心升级点） */
function isInSafeZone(x, y) {

  // 📱 手机更宽容
  const isMobile = window.innerWidth < 768;

  const zone = {
    x: 0.52,
    y: 0.72,
    r: isMobile ? 0.28 : 0.18   // 🚨 手机点击范围更大
  };

  const dx = x - zone.x;
  const dy = y - zone.y;

  return Math.sqrt(dx * dx + dy * dy) < zone.r;
}

/* 🎬 播放控制 */
function togglePlay() {

  if (!isPlaying) {
    audio.play();
    scene.classList.add("playing");
  } else {
    audio.pause();
    scene.classList.remove("playing");
  }

  isPlaying = !isPlaying;
}

/* 📱 点击 / 触控统一处理 */
function handlePointer(e) {

  const rect = scene.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  if (isInSafeZone(x, y)) {
    togglePlay();
  }
}

/* 🖱️ PC点击 */
scene.addEventListener("click", handlePointer);

/* 📱 手机触摸（关键优化） */
scene.addEventListener("touchstart", (e) => {
  handlePointer(e.touches[0]);
}, { passive: true });

/* ⌨️ 键盘控制 */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  }
});
