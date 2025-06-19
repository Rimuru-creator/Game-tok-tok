// Game State
const gameState = {
    level: 1,
    score: 0,
    hasTreasure: false,
    npcDefeated: false,
    dungeonMap: [
        "💀🌫️🚪", 
        "🔑👻💎", 
        "🩸🕯️⚔️"
    ],
    npcs: ["👻 Ghost", "🧟 Zombie", "🦇 Vampire", "👹 Demon", "🕷️ Spider Queen"],
    treasures: ["Gold (100)", "Diamond (500)", "Cursed Amulet", "Health Potion", "Magic Sword"]
};

// DOM Elements
const levelDisplay = document.getElementById("level");
const scoreDisplay = document.getElementById("score");
const dungeonMapDisplay = document.getElementById("dungeon-map");
const gameLogDisplay = document.getElementById("game-log");
const moveBtn = document.getElementById("move-btn");
const fightBtn = document.getElementById("fight-btn");
const openTreasureBtn = document.getElementById("open-treasure-btn");
const backgroundSound = document.getElementById("background-sound");

// Start Game
function initGame() {
    updateUI();
    backgroundSound.play();
    addLog("You enter the dark dungeon... Find the treasure!");
}

// Update UI
function updateUI() {
    levelDisplay.textContent = gameState.level;
    scoreDisplay.textContent = gameState.score;
    dungeonMapDisplay.textContent = gameState.dungeonMap.join("\n");
}

// Add Log Message
function addLog(message) {
    gameLogDisplay.innerHTML += `> ${message}<br>`;
    gameLogDisplay.scrollTop = gameLogDisplay.scrollHeight;
}

// Move to Next Area
moveBtn.addEventListener("click", () => {
    if (gameState.level >= 5) {
        addLog("You escaped the dungeon! 🎉");
        return;
    }
    gameState.level++;
    gameState.hasTreasure = false;
    gameState.npcDefeated = false;
    addLog(`Entering Level ${gameState.level}...`);
    updateUI();
});

// Fight NPC
fightBtn.addEventListener("click", () => {
    if (gameState.npcDefeated) {
        addLog("No enemies here!");
        return;
    }
    const npc = gameState.npcs[Math.floor(Math.random() * gameState.npcs.length)];
    const damage = Math.floor(Math.random() * 50) + 10;
    gameState.score += damage;
    gameState.npcDefeated = true;
    addLog(`⚔️ You defeated ${npc}! +${damage} points!`);
    updateUI();
});

// Open Treasure Chest
openTreasureBtn.addEventListener("click", () => {
    if (gameState.hasTreasure) {
        addLog("No treasure here...");
        return;
    }
    const treasure = gameState.treasures[Math.floor(Math.random() * gameState.treasures.length)];
    const reward = Math.floor(Math.random() * 300) + 100;
    gameState.score += reward;
    gameState.hasTreasure = true;
    addLog(`💎 You found ${treasure}! +${reward} points!`);
    updateUI();
});

// Start the game
initGame();
