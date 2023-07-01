let choices = ["Rock", "Scissors", "Paper"]; //each choice beats the next one

let getComputerChoice = function() {
    let num = Math.round(Math.random() * 100) % 3;
    return choices[num];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getIndex(playerSelection);
    computerSelection = getIndex(computerSelection);

    if (playerSelection == computerSelection) return 0;
    else if ((playerSelection+1)%3 == computerSelection) return 1; //if computer is the one next of player
    else return -1; //if not tie or win, must've lost
}

function getIndex(choiceName) {
    choiceName = choiceName.toUpperCase();
    if (choiceName == "ROCK") return 0;
    else if (choiceName == "SCISSORS") return 1;
    else if (choiceName == "PAPER") return 2;
}

let selection = "rocK";
console.log(playRound(selection, getComputerChoice()));