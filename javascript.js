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
            
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
function playRound(computerSelection , playerSelection){
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection === computerSelection) {
            playerScore += 1;
            computerScore += 1;
        }
        else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
        }
        else playerScore += 1;
}
            
function playGame(playerSelection){
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
}


const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');


const resultText = document.createElement('h1');
const showDiv = document.querySelector('.show');
showDiv.appendChild(resultText);

btnRock.addEventListener('click', () => {
    playGame('rock');
    if(playerScore === 5){
        resultText.textContent = "Player has reached the score of 5 first. PLAYER WINS";
    }
    else if(computerScore === 5){
        resultText.textContent = "Computer has reached the score of 5 first. COMPUTER WINS";
    }
    else resultText.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
});
btnPaper.addEventListener('click', () => {
    playGame('paper');
    if(playerScore === 5){
        resultText.textContent = "Player has reached the score of 5 first. PLAYER WINS";
    }
    else if(computerScore === 5){
        resultText.textContent = "Computer has reached the score of 5 first. COMPUTER WINS";
    }
    else resultText.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
});
btnScissors.addEventListener('click', () => {
    playGame('scissors');
    if(playerScore === 5){
        resultText.textContent = "Player has reached the score of 5 first. PLAYER WINS";
    }
    else if(computerScore === 5){
        resultText.textContent = "Computer has reached the score of 5 first. COMPUTER WINS";
    }
    else resultText.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
});

