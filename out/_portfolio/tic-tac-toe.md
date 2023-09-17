---
layout: project
title:  Tic Tac Toe
date:   2023-09-09
image: assets/img/works/tic-tac-toe.webp
author: Marwin Wongjarupun
---
# Tic-Tac-Toe AI Project Description


<iframe width="560" height="315" src="https://www.youtube.com/embed/ADqxZliNa3w?si=PNzxOcbePZFamSV5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>

## Project Overview

The Tic-Tac-Toe AI project aims to create an intelligent computer player for the classic game of Tic-Tac-Toe. The primary goal of this project is to develop an AI that is capable of providing a challenging and enjoyable gaming experience for the player. The AI will actively block the player from winning instantly or winning more than 50% of the games, ensuring a competitive and engaging gameplay.

## Objectives

1. **Smart AI:** Develop an AI that can make intelligent moves based on the current state of the game board. The AI should prioritize blocking the player from winning while also seeking opportunities to win itself.
2. **User Interface:** Create a user-friendly interface that allows the player to interact with the game. This includes displaying the game board, accepting player inputs, and providing feedback on game outcomes.
3. **Game Logic:** Implement the rules of Tic-Tac-Toe to ensure a fair and consistent gaming experience. This includes checking for win, lose, or tie conditions after each move.
4. **Prevent Instant Wins:** The AI should actively identify situations where the player is one move away from winning and block that move.
5. **Maintain Competition:** Ensure that the AI is challenging enough to prevent the player from winning more than 50% of the games, making the gameplay engaging and competitive.

## Implementation Details

### Game Representation

The Tic-Tac-Toe game can be represented as a 3x3 grid, with each cell capable of holding one of three values: X (player), O (AI), or empty. The state of the game can be stored as a 2D array or a similar data structure.

### Turn Management

The game will have a turn-based system where the player and AI take alternating turns. The player will make their move, which will be validated for legality, and then the AI will respond with its move.

### Block Instant Wins

The AI will analyze the current state of the game board after each player move to identify potential instant wins for the player. If such a situation is detected, the AI will make a defensive move to block the player.

### Competition Level

To maintain competition and prevent the player from winning more than 50% of the games, the AI will be programmed with varying levels of difficulty. Players can choose the AI's skill level, ranging from easy to hard, with harder levels making the AI more strategic and challenging.

### Win-Lose-Tie Conditions

The game logic will continuously check for win, lose, or tie conditions. A player wins when they have three of their symbols (X or O) in a row, column, or diagonal. The game is declared a draw (tie) if all cells are filled, and no player has won.

## Optional Min-Max Algorithm

While the implementation of the min-max algorithm is not required, it can be considered for creating an even more sophisticated AI. The min-max algorithm can be used to evaluate and choose the best possible moves for the AI, leading to a highly competitive opponent.

## Conclusion

The Tic-Tac-Toe AI project aims to create an engaging and challenging gaming experience by developing an intelligent AI opponent. By implementing smart move strategies, blocking instant wins, and providing varying difficulty levels, this project aims to ensure that players have fun while playing Tic-Tac-Toe against the AI
