const choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return getRandomInt(3);
}

function playRound(playerSelection, computerSelection) {
  if (+playerSelection === computerSelection)
    return `Draw! you both selected ${choices[playerSelection]}`;
  if (
    +playerSelection === computerSelection + 1 ||
    (+playerSelection === 0 && computerSelection === 2)
  )
    return `You win! ${choices[playerSelection]} beats ${choices[computerSelection]}`;
  return `You Lose. ${choices[playerSelection]} loses to ${choices[computerSelection]}`;
}

function displayResult(playerSelection) {
  const computerSelection = getComputerChoice();
  document.getElementById("computer").innerText = choices[computerSelection];
  document.getElementById("result").innerText = playRound(
    playerSelection,
    computerSelection
  );
}
