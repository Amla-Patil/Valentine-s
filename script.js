const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) {
    music.volume = 0.4;
    music.play();
  }
});
const music = document.getElementById("bgMusic");

// if user already allowed music earlier
if (sessionStorage.getItem("musicPlaying") === "true") {
  music.volume = 0.4;
  music.play().catch(() => {});
}

// on first click anywhere
document.addEventListener("click", () => {
  if (music && music.paused) {
    music.volume = 0.4;
    music.play();
    sessionStorage.setItem("musicPlaying", "true");
  }
});
