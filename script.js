// function for getting a computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        return 'Rock'
    } else if (randomNumber == 2) {
        return 'Paper'
    } else if (randomNumber == 3) {
        return 'Scissors'
    }
}

//function for capitlising the first letter of a string only
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


// function for getting a player choice
 function getPlayerChoice() {
    let playerInput = capitalizeFirstLetter(prompt('What will you choose? Rock, paper, or scissors?'))
    return playerInput
 }



// function for determing win/lose/draw of a single round
function playRound (playerSelection, computerSelection) {
    // this is for draw
    if (playerSelection == computerSelection) {
        return "It's a tie game!"
    } 
    // this is for loss
    else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
    }
    // this is for win
    else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
    }
}

console.log(getPlayerChoice())
console.log(getComputerChoice())
