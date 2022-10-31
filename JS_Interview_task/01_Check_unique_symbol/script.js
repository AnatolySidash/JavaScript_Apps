// 1st Variant

function isUnique(string) {
   for (let i = 0; i < string.length; i++) {
      const currentSymbol = string[i];

      if (string.lastIndexOf(currentSymbol) !== i) {
         return false;
      }
   }
   return true;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false


// 2nd Variant

function isUnique(string) {

   const set = new Set();

   for (let i = 0; i < string.length; i++) {
      const currentSymbol = string[i];

      if (set.has(currentSymbol)) {
         return false;
      }

      set.add(currentSymbol);
   }

   return true;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false


// 3rd Variant

function isUnique(string) {

   return new Set(string).size === string.length;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false
