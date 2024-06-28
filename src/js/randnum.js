const inputRandnum = document.querySelector('.randnum__input');
const btnRandnum = document.querySelector('.randnum__btn');
const resultRundnum = document.querySelector('.randnum__result');




btnRandnum.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (inputRandnum.value === randomNumber) {
        resultRundnum.textContent = `Вітаю, ви вгадали число! ${inputRandnum.value}`
    } else if (inputRandnum.value !== randomNumber){
        resultRundnum.textContent = `Ви не вгадали число! ${inputRandnum.value}`
    } else {
        resultRundnum.textContent = `Введіть число`

    }
})