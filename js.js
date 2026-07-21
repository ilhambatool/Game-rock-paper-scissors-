const btns = document.querySelector(".buttons")
const rockbtn = document.querySelector("#rock")
const paperbtn = document.querySelector("#paper")
const scissorsbtn = document.querySelector("#scissors")
const choices = document.querySelector("#choices");
const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score");

const startGame = document.querySelector(".startGame")
const startbtn = document.querySelector(".start")

const result = document.querySelector(".results")
const winner = document.querySelector("#winner");
const reset = document.querySelector(".reset")

//only start game div will be displayed at start
result.style.display = "none";
btns.style.display = "none";

let humanScore = 0;
let computerScore = 0;

//when we start game a new game will be displayed
startbtn.addEventListener("click", () => {
  resetGame();
  startGame.style.display = "none";
});

//when we reset game a new game will be displayed
reset.addEventListener("click", resetGame);

//buttons passes input of user 
//scissors(2)=win , paper(1)=loss 
//paper(1)=win , rock(0)=loss
//rock(0)=win , scissors(2)=loss
rockbtn.addEventListener('click', () => playRound(0));
paperbtn.addEventListener('click', () => playRound(1));
scissorsbtn.addEventListener('click', () => playRound(2));

//this func displays after a game is finished
function displayResults(message) {
  winner.textContent = message;
  btns.style.display = "none";
  result.style.display = "block";
}

//resets everything for a new game
function resetGame() {

  humanScore = 0;
  computerScore = 0;

  choices.textContent = "";
  roundResult.textContent = "";
  score.textContent = "Your Score: 0 | Computer Score: 0";
  winner.textContent = "";

  btns.style.display = "block";
  result.style.display = "none";
}


//funtion defined inside a function
function playRound(humanChoice) {

  let computerChoice = getComputerChoice();

  // Stores rock, paper and scissors
  let human = conversion(humanChoice);
  let comp = conversion(computerChoice);

  // Displays converted choices
  console.log("you = ", human, "\tcomputer = ", comp);
  choices.textContent = `You chose ${human}. Computer chose ${comp}.`;

  // Game logic
  if (humanChoice === computerChoice) {
    console.log("draw");
    roundResult.textContent = "It's a draw! Both players chose the same option.";
  }

  // Human = Rock
  else if (humanChoice === 0) {
    if (computerChoice === 1) {
      computerScore++;
      roundResult.textContent = "Computer won this round! Paper beats Rock.";
    } else {
      humanScore++;
      roundResult.textContent = "You won this round! Rock beats Scissors.";
    }
  }

  // Human = Paper
  else if (humanChoice === 1) {
    if (computerChoice === 2) {
      computerScore++;
      roundResult.textContent = "Computer won this round! Scissors beat Paper.";
    } else {
      humanScore++;
      roundResult.textContent = "You won this round! Paper beats Rock.";
    }
  }

  // Human = Scissors
  else {
    if (computerChoice === 0) {
      computerScore++;
      roundResult.textContent = "Computer won this round! Rock beats Scissors.";
    } else {
      humanScore++;
      roundResult.textContent = "You won this round! Scissors beat Paper.";
    }
  }

  console.log("your score = ", humanScore, "\tcomputer score = ", computerScore);
  score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

  if (humanScore === 5) {
    console.log("--- YOU WON ---");
    displayResults("🎉 You won the game!");
  }
  else if (computerScore === 5) {
    console.log("--- YOU LOST ---");
    displayResults("😢 Computer won the game!");
  }
}

//this func will return 0,1,2
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

//this func converts 0,1,2 to rock,paper and scissors
function conversion(convert) {
  if (convert === 0)
    return "rock";
  else if (convert === 1)
    return "paper";
  else
    return "scissors";
}