let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (userChoice === computerChoice) {
    result = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}.`;
    userScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
    computerScore++;
  }

  document.getElementById("result").textContent = result;
  document.getElementById("score").textContent =
    `Score → You: ${userScore} | Computer: ${computerScore}`;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "Score → You: 0 | Computer: 0";
}
