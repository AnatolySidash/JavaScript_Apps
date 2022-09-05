// get actual date

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// burger

const burger = document.querySelector('.burger');
const linksContainer = document.querySelector('.nav__mobile');
const header = document.querySelector('.header');


burger.addEventListener('click', function () {
   linksContainer.classList.toggle('active');
});

const headerHeight = document.querySelector('.header__block');

window.addEventListener('scroll', function () {

   const scrollHeight = window.scrollY;
   const navHeight = headerHeight.getBoundingClientRect().height;

   if (scrollHeight > navHeight) {
      header.classList.add('header__fixed');
   } else {
      header.classList.remove('header__fixed');
   }
});