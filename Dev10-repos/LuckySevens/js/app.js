let initialBet;
let currentAmount;
let scoresTally = [];

function validateBet() {
  initialBet = document.forms["luckySevens"]["startBet"].value;
  if (initialBet === "" || initialBet === NaN || initialBet <= 0) {
    alert("Starting Bet must be greater than 0");
    resetBet();
    return false;
  } else {
    currentAmount = initialBet;
    playGame();
    displayResults();
    return false;
  }
}

function resetBet() {
  document.forms["luckySevens"]["startBet"].value = "";
  document.forms["luckySevens"]["startBet"].focus();
}

function gameReset() {
  resetBet();
  initialBet = 0;
  currentAmount = 0;
  scoresTally = [];

  document.location.reload(true);
}

function rollDice() {
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  return dice1 + dice2;
}

function playGame() {
  while (currentAmount > 0) {
    let totalRoll = rollDice();
    if (totalRoll === 7) currentAmount += 4;
    else currentAmount -= 1;
    scoresTally.push(currentAmount);
  }
  console.log(scoresTally);
  return scoresTally;
}

function getHighScore() {
  let highScore = 0;
  for (score of scoresTally) {
    if (score > highScore) {
      highScore = score;
    }
  }
  console.log(highScore);
  return highScore;
}

function displayResults() {
  let highestScore = getHighScore();
  let highScoreIndex = scoresTally.indexOf(highestScore);
  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again";
  document.getElementById("playButton").type = "reset";
  document.getElementById("initialBet").innerText = initialBet;
  document.getElementById("rollCount").innerText = scoresTally.length;
  document.getElementById("highestAmount").innerText = highestScore;
  document.getElementById("rollCountHigh").innerText = highScoreIndex + 1;
}
