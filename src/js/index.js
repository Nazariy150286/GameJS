const yearButton = document.querySelector(".year__input-btn")
const yearInput = document.querySelector(".year__input")
const yearResult = document.querySelector(".year__result-p")
yearButton.addEventListener("click", () =>{
    if((yearInput.textContent % 4 === 0 && yearInput.textContent % 100 !== 0) || (yearInput.textContent % 400 === 0)){
        yearResult.textContent = "Ви народилися у високосний рік!"
    }
    else{
        yearResult.textContent = "Ви народилися у НЕ високосний рік!"
    }
})