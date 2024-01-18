const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');

headerNav.classList.add('header__nav--none');

headerToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  headerToggle.classList.toggle('header__toggle--close');
  headerNav.classList.toggle('header__nav--none');
});
