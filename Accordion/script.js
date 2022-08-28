// 1st Solution

// const buttons = document.querySelectorAll('.button');

// buttons.forEach(function (btn) {
//    btn.addEventListener('click', function (e) {
//       let question = e.currentTarget.parentElement;
//       question.classList.toggle('show__text');
//    });
// });


// 2nd Solution

const questions = document.querySelectorAll('.block');

questions.forEach(function (question) {
   const btn = question.querySelector('.button');
   btn.addEventListener('click', function () {
      questions.forEach(function (item) {
         if (item !== question) {
            item.classList.remove('show__text');
         }
      });

      question.classList.toggle('show__text');
   });
});
