// function for getting a computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        return 'Rock';
    } else if (randomNumber == 2) {
        return 'Paper';
    } else if (randomNumber == 3) {
        return 'Scissors';
    }
}

//function for capitlising the first letter of a string only
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


// function for getting a player choice
 function getPlayerChoice() {
    let playerInput = capitalizeFirstLetter(prompt('What will you choose? Rock, paper, or scissors?'));
    return playerInput;
 }



// function for determing win/lose/draw of a single round
function playRound(playerSelection, computerSelection) {
    // this is for draws
    if (playerSelection == computerSelection) {
        lastResult = 1;
        return `Computer chose ${computerSelection}, and you chose ${playerSelection}. Tie!`;
    } 
    // this is for loss
    else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        lastResult = 2;
        compScore += 1;
        compScoreDiv.textContent = `Computer score: ${compScore}`;
        return 'You lose! Computer chose ' + computerSelection + ' which beats ' + playerSelection + '!';
    }
    // this is for win
    else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        lastResult = 3;
        playerScore += 1;
        yourScoreDiv.textContent = `Your score: ${playerScore}`
        return 'You win! ' + playerSelection + ' beats the computer selection, which was ' + computerSelection + '!';
    } else lastResult = 4
}

// variables that stores last results and socres
let lastResult;
let playerScore = 0;
let compScore = 0;

//variables for query selectors
const rock = document.querySelector('#rockButton');
const paper = document.querySelector('#paperButton');
const scissors = document.querySelector('#scissorsButton');
const yourScoreDiv = document.querySelector('.yourscore');
const compScoreDiv = document.querySelector('.compscore');
const textDisplayDiv = document.querySelector('.textdisplay');
const announceDiv = document.querySelector('.announcement')

//function called after a click is activated
function play(selection) {
    let singleCompChoice = getComputerChoice();
    textDisplayDiv.textContent = `You have selected ${selection}.`;
    textDisplayDiv.textContent = `Computer has selected ${singleCompChoice}.`;
    textDisplayDiv.textContent = playRound(selection, singleCompChoice);
    if (playerScore == 5 || compScore == 5) {
        announceWinner();
    }
};

//fuction for annoucning the winner
function announceWinner() {
    if (playerScore == 5) {
        announceDiv.textContent = 'Congratulations, you were first to 5! Refresh the page to play again.';
    } else {
        announceDiv.textContent = 'The computer was first to 5, unlucky! Refresh the page to play again.';
    }
}

// event listeners

rock.addEventListener('click', function() {
    play('Rock');
});
paper.addEventListener('click', function() {
    play('Paper');
});
scissors.addEventListener('click', function() {
    play('Scissors');
});








