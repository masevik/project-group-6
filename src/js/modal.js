(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    //переменные для About
    openModalAboutBtn: document.querySelector('[data-modal-about-open]'),
    closeModalAboutBtn: document.querySelector('[data-modal-about-close]'),
    modalAbout: document.querySelector('[data-modal-about]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  //переменные для About
  refs.openModalAboutBtn.addEventListener('click', toggleModalAbout);
  refs.closeModalAboutBtn.addEventListener('click', toggleModalAbout);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  //переменные для About
  function toggleModalAbout() {
    refs.modalAbout.classList.toggle('is-open');
    refs.modalAbout.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
