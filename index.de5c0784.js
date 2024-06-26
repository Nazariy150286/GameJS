const yearButton = document.querySelector(".year__input-btn");
const yearInput = document.querySelector(".year__input");
const yearResult = document.querySelector(".year__result-p");
yearButton.addEventListener("click", ()=>{
    if (yearInput.textContent % 4 === 0 && yearInput.textContent % 100 !== 0 || yearInput.textContent % 400 === 0) yearResult.textContent = "\u0412\u0438 \u043D\u0430\u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044F \u0443 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u0440\u0456\u043A!";
    else yearResult.textContent = "\u0412\u0438 \u043D\u0430\u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044F \u0443 \u041D\u0415 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u0440\u0456\u043A!";
});

//# sourceMappingURL=index.de5c0784.js.map
