//getRandomInt from 0 to max.
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

// first letter in string to uppercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function confirmButton() {
  //prompt user confirm or cancel put boolean into isExecuted variable
  let isExecuted = confirm('Do you want to quit the game?');
  //isExecuted true return 
  return isExecuted;
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

//getHumanChoice of rock, paper or scissors.
function getHumanChoice() {
  //initialize string variable userChoice.
  let userChoice = '';
  //prompt user for choice.
  userChoice = prompt('Make your choice (rock, paper or scissors)?');
  //check if player canceled or pressed esc
  if (userChoice === null) {
    let isExecuted = confirmButton();
    if (isExecuted === true){
      return 'Stop Game';
    } else {
      return getHumanChoice();
    }
  }
  //set userChoice to lowercase.
  userChoice = capitalizeFirstLetter(userChoice.toLowerCase());
  //check for valid choice(rock, paper or scissors).
  if (userChoice === 'Rock' 
  || userChoice === 'Paper' 
  || userChoice === 'Scissors') {
    //return userChoice if valid
    return userChoice;
  } else {
    //retry until userChoice is valid
    alert('Input is wrong please try again. Valid inputs are rock, paper or scissors.')
    return getHumanChoice();
  }
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
    //display scores.
    console.log(`Your score: ${humanScore} \nComputer's score: ${computerScore}`);
  }
  
  //initialize integer variable humanScore set value to 0
  let humanScore = 0;
  //initialize integer variable computerScore set value to 0
  let computerScore = 0;
  
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
  