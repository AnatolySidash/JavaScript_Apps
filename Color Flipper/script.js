const colors = ['green', 'blue', 'rgba(133,122,200)', '#f15025', 'rgba(96,122,22)', 'rgba(111,93,146)', 'rgba(200,196,77)'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function () {
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
}