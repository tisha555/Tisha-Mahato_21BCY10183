# Turn-based Chess-like Game with WebSocket Communication
## Objective
Develop a turn-based chess-like game featuring a server-client architecture, utilizing WebSockets for real-time communication and a web-based user interface.

# Game Rules
### Game Setup
1. The game is played between two players on a 5x5 grid.
2. Each player controls a team of 5 characters: Pawns, Hero1, and Hero2.
3. Players arrange their characters on their respective starting rows at the beginning of the game.

## Characters and Movement
### 1. Pawn:
   - Moves one block in any direction (Left, Right, Forward, or Backward).
   - Move commands: L (Left), R (Right), F (Forward), B (Backward).
### 2. Hero1:
   - Moves two blocks straight in any direction.
   - Kills any opponent's character in its path.
   - Move commands: L (Left), R (Right), F (Forward), B (Backward).
### 3. Hero2:
   - Moves two blocks diagonally in any direction.
   - Kills any opponent's character in its path.
     
- Move commands: FL (Forward-Left), FR (Forward-Right), BL (Backward-Left), BR (Backward-Right).

- Move Command Format
    - For Pawn and Hero1: <character_name>:<move> (e.g., P1:L, H1:F)
    - For Hero2: <character_name>:<move> (e.g., H2:FL, H2:BR)
