document.addEventListener("DOMContentLoaded", function () {
  const boardContainer = document.getElementById("board-container");
  for (let row = 10; row >= 1; row--) {
    // Loop within each row
    for (let col = 1; col <= 10; col++) {
      const number =
        row % 2 === 1 ? (row - 1) * 10 + col : row * 10 - (col - 1);

      const box = document.createElement("div");
      box.classList.add("box");
      box.id = "b" + number;
      // box.innerHTML = number;

      boardContainer.appendChild(box);
    }
  }

  let start = 1;
  const boxPlayer1 = document.getElementById(`b${start}`);
  const playerCircle1 = document.createElement("div");
  playerCircle1.classList.add("player-circle1");
  boxPlayer1.appendChild(playerCircle1);

  const boxPlayer2 = document.getElementById(`b${start}`);
  const playerCircle2 = document.createElement("div");
  playerCircle2.classList.add("player-circle2");
  boxPlayer2.appendChild(playerCircle2);

  // Set the background image dynamically
  boardContainer.style.background = 'url("board.jpg") center/cover no-repeat';
});

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").value;

    console.log("Player Names : " + player1 + " " + player2);
  });

//default player positions
let player1Position = 1;
let player2Position = 1;
let gameOver = false;
let flag = true;

document.getElementById("rollBtn").addEventListener("click", function (event) {
  event.preventDefault();

  if (!gameOver) {
    if (flag === true) {
      playGame(player1Position);
      flag = false;
    } else {
      playGame(player2Position);
      flag = true;
    }
  }
});

function playGame(player) {
  // Remove the previous player circles
  if (flag) {
    document.querySelectorAll(".player-circle1").forEach((circle) => {
      circle.remove();
    });
  } else {
    document.querySelectorAll(".player-circle2").forEach((circle) => {
      circle.remove();
    });
  }

  // Generate a random number between 1 and 6 (inclusive)
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  console.log(randomNumber);

  let displayDice = `${randomNumber}`;
  document.getElementById("diceDisplay").innerHTML = displayDice;
  let newPosition = player + randomNumber;

  let playername = "Player";
  if (flag === true) {
    playername = document.getElementById("player1").value;
  } else {
    playername = document.getElementById("player2").value;
  }

  if (newPosition > 100) {
    newPosition = player;
  }
  if (newPosition < 100) {
    // Snakes and Ladders Below
    switch (newPosition) {
      // LADDERS
      case 5:
        newPosition = 58;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + "Climbed Ladder To" + newPosition);
        break;
      case 14:
        newPosition = 49;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + "  Climbed Ladder To " + newPosition);
        break;
      case 42:
        newPosition = 60;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + "  Climbed Ladder To " + newPosition);
        break;
      case 53:
        newPosition = 72;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + "Climbed Ladder To" + newPosition);
        break;
      case 64:
        newPosition = 83;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + "Climbed Ladder To " + newPosition);
        break;
      case 75:
        newPosition = 94;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + "Climbed Ladder To " + newPosition);
        break;

      // SNAKES
      case 38:
        newPosition = 20;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(
          "Hissss.. Snake Swallows Off " + playername + " To " + newPosition
        );
        break;
      case 45:
        newPosition = 7;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(
          "Hissss.. Snake Swallows Off " + playername + " To " + newPosition
        );
        break;
      case 51:
        newPosition = 10;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(
          "Hissss.. Snake Swallows Off " + playername + " To " + newPosition
        );
        break;
      case 76:
        newPosition = 54;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(
          "Hissss.. Snake Swallows Off " + playername + " To " + newPosition
        );
        break;
      case 91:
        newPosition = 73;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(
          "Hissss.. Snake Swallows Off " + playername + " To " + newPosition
        );
        break;
      case 97:
        newPosition = 61;
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(
          "Hissss.. Snake Swallows Off " + playername + " To " + newPosition
        );
        break;

      default:
        document.getElementById(
          "displayMsg"
        ).innerHTML = `${playername}   Climbed Ladder To   ${newPosition}`;
        console.log(playername + " Moved Ahead To " + newPosition);
        break;
    }

    // Update player position
    player = newPosition;
    // Update the global variable based on player turn
    if (flag) {
      player1Position = player;
    } else {
      player2Position = player;
    }

    // Display the player's circle in the current position
    if (flag) {
      const currentBox = document.getElementById(`b${player}`);
      const playerCircle = document.createElement("div");
      playerCircle.classList.add("player-circle1");
      currentBox.appendChild(playerCircle);
    } else {
      const currentBox = document.getElementById(`b${player}`);
      const playerCircle = document.createElement("div");
      playerCircle.classList.add("player-circle2");
      currentBox.appendChild(playerCircle);
    }
  } else {
    // Update player position
    player = newPosition;
    // Game won
    if (player === 100) {
      if (flag) {
        const currentBox = document.getElementById(`b${player}`);
        const playerCircle = document.createElement("div");
        playerCircle.classList.add("player-circle1");
        currentBox.appendChild(playerCircle);
      } else {
        const currentBox = document.getElementById(`b${player}`);
        const playerCircle = document.createElement("div");
        playerCircle.classList.add("player-circle2");
        currentBox.appendChild(playerCircle);
      }

      document.getElementById(
        "displayMsg"
      ).innerHTML = `${playername}   WON THE GAME`;
      console.log(player + " WON THE GAME");
      gameOver = true;
      return;
    }
  }
}
