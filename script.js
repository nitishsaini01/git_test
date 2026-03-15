console.log("Hello World");

function getComputerChoice() {
  let random = Math.random();

  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors");
  return choice;
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Tie!");

    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;

    } else {
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
      computerScore++;
    }

    console.log("Score → Human:", humanScore, "Computer:", computerScore);
  }

  for (let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("Final Score → Human:", humanScore, "Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");

  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");

  } else {
    console.log("🤝 Game is a tie!");
  }
}

playGame();