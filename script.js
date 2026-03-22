const buttons = document.querySelectorAll(".buttons button");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const resetBtn = document.getElementById("reset");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (gameOver) return;
    playRound(button.id);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(player) {
  const computer = getComputerChoice();

  if (player === computer) {
    resultDiv.textContent = `Tie! Both chose ${player}`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You Win! ${player} beats ${computer}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You Lose! ${computer} beats ${player}`;
  }

  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    resultDiv.textContent += humanScore === 5
      ? " 🎉 You won the game!"
      : " 💻 Computer won the game!";
  }
}

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  resultDiv.textContent = "Make your move!";
  scoreDiv.textContent = "You: 0 | Computer: 0";
});