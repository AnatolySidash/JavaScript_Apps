const menuBlock = document.querySelector('.menu');

document.addEventListener('click', openMenu);

function openMenu(event) {
   if (event.target.closest('.button')) {
      menuBlock.classList.toggle('active');
   }
   if (!event.target.closest('.menu')) {
      menuBlock.classList.remove('active');
   }
}

document.addEventListener('keydown', function (event) {
   if (event.code === 'Escape') {
      menuBlock.classList.remove('active');
   }
});