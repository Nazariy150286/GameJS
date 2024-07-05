let firstNum = document.getElementById('inputNum1');
let secNum = document.getElementById('inputNum2');
const resultBtn = document.querySelector('.calculator__result-btn');
const result = document.querySelector('.calculator__result');

// let btnOperation = null;
// let firstValue = 0;
// let secondValue = 0;
// let operationResult = null;

const blockBtns = document.querySelectorAll('.calculator__btn');
blockBtns.forEach(button => {
  button.addEventListener('click', () => {
    blockBtns.forEach(btn => btn.classList.remove('calculator__btn--active'));
    button.classList.add('calculator__btn--active');

    btnOperation = button.getAttribute('data-operation');
  });
});

resultBtn.addEventListener('click', () => {
  firstValue = +firstNum.value;
  secondValue = +secNum.value;

  switch (btnOperation) {
    case 'add':
      operationResult = firstValue + secondValue;
      break;
    case 'multiply':
      operationResult = firstValue * secondValue;
      break;
    case 'subtract':
      operationResult = firstValue - secondValue;
      break;
    case 'divide':
      operationResult = firstValue / secondValue;
      break;
    default:
      alert('Виникла помилка!');
      return;
  }
  result.textContent = operationResult;
});
