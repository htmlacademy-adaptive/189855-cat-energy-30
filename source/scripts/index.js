const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');
const mapShow = document.querySelector('.contacts__map-show');


headerNav.classList.add('header__nav--none');
headerNav.classList.remove('header__nav--static');

mapShow.classList.remove('contacts__map-show--close');

headerToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  headerToggle.classList.toggle('header__toggle--close');
  headerNav.classList.toggle('header__nav--none');
});
