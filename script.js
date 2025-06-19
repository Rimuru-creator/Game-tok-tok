let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Baris
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Kolom
    [0, 4, 8], [2, 4, 6]             // Diagonal
];

const cells = document.querySelectorAll(".cell");
const statusDisplay = document.querySelector(".status");
const resetButton = document.getElementById("reset-btn");

// Fungsi untuk menangani klik pemain
function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute("data-index"));

    if (gameBoard[cellIndex] !== "" || checkWinner()) return;

    gameBoard[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        statusDisplay.innerHTML = `Pemenang: <span id="current-player">${currentPlayer}</span>`;
        return;
    }

    if (!gameBoard.includes("")) {
        statusDisplay.textContent = "Game Seri!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = `Giliran: <span id="current-player">${currentPlayer}</span>`;
}

// Fungsi untuk memeriksa pemenang
function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

// Fungsi untuk mereset game
function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    statusDisplay.innerHTML = `Giliran: <span id="current-player">X</span>`;
    cells.forEach(cell => cell.textContent = "");
}

// Event Listeners
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame)
