// Функция которая поворачивает число задом наперед
function reverseNumber(num) {
   num = num + ''; // переводим число в строку
   return num.split('').reverse('').join(''); // сплит переводит строку в массив, реверс разворачивает строку задом наперед, джоин переводим массив в строку
}

console.log(reverseNumber(12345));


// Функция которая проверяет паллиндром

function checkPallindrom(string) {
   // переводим строку в нижний регистр и удаляем спецсимволы и пробелы
   let result = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
   let count = 0;
   // проверяем пуста строка или нет
   if (result === '') {
      console.log('Ничего не найдено..., введите слово!');
      return false;
   }
   // проверяем чётное или нечётное количество символов в строке
   if (result.length % 2 === 0) {
      count = (result.length) / 2;
      // проверяем если строка состоит из одного символа, то она уже паллиндром
   } else if (result.length === 1) {
      console.log('Это паллиндром! Поздравляю Вас!');
      return true;
   } else {
      count = (result.length - 1) / 2;
   }
   for (let i = 0; i < count; i++) {
      if (result[i] !== result.slice(-1 - i)[0]) {
         console.log('Это НЕ паллиндром! Продолжайте поиск...');
         return false;
      }
   }
   console.log('Это паллиндром! Поздравляю Вас!');
   return true;
}

checkPallindrom('World');


// Функция которая преобразует строку в массив слов
let string = 'Каждый охотник желает знать где сидит фазан';

function makeArrayFromString(string) {
   return string.trim().split(' '); // трим удаляет пробелы вначале и в конце строки, сплит переводит строку в массив (в круглых скобках должен быть пробел в кавычках)
}

let array = makeArrayFromString(string);

console.log(array);


// Функция которая преобразует строку в список букв в алфавитном порядке

let string = 'Moscow is the capital of Russia';

function makeAlphabet(string) {
   return string.toLowerCase().split('').sort().join(''); // сплит переводит строку в массив отдельных символов, sort сортирует символы по алфавиту, джоин переводим массив символов в строку (в круглых скобках НЕ должно быть пробела в кавычках)
}

let alphabet = makeAlphabet(string);

console.log(alphabet);

