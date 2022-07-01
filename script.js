let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  const randomNumber = Math.floor(Math.random() * 9);
  return randomNumber;
};

function compareGuesses(human, computer, target) {
  const humanAnswer = Math.abs(target - human);
  const computerAnswer = Math.abs(target - computer);
  if (humanAnswer <= computerAnswer) {
    return true;
  } else {
    return false;
  }
};

function updateScore(winner) {
  winner === "human" ? humanScore++ : computerScore++;
};

function advanceRound() {
  currentRoundNumber++;
};
