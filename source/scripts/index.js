const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');

headerNav.classList.add('header__nav--none');
headerNav.classList.remove('header__nav--static');
headerToggle.classList.remove('header__toggle--none');

headerToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  headerToggle.classList.toggle('header__toggle--close');
  headerNav.classList.toggle('header__nav--none');
});
