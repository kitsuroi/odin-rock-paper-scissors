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
    computerChoice = 'Rock';
  }
  //if randomInt is 0 set computerChoice to 'paper'.
  else if (randomInt === 1) {
    computerChoice = 'Paper';
  }
  //if randomInt is 0 set computerChoice to 'scissors'.
  else {
    computerChoice = 'Scissors';
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
function playRound(roundNumber) {
  //display roundNumber
  console.log(`Round ${roundNumber + 1}.`);
  //initialize string constant humanChoice set to getHumanChoice.
  const humanChoice = getHumanChoice();
  //initialize string constant computerChoice set to getComputerChoice.
  const computerChoice = getComputerChoice();
  //display humanChoice and computerChoice
  console.log('human: ' + humanChoice);
  //check if game got canceled
  if (humanChoice === 'Stop Game') {
    return stopGame = true;
  }
  //display computerChoice
  console.log('computer: ' + computerChoice);
  //check for a draw display draw.
  if (humanChoice === computerChoice) {
    console.log(`It's a Draw. ${humanChoice} and ${computerChoice} draw.`);
  }
  //check if human wins increment humanScore and display human win.
  else if (humanChoice === 'Rock' && computerChoice === 'Scissors'
  || humanChoice === 'Scissors' && computerChoice === 'Paper'
  || humanChoice === 'Paper' && computerChoice === 'Rock') {
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

//function playGame calls playRound 5 times
function playGame(){
  // call round 5 times
  for (let i = 0; i < 5; i++) {
    let stopGame = playRound(i);
    if (stopGame === true) {
      i = 6;
    }
  }
}

//initialize integer variable humanScore set value to 0
let humanScore = 0;
//initialize integer variable computerScore set value to 0
let computerScore = 0;

playGame();