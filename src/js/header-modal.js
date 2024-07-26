const modalInput = document.querySelector('.header-modal__input');

const btnSave = document.querySelector('.header-modal__btn');
const btnClose = document.querySelector('.header-modal__close');
const modal = document.querySelector('.header-modal');
const userContentHeader = document.querySelector('.header__greeting');


btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});


btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    if(modalInput.value === '' && modalInput.value.length < 10) {
        alert('Заповніть дані!');
        return
    }
    userContentHeader.textContent = `Вітаємо, ${modalInput.value}!`;
    modalInput.value = '';
    modal.classList.add('is-hidden-subscribe')
})