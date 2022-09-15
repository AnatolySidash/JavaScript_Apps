const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

window.addEventListener('load', function () {
   setTimeout(function () {
      modal.classList.add('active');
   }, 2000);
});

close.addEventListener('click', function () {
   modal.classList.remove('active');
});