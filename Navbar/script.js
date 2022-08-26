const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const close = document.getElementById('close');

if (burger) {
   burger.addEventListener('click', function () {
      nav.classList.add('active');
   });
}

if (close) {
   close.addEventListener('click', function () {
      nav.classList.remove('active');
   });
}