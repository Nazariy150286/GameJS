// const rockBtn = document.querySelector('[data-value="rock"]');
// const scissorsBtn = document.querySelector('[data-value="scissors"]');
// const paperBtn = document.querySelector('[data-value="paper"]');

// const btns = document.querySelectorAll('.rps__block-btn');
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.removeAttribute('data-check')
//         btn.setAttribute('data-check', true)

//         // console.log(btn.getAttribute('data-value'));
//     })
// })

let playerChoice;

const btns = document.querySelectorAll('.rps__block-btn');
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.getAttribute('data-check') === 'true') {
      btn.removeAttribute('data-check')
      btn.style.border = 'none'
      btn.style.borderColor = '#000';
      btn.style.padding = '10px'
      return
    }
    btn.setAttribute('data-check', true)
    btn.style.border = '3px solid'
    btn.style.borderColor = '#ff0000';
    btn.style.padding = '7px'
    playerChoice = btn.getAttribute('data-value')
    // console.log(btn.getAttribute('data-value'));
  })
})



const startBtn = document.querySelector('.rps__startbtn');
const result = document.querySelector('.rps__result');

const pcScrore = document.querySelector('.js-pcscore');
const userScore = document.querySelector('.js-userscore');


const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

const getComputerChoice = function() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const winnerLogic = function(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = 'Нічия!'
        result.style.opacity = '1'
        result.style.color = '#000';
        return 'tie';
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore += 1;
        result.textContent = 'Ви виграли раунд!'
        result.style.opacity = '1'
        result.style.color = '#039900';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1; 
        result.textContent = 'Ви програли раунд!'
        result.style.opacity = '1'
        result.style.color = '#FF0000';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore += 1;
        result.textContent = 'Ви виграли раунд!'
        result.style.opacity = '1'
        result.style.color = '#039900';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        result.textContent = 'Ви програли раунд!'
        result.style.opacity = '1'
        result.style.color = '#FF0000';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore += 1;
        result.textContent = 'Ви виграли раунд!'
        result.style.opacity = '1'
        result.style.color = '#039900';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        result.textContent = 'Ви програли раунд!'
        result.style.opacity = '1'
        result.style.color = '#FF0000';
    }
}


startBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    winnerLogic(playerChoice, computerChoice);
    pcScrore.textContent = computerScore;
    userScore.textContent = playerScore

});








// rockBtn.addEventListener('click', () => {
//     const playerChoice = 'rock';
//     const computerChoice = getComputerChoice();

//     // const resultGame = winnerLogic(playerChoice, computerChoice)

//     // return resultGame
//     winnerLogic(playerChoice, computerChoice)

// })


// scissorsBtn.addEventListener('click', () => {
//     const playerChoice = 'scissors';
//     const computerChoice = getComputerChoice();

//     // const resultGame = winnerLogic(playerChoice, computerChoice)

//     // return resultGame
//     winnerLogic(playerChoice, computerChoice)

// })

// paperBtn.addEventListener('click', () => {
//     const playerChoice = 'paper';
//     const computerChoice = getComputerChoice();

//     // const resultGame = winnerLogic(playerChoice, computerChoice)

//     // return resultGame

//     winnerLogic(playerChoice, computerChoice)
// })