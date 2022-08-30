const buttons = document.querySelectorAll('.tab__item');
const about = document.querySelector('.tab__block');
const articles = document.querySelectorAll('.tab__content');


about.addEventListener('click', function (e) {
   const id = e.target.dataset.id;
   if (id) {
      buttons.forEach(function (btn) {
         btn.classList.remove('active');
         e.target.classList.add('active');
      });
      articles.forEach(function (item) {
         item.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
   }
});
