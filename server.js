const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public directory
app.use(express.static('public'));

// Game state
const initialGameState = {
    board: Array(5).fill(null).map(() => Array(5).fill(null)),
    currentPlayer: 'A',
    players: {
        A: { characters: [], name: 'Player A' },
        B: { characters: [], name: 'Player B' }
    }
};

let gameState = JSON.parse(JSON.stringify(initialGameState));

// Handle new client connections
io.on('connection', (socket) => {
    console.log('New player connected:', socket.id);

    // Initialize game for the new player
    socket.emit('init', gameState);

    // Handle move requests from clients
    socket.on('move', (data) => {
        const { player, move } = data;

        // Process the move
        if (gameState.currentPlayer === player) {
            const isValidMove = processMove(player, move);
            if (isValidMove) {
                gameState.currentPlayer = player === 'A' ? 'B' : 'A';
                io.emit('update', gameState); // Broadcast the updated game state to all clients
            } else {
                socket.emit('invalid', 'Invalid move, please try again.');
            }
        } else {
            socket.emit('invalid', 'Not your turn.');
        }
    });

    // Handle game reset
    socket.on('reset', () => {
        gameState = JSON.parse(JSON.stringify(initialGameState));
        io.emit('update', gameState);
    });
});

function processMove(player, move) {
    // TODO: Implement the game logic here
    return true; // This is a placeholder, should return true if the move is valid
}

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
