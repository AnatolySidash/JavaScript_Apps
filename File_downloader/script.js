
// Создаём константы
const input = document.querySelector('.input'); // Константа с полем ввода
const button = document.querySelector('.button'); // Константа с кнопкой


// Создаем обработчик события клика на кнопку
button.addEventListener('click', function (e) {
   e.preventDefault(); // Убираем стандартную функцию отправки формы
   button.innerText = "Downloading File...";
   fetchFile(input.value); // Помещаем веденное в поле ввода значение в функцию
});

function fetchFile(url) {
   // Получаем файл и выводим в виде объекта блоб
   fetch(url).then(res => res.blob()).then(file => {
      // Создаем URL и помещаем в переменную
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement('a'); // Создаем ссылку посредствам тега "а"
      aTag.href = tempUrl; // Передаём созданный URL в ссылку
      aTag.download = url.replace(/^.*[\\\/]/, ''); // Создаём атрибут download с именем оригинального файлы, чтобы у скачанного файлы было оригинальное название
      document.body.appendChild(aTag); // Добавляем созданную ссылку в HTML документ
      aTag.click(); // Добавляем фукнцию скачать на ссылку
      aTag.remove(); // Удаляем ссылку после скачивания
      URL.revokeObjectURL(tempUrl); // Удаляем URL из HTML документа
      button.innerText = "Download File";
      // Вызываем алёрт если при загрузке появятся проблемы
   }).catch(() => {
      button.innerText = "Download File";
      alert('Failed to download file!');
   });
}