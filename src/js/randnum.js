const inputRandnum = document.querySelector('.randnum__input');
const btnRandnum = document.querySelector('.randnum__btn');
const resultRundnum = document.querySelector('.randnum__result');




btnRandnum.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1

    if (+inputRandnum.value === randomNumber) {
        resultRundnum.textContent = `Вітаю, ви вгадали число! ${randomNumber}`
        resultRundnum.style.color = '#039900';
    } else if (+inputRandnum.value !== randomNumber){
        resultRundnum.textContent = `Ви не вгадали число! ${randomNumber}`
        resultRundnum.style.color = '#FF0000';
    } else {
        resultRundnum.textContent = `Введіть число`

    }
})