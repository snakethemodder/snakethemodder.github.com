const countdown = document.getElementById("countdown");
const timerContainer = document.getElementById("timerContainer");

const timerActive = true;
const releaseDate = new Date("2025-04-20T17:00:00").getTime();

function updateCountdown() {
  if (!timerActive) {
    timerContainer.style.display = "none";
    return;
  }

  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Released!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function filterAPKs() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.getElementsByClassName("apk-card");

  for (let card of cards) {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  }
}
