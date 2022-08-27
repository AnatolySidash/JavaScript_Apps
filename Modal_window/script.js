const buttonOne = document.getElementById('open_1');
const buttonTwo = document.getElementById('open_2');
const buttonThree = document.getElementById('open_3');

const windowOne = document.getElementById('window_1');
const windowTwo = document.getElementById('window_2');
const windowThree = document.getElementById('window_3');

const closeOne = document.getElementById('close_1');
const closeTwo = document.getElementById('close_2');
const closeThree = document.getElementById('close_3');



buttonOne.addEventListener('click', function () {
   windowOne.classList.add('active');
});

buttonTwo.addEventListener('click', function () {
   windowTwo.classList.add('active');
});

buttonThree.addEventListener('click', function () {
   windowThree.classList.add('active');
});

closeOne.addEventListener('click', function () {
   windowOne.classList.remove('active');
});

closeTwo.addEventListener('click', function () {
   windowTwo.classList.remove('active');
});

closeThree.addEventListener('click', function () {
   windowThree.classList.remove('active');
});