const refs = {
  openModalBtn: document.querySelector('#openModalBtn'),
  closeModalBtn: document.querySelector('.footer-modal__close'),
  modal: document.querySelector('.footer-modal'),
  input: document.querySelector('.footer__input'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden-subscribe');
}

function handleOpenModal(e) {
  e.preventDefault();
  if(refs.input.value === '') {
    alert('Заповніть дані!');
  } else if(refs.input.value.includes('@') && refs.input.value.includes('.') && refs.input.value.length > 5 && refs.input.value.length < 20) {
    toggleModal();
  } else {
    alert('Введіть коректні дані!');
  }
}

refs.openModalBtn.addEventListener('click', handleOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);