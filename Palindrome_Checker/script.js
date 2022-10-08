// Константы
const textInput = document.querySelector('.input');
const checkButton = document.querySelector('.button');
const info = document.querySelector('.info');

// Создаем переменную для введённого текста
let filterInput;

// Добавляем обработчик события клика на кнопку
checkButton.addEventListener('click', function () {
   // Создаем переменную в которой введенный тект переводим в массив, 
   // меняем последовательность символов на обратную в массиве, 
   // переводим массив в строку без разделителя
   let reverseInput = filterInput.split('').reverse().join('');
   info.style.display = 'block';
   // Сравниваем введенный текст и текстом в обратном порядке
   // Если они не равны, то выводим текст "Это не палиндром"
   if (filterInput != reverseInput) {
      return info.innerHTML = `No, <span>'${textInput.value}'</span> is NOT a palindrome!`;
      // Если они равны, то выводим текст "Это палиндром"
   } else {
      info.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;;
   }
});

// Добавляем обработчик события ввода символа в поле ввода
textInput.addEventListener('keyup', function () {
   // Убираем спец символы и пробелы из ввода 
   filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, '');
   // Активируем кнопку при условии наличия символов в поле ввода
   if (filterInput) {
      checkButton.classList.add('active');
      // Деактивирем кнопку при удалении символов
   } else {
      info.style.display = 'none';
      checkButton.classList.remove('active');
   }
});