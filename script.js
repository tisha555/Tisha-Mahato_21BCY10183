const board = document.getElementById('board');
const playerTurnDisplay = document.getElementById('playerTurn');
const gameLog = document.getElementById('gameLog');

let currentPlayer = 'A';
let gameState = [
    ['A-P1', '', '', '', 'B-P1'],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['A-P2', '', '', '', 'B-P2'],
];

function createBoard() {
    board.innerHTML = '';
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if ((row + col) % 2 === 0) {
                cell.classList.add('black');
            }
            cell.id = `cell-${row}-${col}`;

            if (gameState[row][col]) {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                piece.textContent = gameState[row][col];
                cell.appendChild(piece);
            }

            board.appendChild(cell);
        }
    }
}

function sendMove() {
    const moveInput = document.getElementById('moveInput').value;
    const moveData = moveInput.split(':');
    if (moveData.length !== 2) {
        alert('Invalid move format. Use <character>:<direction>');
        return;
    }

    const [character, direction] = moveData;
    const validMove = movePiece(character, direction);
    if (validMove) {
        currentPlayer = currentPlayer === 'A' ? 'B' : 'A';
        playerTurnDisplay.textContent = currentPlayer;
        logMove(moveInput);
    } else {
        alert('Invalid move!');
    }
}

function movePiece(character, direction) {
    let startRow, startCol;
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (gameState[row][col] === `${currentPlayer}-${character}`) {
                startRow = row;
                startCol = col;
                break;
            }
        }
    }

    if (startRow === undefined || startCol === undefined) {
        return false;
    }

    const [newRow, newCol] = getNewPosition(startRow, startCol, direction);
    if (newRow < 0 || newRow >= 5 || newCol < 0 || newCol >= 5) {
        return false;
    }

    const targetCell = gameState[newRow][newCol];
    if (targetCell && targetCell.startsWith(currentPlayer)) {
        return false;
    }

    gameState[startRow][startCol] = '';
    gameState[newRow][newCol] = `${currentPlayer}-${character}`;

    createBoard();
    return true;
}

function getNewPosition(row, col, direction) {
    switch (direction) {
        case 'L': return [row, col - 1];
        case 'R': return [row, col + 1];
        case 'F': return [row - 1, col];
        case 'B': return [row + 1, col];
        case 'FL': return [row - 1, col - 1];
        case 'FR': return [row - 1, col + 1];
        case 'BL': return [row + 1, col - 1];
        case 'BR': return [row + 1, col + 1];
        default: return [row, col];
    }
}

function logMove(move) {
    const logEntry = document.createElement('div');
    logEntry.textContent = `${currentPlayer === 'A' ? 'B' : 'A'}: ${move}`;
    gameLog.appendChild(logEntry);
    gameLog.scrollTop = gameLog.scrollHeight;
}

createBoard();
