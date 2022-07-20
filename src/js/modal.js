(() => {
  const refs = {
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

  //переменные для About
  refs.openModalAboutBtn.addEventListener('click', toggleModalAbout);
  refs.closeModalAboutBtn.addEventListener('click', toggleModalAbout);
  //переменные для Buy Now
  refs.openModalBuyNowMenuBtn.addEventListener('click', toggleModalBuyNow);
  refs.openModalBuyNowHeaderBtn.addEventListener('click', toggleModalBuyNow);
  refs.closeModalBuyNowBtn.addEventListener('click', toggleModalBuyNow);

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
