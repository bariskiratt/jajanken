function getRandomInt(max){
    return Math.floor(Math.random() * max)
}


function getComputerChoice(){
    let randomNumber = getRandomInt(3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(computerSelection , playerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) return "Draw!";
    else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") return "Computer wins!";
    else return "Player wins!";
}

function playGame(){
    const playerSelection = window.prompt("Rock? Paper? Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));


}

playGame();
playGame();
playGame();
playGame();
playGame();
