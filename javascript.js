function getComputerChoice() {
    const number =  Math.floor(Math.random()*3)
    if (number === 0) {
        return 'Rock';
    } else if (number === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'Rock') {
            return "Draw! Rock and Rock";
        } else if (computerSelection === 'Scissors') {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock";
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'Paper') {
            return "Draw! Paper and Paper";
        } else if (computerSelection === 'Rock') {
            return "You Win! Paper beats ROck";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'Scissors') {
            return "Draw! Scissors and Scissors";
        } else if (computerSelection === 'Paper') {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choice Rock, Paper or Scissors", "Rock");
        const computerSelection = getComputerChoice();
        const answerTheGame = playRound(playerSelection, computerSelection);
        
        if (answerTheGame.search("Win") !== -1) {
            playerScore += 1;
        } else if (answerTheGame.search("Lose") !== -1) {
            computerScore += 1;
        }

        console.log(answerTheGame);
    }

    if (playerScore > computerScore) {
        console.log("You are winner!");
    } else if (playerScore < computerScore) {
        console.log("You are loser!");
    } else {
        console.log("Draw!");
    }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}


game();