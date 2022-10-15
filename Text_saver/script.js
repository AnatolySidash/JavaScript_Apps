
// Создаем константы
const textarea = document.querySelector('.textarea'); // Константа с блоком для вводимого текста
const fileName = document.querySelector('.name__input'); // Константа с блоком для вводимого названия
const fileType = document.querySelector('.select'); // Константа с блоком для вводимого типа файла
const saveButton = document.querySelector('.button');  // Константа с блоком для кнопки сохранения

// Создаем обработчик события при изменении типа файла
fileType.addEventListener('change', function () {
   // Получаем название выбранного типа файла в строку
   let selectedOption = fileType.options[fileType.selectedIndex].text;
   // Передаем в название кнопки первое слово типа файла
   saveButton.innerText = `Save as ${selectedOption.split(' ')[0]} File`;
});


// Создаем обработчик события по клику
saveButton.addEventListener('click', function (e) {
   e.preventDefault(); // Убираем стандартную отправку данных из формы
   const blob = new Blob([textarea.value], { type: fileType.value }); // Создаем объект Блоб из введенных данных в поле ввода и выбранного типа файла
   const fileUrl = URL.createObjectURL(blob); // Создаем константу в которой создаем URL из объекта Блоб
   const link = document.createElement('a'); // Создаем тег ссылка <a></a>
   link.download = fileName.value; // Указываем название файла для скачивания из поля ввода
   link.href = fileUrl; // Передаем созданный URL в ссылку для скачивания
   link.click(); // Кликаем на ссылку для скачивания файла
});
