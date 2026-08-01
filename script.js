//computer choice
function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

//user choice
function getHumanChoice() {
    let choice = prompt("Please input your move: Rock, Paper or Scissors");
    return choice;
}

let playerScore = 0;
let computerScore = 0;

//game logic
function playRound (humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();
    
    //losing
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Computer played paper. You lose! Paper Beats rock.";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Computer played scissors. You lose! Scissors tears paper.";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Computer played rock. You lose! Rock breaks scissors.";
    }
    //winning
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        return "Computer played scissors. You Win! Rock breaks scissors.";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        return "Computer played rock. You Win! Paper Beats rock.";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return "Computer played paper. You Win! Scissors tears paper.";
    }
    //draw
    else if (humanChoice === "rock" && computerChoice === "rock") {
        return "Computer played rock. Draw.";
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        return "Computer played paper. Draw.";
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "Computer played scissors. Draw.";
    }
}

//playgame
let rockButton = document.querySelector("#rock-option");
let paperButton = document.querySelector("#paper-option");
let scissorsButton = document.querySelector("#scissors-option");
let roundStatus = document.querySelector("#round-status")
let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let buttonsContainer = document.querySelector(".buttons");
let gameResult = document.querySelector("#resultMsg")
//on clicking buttons
rockButton.addEventListener("click", () => {
    roundStatus.textContent = playRound("rock", getComputerChoice());
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        roundStatus.textContent = "Refresh to play again.";
        buttonsContainer.style.display ="none";
        gameResult.textContent = "You Win!";
    }
    else if (computerScore === 5) {
        roundStatus.textContent =  "Refresh to play again.";
        buttonsContainer.style.display ="none";
        gameResult.textContent = "You Lose!"
    }
})
paperButton.addEventListener("click", () => {
    roundStatus.textContent = playRound("paper", getComputerChoice())
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        roundStatus.textContent = "Refresh to play again.";
        buttonsContainer.style.display ="none";
        gameResult.textContent = "You Win!"
    }
    else if (computerScore === 5) {
        roundStatus.textContent =  "Refresh to play again.";
        buttonsContainer.style.display ="none";
        gameResult.textContent = "You Lose!";
    }
})
scissorsButton.addEventListener("click", () => {
    roundStatus.textContent = playRound("scissors", getComputerChoice())
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        roundStatus.textContent = "Refresh to play again.";
        buttonsContainer.style.display ="none";
        gameResult.textContent = "You Win!";
    }
    else if (computerScore === 5) {
        roundStatus.textContent =  "Refresh to play again.";
        buttonsContainer.style.display ="none";
        gameResult.textContent = "You Lose!";
    }
})
    
function playGame() {
    // let human = getHumanChoice();
    // let computer = getComputerChoice();
    // console.log(playRound(human, computer));
    // human = getHumanChoice();
    // computer = getComputerChoice();
    // console.log(playRound(human, computer));
    // human = getHumanChoice();
    // computer = getComputerChoice();
    // console.log(playRound(human, computer));
    // human = getHumanChoice();
    // computer = getComputerChoice();
    // console.log(playRound(human, computer));
    // human = getHumanChoice();
    // computer = getComputerChoice();
    // console.log(playRound(human, computer));
    }

// console.log(playGame());

