let playerChoice;

const btns = document.querySelectorAll('.rps__block-btn');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.getAttribute('data-check') === 'true') {
          btn.removeAttribute('data-check')
          btn.style.border = 'none'
          btn.style.padding = '10px'
          playerChoice = undefined;
          return
        }

        
        btns.forEach(b => {
            b.removeAttribute('data-check');
            b.style.border = 'none';
            b.style.padding = '10px';
            playerChoice = undefined;
        });

        // Додаємо атрибут data-check до поточної кнопки

        btn.setAttribute('data-check', true)
        btn.style.border = '3px solid'
        btn.style.borderColor = '#8ACECF';
        btn.style.padding = '7px'
        playerChoice = btn.getAttribute('data-value');
    })
    
})

const startBtn = document.querySelector('.rps__startbtn');
const result = document.querySelector('.rps__result');
const pcScrore = document.querySelector('.js-pcscore');
const userScore = document.querySelector('.js-userscore');
const computerResult = document.querySelector('.rps__pcresult')


const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

const getComputerChoice = function () {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const winnerLogic = function (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = 'Нічия!'
        result.style.opacity = '1'
        result.style.color = '#000';
        return 'tie';
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore += 1;
        result.textContent = 'Ви виграли раунд!';
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
    console.log(computerChoice);
}

startBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();


    winnerLogic(playerChoice, computerChoice);
    pcScrore.textContent = computerScore;
    userScore.textContent = playerScore

    if (computerChoice === 'rock') {
        computerResult.textContent = 'Варіант комп’ютера: камінь';
    } else if (computerChoice === 'paper') {
        computerResult.textContent = 'Варіант комп’ютера: папір';
    } else if (computerChoice === 'scissors') {
        computerResult.textContent = 'Варіант комп’ютера: ножиці';
    }
    computerResult.style.opacity = '1'

});

