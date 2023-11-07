const getUserChoice = choice => {
  const userChoice = choice.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    return userChoice;
  } else {
    console.log('WHAAAT WHAAAT', userChoice);
  }
};
const getComputerChoice = () => {
  const choice = getRandomArbitrary(0, 3);

  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const determineWinner = (userChoice, computerChoice) => {
  console.log('USER', userChoice, 'Computer', computerChoice);
  if (userChoice === computerChoice) {
    return 'the game was a tie';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'user won!';
  } else {
    return 'computer won!';
  }
};

console.log(determineWinner(getUserChoice('roCk'), getComputerChoice()));
console.log(determineWinner(getUserChoice('pAper'), getComputerChoice()));
console.log(determineWinner(getUserChoice('Scissors'), getComputerChoice()));
