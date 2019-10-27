var menuButton = document.querySelector('.menu-button');
var searchButton = document.querySelector('.search-form__button-icon');
var search = document.querySelector('.main-header__user-item--search-form');
var searchInput = document.querySelector('.search-form__area');
var categoriesList = document.querySelector('.main-nav__categories-list');

menuButton.addEventListener('click', function(evt){
	evt.preventDefault();	
    if(menuButton.classList.contains('menu-button--open')){
      menuButton.classList.remove('menu-button--open');
      menuButton.classList.add('menu-button--close');
      categoriesList.classList.add('main-nav__categories-list--open');
    } else {
      menuButton.classList.remove('menu-button--close');
      menuButton.classList.add('menu-button--open');
      categoriesList.classList.remove('main-nav__categories-list--open'); 
    }
});

searchButton.addEventListener('click', function(evt){
	evt.preventDefault();
	if(search.classList.contains('main-header__user-item--search-form-open')){
      search.classList.remove('main-header__user-item--search-form-open');
    } else {
      search.classList.add('main-header__user-item--search-form-open');
      searchInput.focus();
    }
});