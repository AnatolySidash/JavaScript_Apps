
// Создаем константы
const wrapper = document.querySelector('.wrapper'); // Константа главного окна генератора
const input = wrapper.querySelector('.input'); // Константа поля ввода
const button = wrapper.querySelector('.button'); // Константа кнопки
const code = wrapper.querySelector('.qr__code img'); // Константа изображения QR кода

// Создаем обработчик события по клику на кнопку
button.addEventListener('click', function () {
   let qrValue = input.value; // Создаем переменную для хранения введённых символов
   if (!qrValue) return; // Создаем условие при котором функция прекращает действие при отсутствии символов в поле ввода
   button.innerText = "Generating QR Code..."; // Вешаем название на кнопку
   code.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`; // Указываем путь к QR коду через АПИ
   // Создаем обработчик события при загрузке QR кода
   code.addEventListener('load', function () {
      wrapper.classList.add('active'); // Вешаем класс Active на главное окно генератора
      button.innerText = "Generate QR Code"; // Вешаем название на кнопку
   });
});

// Скрываем QR код при очистке поля ввода
input.addEventListener('keyup', function () {
   if (!input.value) {
      wrapper.classList.remove('active');
   }
});


