const modalButton = document.querySelector('[data-modal-button]');

const modalButtonClose = document.querySelector('[data-modal-close]');

const specificModal = document.querySelector('[data-modal]');

//Кнопки открыть модалку
modalButton.addEventListener('click', (e) => {
  const modalId = e.target.dataset.modalButton;

  const findModalElement = document.querySelector('#' + modalId);

  findModalElement.classList.remove('hidden');
});

//Кнопки закрыть модалку
modalButtonClose.addEventListener('click', (e) => {
  e.target.closest('[data-modal]').classList.add('hidden');
});

//  Закрытие модалки по фейду

specificModal.addEventListener('click', (e) => {
  const fadeBlocClick = e.target.classList.contains('fade-block');

  if (fadeBlocClick) {
    e.target.classList.add('hidden');
  } else if (!fadeBlocClick) {
    return;
  }
});
