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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            displayResult(`${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
    } else if (playerSelection === computerSelection) {
        displayResult('Tie round');
    } else {
        computerScore++;
        displayResult(`${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
    }
}

function displayResult(result) {
    scoreTitle.textContent = result;
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function rplContent() {
    main.classList.add('disappear');
    endAlert.classList.remove('disappear');

    retryBtn.addEventListener('click', () => {
        main.classList.remove('disappear');
        endAlert.classList.add('disappear');
        resetGame();
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    playerWeapon.textContent = '?';
    computerWeapon.textContent = '?';
}

function gameEnd() {
    rplContent();

    endDesc.innerHTML = '';
    if (playerScore > computerScore) {
        console.log("You are winner!");
        endDesc.textContent = "You are winner!";
    } else {
        console.log("You are loser!");
        endDesc.textContent = "You are loser!";
    }

}

function createWeapon(playerSelection, computerSelection) {
    const playerWeaponRound = document.createElement('img');
    const computerWeaponRound = document.createElement('img');

    playerWeaponRound.src = `images/${playerSelection.toLowerCase()}.png`;
    computerWeaponRound.src = `images/${computerSelection.toLowerCase()}.png`;

    playerWeaponRound.alt = playerSelection;
    computerWeaponRound.alt = computerSelection;

    playerWeapon.textContent = '';
    computerWeapon.textContent = '';

    playerWeapon.appendChild(playerWeaponRound);
    computerWeapon.appendChild(computerWeaponRound);
}


let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const scoreTitle = document.querySelector('.score-title');
scoreTitle.innerHTML = '';
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');
const playerWeapon = document.querySelector('.player-weapon');
const computerWeapon = document.querySelector('.computer-weapon');
const main = document.querySelector('#main-content');
const endAlert = document.querySelector('#end-alert');
const endDesc = document.querySelector('#end-desc');
const retryBtn = document.querySelector('#retry-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerImg = button.querySelector('img');
        
        const playerSelection = playerImg.alt;
        const computerSelection = getComputerChoice();

        createWeapon(playerSelection, computerSelection);

        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            gameEnd();
        }
    })
})