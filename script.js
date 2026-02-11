let playerScore = 0;
let computerScore = 0;

function playGame (playerChoice) {
    const choices = ["rock" , "paper" , "scissors"];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        result = `You Win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    }
    else {
        result = `You Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    document.getElementById("result").textContent= result;
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").textContent= "Make your choice! ";
    document.getElementById("score").textContent = "Player: 0 | Computer: 0";  
}