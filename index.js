let getComputerChoice = function() {
    let num = Math.round(Math.random() * 100) % 3;
    switch (num)
    {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors"
    }
}

console.log(getComputerChoice());