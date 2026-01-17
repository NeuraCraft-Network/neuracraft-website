const statusEl = document.getElementById("serverStatus");

const SERVER_IP = "mc.neuracraft.my.id";
const SERVER_PORT = "19132";

fetch(`https://api.mcstatus.io/v2/status/bedrock/${SERVER_IP}:${SERVER_PORT}`)
  .then(res => res.json())
  .then(data => {
    if (data.online) {
      statusEl.textContent = `Status: Online •`;
      statusEl.style.color = "#22c55e"; 
    } else {
      statusEl.textContent = "Status: Offline";
      statusEl.style.color = "#ef4444";
    }
  })
  .catch(() => {
    statusEl.textContent = "Status: Unable to fetch";
    statusEl.style.color = "#facc15"; 
  });

const minigames = [
  "SkyWars",
  "Survival Economy",
  "Survival Vanilla",
  "Creative mode",
  "Practice PvP"
];

let index = 0;
const minigameText = document.getElementById("minigameText");

setInterval(() => {
  minigameText.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % minigames.length;
    minigameText.textContent = minigames[index];
    minigameText.style.opacity = 1;
  }, 400);

}, 3000);
