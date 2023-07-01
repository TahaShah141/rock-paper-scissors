let choices = ["Rock", "Scissors", "Paper"]; //each choice beats the next one

function getComputerChoice() {
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

function game() {
    let score = 0;
    let drawCount = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        if (results == 1) score += 1;
        if (results == 0) drawCount += 1;
        if (results == 0) console.log(`Draw! Both Chose ${computerSelection.toUpperCase()}`);
        else if (results == 1) console.log(`Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        else if (results == -1) console.log(`Loss! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
    }

    computerScore = 5 - drawCount - score;
    console.log(`Final Score:\nPlayer: ${score}\t\tComputer: ${computerScore}\n${score > computerScore ? "Player Won" : score == computerScore ? "Both Tied" : "Computer Won"}`);
}

game();