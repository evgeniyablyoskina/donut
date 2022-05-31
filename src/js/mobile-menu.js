(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  menuBtnRef.addEventListener('click', () => {
    const expended = menuBtnRef.getAttribute('aria-expended') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expended', !expended);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

const menuLinks = document.querySelectorAll('.site-nav__link');
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    const mobileMenuRef = document.querySelector('[data-menu]');
    if(mobileMenuRef.classList.contains('is-open')){
      mobileMenuRef.classList.remove('is-open');
    }
  });
});