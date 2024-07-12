//getRandomInt from 0 to max.
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

// getComputerChoice of rock, paper or scissors.
function getComputerChoice() {
  //generate a random integer from 0 to 3
  const randomInt = getRandomInt(3);
  //initialize string variable computerChoice.
  let computerChoice = '';
  //if randomInt is 0 set computerChoice to 'rock'.
  if (randomInt === 0) {
    computerChoice = 'rock';
  }
  //if randomInt is 0 set computerChoice to 'paper'.
  else if (randomInt === 1) {
    computerChoice = 'paper';
  }
  //if randomInt is 0 set computerChoice to 'scissors'.
  else {
    computerChoice = 'scissors';
  }
  //return value of computerChoice
  return computerChoice;
}

//playRound play a single round, increment score and display winner.
function playRound(humanChoice, computerChoice) {
  //check for a draw display draw.
  if (humanChoice === computerChoice) {
    console.log(`It's a Draw. ${humanChoice} and ${computerChoice} draw.`);
  }
  //check if human wins increment humanScore and display human win.
  else if (humanChoice === 'rock' && computerChoice === 'scissors'
    || humanChoice === 'scissors' && computerChoice === 'paper'
    || humanChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
    //otherwise increment computerScore and display human loss.
    else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
    result.textContent = `${humanScore} - ${computerScore}`;
  }
  
  //initialize integer variable humanScore set value to 0
  let humanScore = 0;
  //initialize integer variable computerScore set value to 0
  let computerScore = 0;

  // make scoreboard
  const result = document.querySelector("#result");
  result.textContent = `${humanScore} - ${computerScore}`;
  
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>{
    button.addEventListener("click", () => {
      //initialize string constant humanChoice set to button.id
      const humanChoice = button.id;
      //initialize string constant computerChoice set to getComputerChoice.
      const computerChoice = getComputerChoice();
      //display humanChoice and computerChoice
      console.log('human: ' + humanChoice);
      console.log('computer: ' + computerChoice);
      playRound(humanChoice, computerChoice);
    })
  })
  