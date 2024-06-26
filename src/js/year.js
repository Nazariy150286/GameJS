
const yearButton = document.querySelector(".year__input-btn")
const yearInput = document.querySelector(".year__input")
const yearResult = document.querySelector(".year__result-p")
yearButton.addEventListener("click", () =>{
    if((yearInput.value % 4 === 0 && yearInput.value % 100 !== 0) || (yearInput.value % 400 === 0) || (yearInput.value == !isNaN)){
        yearResult.textContent = "Ви народилися у високосний рік!"
        yearResult.style.opacity = 100
        yearResult.style.color = "#039900"
    }
    // else if(yearInput.value == isNaN){
    //     yearResult.textContent = "Ваші данні не валідні!"
    //     yearResult.style.opacity = 100
    //     yearResult.style.color = "red"
    // }
    else{
        yearResult.textContent = "Ви народилися у НЕ високосний рік!"
        yearResult.style.opacity = 100
        yearResult.style.color = "red"
    }
})