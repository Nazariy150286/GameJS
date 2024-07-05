const convertSeconds=()=> {
    const secondsInput = document.querySelector('.time__input').value;
    let totalSeconds = +secondsInput;

    if (totalSeconds < 0) {
        document.querySelector('.time__result').textContent = 'Веведіть валідну кілікість секунд';
        return;
    }

    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const timeResult= document.querySelector('.time__result')
    timeResult.textContent = `${days} днів, ${hours}:${minutes}:${seconds}`;
    timeResult.style.opacity = 100
    const timePar = document.querySelector(".time__p")
    timePar.style.opacity = 100


}
const timeBtn = document.querySelector(".time__btn")
timeBtn.addEventListener("click", convertSeconds)