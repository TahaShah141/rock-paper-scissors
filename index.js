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

const buttons = document.querySelectorAll(".button")
buttons.forEach((button) => button.addEventListener("click", clicked))


const scoreboard = document.querySelector(".scoreboard")
function clicked(e) {
    endgame("taha");
    let playerSelection = e.target.alt;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    
    let id;
    if (result === 1) id = "Player";
    else if (result === -1) id = "Computer";
    else return;

    const score = document.getElementById(id);
    let prevScore = score.textContent;
    score.textContent = Number(prevScore) + 1;

    if (prevScore === 4) endgame(id);
}


//TODO
function endgame(winner) {
    //delete scoreboard div
    //add ending text
    //prompt for new game
}