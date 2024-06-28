const yearButton = document.querySelector(".year__input-btn")
const yearInput = document.querySelector(".year__input")
const yearResult = document.querySelector(".year__result-p")
yearButton.addEventListener("click", () =>{
    if((yearInput.textContent % 4 === 0 && yearInput.textContent % 100 !== 0) || (yearInput.textContent % 400 === 0)){
        yearResult.textContent = "Ви народилися у високосний рік!"
    }
<<<<<<< HEAD
    else{
        yearResult.textContent = "Ви народилися у НЕ високосний рік!"
=======
    else if(yearInput.value < 1900){
        yearResult.textContent = "Веддіть коректний рік!"
        yearResult.style.opacity = 100
        yearResult.style.color = "red"
>>>>>>> 29bb3b5d4be7eb1683dc5e7ab646b5d43170f9e5
    }
   else {
    yearResult.textContent = "Ви народилися у НЕ високосний рік!"
    yearResult.style.opacity = 100
    yearResult.style.color = "red"
     }

})