// ========== GAME STATE ========== //
const gameState = {
    level: 1,
    score: 0,
    hp: 100,
    inventory: [],
    hasTreasure: false,
    inCombat: false,
    bossDefeated: false,
    npcs: ["👻 Ghost", "🧟 Zombie", "🦇 Vampire", "👹 Demon"],
    treasures: ["Gold (100)", "Diamond (500)", "Cursed Amulet", "Health Potion"],
    boss: "💀 Death Reaper"
};

// ========== CANVAS & ANIMATION ========== //
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Load images
const playerImg = new Image();
playerImg.src = "assets/player.png";

const npcImg = new Image();
npcImg.src = "assets/ghost.png";

const treasureImg = new Image();
treasureImg.src = "assets/treasure.png";

const bossImg = new Image();
bossImg.src = "assets/boss.png";

// Player position
const player = {
    x: 50,
    y: 200,
    width: 50,
    height: 50,
    speed: 5
};

// NPC position
const npc = {
    x: 400,
    y: 200,
    width: 50,
    height: 50,
    active: false
};

// Treasure position
const treasure = {
    x: 300,
    y: 150,
    width: 40,
    height: 40,
    active: false
};

// Boss position
const boss = {
    x: 500,
    y: 100,
    width: 80,
    height: 80,
    active: false
};

// ========== AUDIO ========== //
const bgSound = document.getElementById("bg-sound");
const battleSound = document.getElementById("battle-sound");
const treasureSound = document.getElementById("treasure-sound");
const bossSound = document.getElementById("boss-sound");

// ========== GAME FUNCTIONS ========== //
function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

function drawNPC() {
    if (npc.active) ctx.drawImage(npcImg, npc.x, npc.y, npc.width, npc.height);
}

function drawTreasure() {
    if (treasure.active) ctx.drawImage(treasureImg, treasure.x, treasure.y, treasure.width, treasure.height);
}

function drawBoss() {
    if (boss.active) ctx.drawImage(bossImg, boss.x, boss.y, boss.width, boss.height);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawNPC();
    drawTreasure();
    if (gameState.level === 5) drawBoss();
    requestAnimationFrame(animate);
}

// ========== GAME LOGIC ========== //
function updateUI() {
    document.getElementById("level").textContent = gameState.level;
    document.getElementById("score").textContent = gameState.score;
    document.getElementById("hp").textContent = gameState.hp;
    updateInventory();
}

function updateInventory() {
    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = gameState.inventory.map(item => `<div class="item">${item}</div>`).join("");
}

function addLog(message) {
    console.log(`> ${message}`);
}

function spawnNPC() {
    npc.active = true;
    gameState.inCombat = true;
    addLog(`A ${gameState.npcs[Math.floor(Math.random() * gameState.npcs.length)]} appears!`);
    battleSound.play();
}

function spawnTreasure() {
    treasure.active = true;
    addLog("You found a treasure chest!");
}

function spawnBoss() {
    boss.active = true;
    gameState.inCombat = true;
    addLog(`THE FINAL BOSS ${gameState.boss} APPEARS!`);
    bossSound.play();
}

// ========== EVENT LISTENERS ========== //
document.getElementById("move-btn").addEventListener("click", () => {
    if (gameState.inCombat) {
        addLog("You can't escape during combat!");
        return;
    }

    player.x += player.speed;
    if (player.x > canvas.width) {
        player.x = 50;
        nextLevel();
    }

    // Random events
    const randomEvent = Math.random();
    if (randomEvent < 0.3 && !npc.active && gameState.level < 5) spawnNPC();
    else if (randomEvent < 0.5 && !treasure.active) spawnTreasure();
});

document.getElementById("fight-btn").addEventListener("click", () => {
    if (!gameState.inCombat) {
        addLog("No enemies to fight!");
        return;
    }

    const damage = Math.floor(Math.random() * 20) + 10;
    if (gameState.level === 5) {
        // Boss fight
        const bossDamage = Math.floor(Math.random() * 50) + 30;
        gameState.score += bossDamage;
        gameState.hp -= 15;
        addLog(`You hit ${gameState.boss} for ${bossDamage} damage!`);
        
        if (Math.random() > 0.7) {
            addLog(`You defeated ${gameState.boss}! VICTORY!`);
            gameState.inCombat = false;
            boss.active = false;
            gameState.bossDefeated = true;
            gameState.score += 1000;
            gameState.inventory.push("BOSS KEY");
        }
    } else {
        // Normal NPC fight
        gameState.score += damage;
        addLog(`You defeated the enemy! +${damage} points!`);
        gameState.inCombat = false;
        npc.active = false;
    }

    updateUI();
});

document.getElementById("open-treasure-btn").addEventListener("click", () => {
    if (!treasure.active) {
        addLog("No treasure here!");
        return;
    }

    const reward = gameState.treasures[Math.floor(Math.random() * gameState.treasures.length)];
    const points = Math.floor(Math.random() * 300) + 100;
    gameState.score += points;
    gameState.inventory.push(reward);
    treasure.active = false;
    treasureSound.play();
    addLog(`You found ${reward} in the chest! +${points} points!`);
    updateUI();
});

function nextLevel() {
    if (gameState.level >= 5) {
        if (gameState.bossDefeated) {
            addLog("CONGRATULATIONS! You escaped the dungeon!");
        } else {
            addLog("You must defeat the BOSS to escape!");
            player.x = 400;
        }
        return;
    }

    gameState.level++;
    npc.active = false;
    treasure.active = false;
    addLog(`Entering Level ${gameState.level}...`);
    
    if (gameState.level === 5) {
        spawnBoss();
    }

    updateUI();
}

// ========== START GAME ========== //
bgSound.volume = 0.3;
bgSound.play();
animate();
updateUI();
addLog("Welcome to the DUNGEON OF HORROR. Find the treasure and defeat the BOSS!");
