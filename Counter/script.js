let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.button');

btns.forEach(function (button) {
   button.addEventListener('click', function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains('decrease')) {
         count--;
      } else if (styles.contains('increase')) {
         count++;
      } else {
         count = 0;
      }
      if (count > 0) {
         value.style.color = 'green';
      }
      if (count < 0) {
         value.style.color = 'red';
      }

      value.textContent = count;
   });
});

