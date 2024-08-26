Turn-Based Strategy Game with WebSocket Integration
Overview
This project is a turn-based, strategy game inspired by chess. The game is designed for two players and features a server-client architecture with real-time communication through WebSockets. The web-based user interface provides a dynamic and interactive experience.

Game Rules
Setup
The game takes place on a 5x5 grid.
Two players compete, each commanding a team of 5 characters: 3 Pawns, a Hero1, and a Hero2.
At the start of the game, each player arranges their characters on their respective starting rows.
Characters & Movements
1. Pawn
Movement: The Pawn can move one square in any of the four cardinal directions: Left, Right, Forward, or Backward.
Commands:
L (Left)
R (Right)
F (Forward)
B (Backward)
2. Hero1
Movement: Hero1 moves two squares in any of the four cardinal directions. It captures any opponent’s character in its path.
Commands:
L (Left)
R (Right)
F (Forward)
B (Backward)
3. Hero2
Movement: Hero2 moves two squares diagonally in any direction. It captures any opponent’s character in its path.
Commands:
FL (Forward-Left)
FR (Forward-Right)
BL (Backward-Left)
BR (Backward-Right)
Move Command Syntax
Pawn and Hero1: <character_name>:<move>
Example: P1:L, H1:F
Hero2: <character_name>:<move>
Example: H2:FL, H2:BR
Technical Details
WebSocket Communication: The game leverages WebSocket technology for real-time, bidirectional communication between the server and clients.
Server-Client Architecture: The server manages game state and enforces rules, while the clients handle user input and display the game state.
Web-Based Interface: The game interface is accessible via a web browser, providing an interactive experience for players.
