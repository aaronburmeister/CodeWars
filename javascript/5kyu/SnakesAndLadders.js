// https://www.codewars.com/kata/587136ba2eefcb92a9000027/javascript

function SnakesLadders() {
    gameStats.start()
  };
  
  let gameStats = {
    // track player positions
    position: {
      player1: 0,
      player2: 0
    },
    player1turn: true,
    ladderStartTiles: [2, 7, 8, 15, 21, 28, 36, 51, 71, 78, 87],
    ladderEndTiles: [38, 14, 31, 26, 42, 84, 44, 67, 91, 98, 94],
    snakeStartTiles: [16, 46, 49, 62, 64, 74, 89, 92, 95, 99],
    snakeEndTiles: [6, 25, 11, 19, 60, 53, 68, 88, 75, 80],
    start: function () {
      this.position.player1 = 0
      this.position.player2 = 0
      this.player1turn = true
    }
  }
  
  SnakesLadders.prototype.play = function(die1, die2) {
    const sum = die1 + die2
    let message = ""
    
    function handlePlayerMovement(playerPosition) {
      // add sum to position if it's not over 100
      if (playerPosition + sum > 100) {
        playerPosition = 100 - (playerPosition + sum - 100)
      } else {
        playerPosition += sum
      }
      // see if the player lands on a ladder or a snake
      for (let i=0; i< gameStats.ladderStartTiles.length; i++) {
        if (playerPosition == gameStats.ladderStartTiles[i]) {
          playerPosition = gameStats.ladderEndTiles[i]
        } else if (playerPosition == gameStats.snakeStartTiles[i]) {
          playerPosition = gameStats.snakeEndTiles[i]
        }
      }
  
      return playerPosition
    }
    
    // trying to play after a winning game results in a game over message
    if (gameStats.position.player1 == 100 || gameStats.position.player2 == 100) {
      return "Game over!"
    }
    
    // handling movement and victory
    if (gameStats.player1turn) {
      gameStats.position.player1 = handlePlayerMovement(gameStats.position.player1)
      if (gameStats.position.player1 == 100) return "Player 1 Wins!"
      message = `Player 1 is on square ${gameStats.position.player1}`
    } else {
      gameStats.position.player2 = handlePlayerMovement(gameStats.position.player2)
      if (gameStats.position.player2 == 100) return "Player 2 Wins!"
      message = `Player 2 is on square ${gameStats.position.player2}`
    }
  
    // if the die aren't the same, move on to the next player
    if (die1 != die2) gameStats.player1turn = !gameStats.player1turn
    return message
  }

// May 29, 2020