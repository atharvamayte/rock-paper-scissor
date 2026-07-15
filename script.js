//computer choice
function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

//user choice
function getHumanChoice() {
    let choice = prompt("Please input your move");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

//game logic
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
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
        humanScore++;
        return "Computer played scissors. You Win! Rock breaks scissors.";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Computer played rock. You Win! Paper Beats rock.";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
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
function playGame() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log(playRound(human, computer));
    human = getHumanChoice();
    computer = getComputerChoice();
    console.log(playRound(human, computer));
    human = getHumanChoice();
    computer = getComputerChoice();
    console.log(playRound(human, computer));
    human = getHumanChoice();
    computer = getComputerChoice();
    console.log(playRound(human, computer));
    human = getHumanChoice();
    computer = getComputerChoice();
    console.log(playRound(human, computer));

    if (humanScore === computerScore) {
        return "Draw!!";
    }
    else if (humanScore < computerScore) {
        return "You Lose!!";
    }
    else if (humanScore > computerScore) {
        return "You Win!! GG";
    }
    }

console.log(playGame());

