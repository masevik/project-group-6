(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalBtn2: document.querySelector('[data-modal-close2]'),
    modal: document.querySelector('[data-modal]'),
    //переменные для About
    openModalAboutBtn: document.querySelector('[data-modal-about-open]'),
    closeModalAboutBtn: document.querySelector('[data-modal-about-close]'),
    modalAbout: document.querySelector('[data-modal-about]'),
    //переменные для Buy Now
    openModalBuyNowMenuBtn: document.querySelector(
      '[data-modal-buynow-menu-open]'
    ),
    openModalBuyNowHeaderBtn: document.querySelector(
      '[data-modal-buynow-header-open]'
    ),
    closeModalBuyNowBtn: document.querySelector('[data-modal-buynow-close]'),
    modalBuyNow: document.querySelector('[data-modal-buynow]'),

    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);
  //переменные для About
  refs.openModalAboutBtn.addEventListener('click', toggleModalAbout);
  refs.closeModalAboutBtn.addEventListener('click', toggleModalAbout);
  //переменные для Buy Now
  refs.openModalBuyNowMenuBtn.addEventListener('click', toggleModalBuyNow);
  refs.openModalBuyNowHeaderBtn.addEventListener('click', toggleModalBuyNow);
  refs.closeModalBuyNowBtn.addEventListener('click', toggleModalBuyNow);

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
  //переменные для Buy Now
  function toggleModalBuyNow() {
    refs.modalBuyNow.classList.toggle('is-open');
    refs.modalBuyNow.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
