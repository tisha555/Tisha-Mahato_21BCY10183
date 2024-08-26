function renderBoard(board) {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';

    board.forEach((row, x) => {
        row.forEach((cell, y) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            if ((x + y) % 2 === 0) {
                cellDiv.classList.add('black');
            }

            if (cell) {
                cellDiv.textContent = `${cell.player}-${cell.type}`;
            }

            boardDiv.appendChild(cellDiv);
        });
    });
}
