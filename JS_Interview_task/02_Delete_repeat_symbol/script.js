//  1st Variant

function removeDupes(str) {
   const list = [];
   const map = {};

   for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (!map[char]) {
         map[char] = true;
         list.push(char);
      }
   }
   return list.join('');
}


console.log(removeDupes('abcabdcsrd')) // -> 'abcdsr'
console.log(removeDupes('atabbcmbcdd')) // -> 'atbcmd'
console.log(removeDupes('abcdduvxbca')) // -> 'abcduvx'
console.log(removeDupes('abawqkbabcdcdcd')) // -> 'abwqkcd'


//  2nd Variant

function removeDupes(str) {

   return Array.from(new Set(str)).join('');
}


console.log(removeDupes('abcabdcsrd')) // -> 'abcdsr'
console.log(removeDupes('atabbcmbcdd')) // -> 'atbcmd'
console.log(removeDupes('abcdduvxbca')) // -> 'abcduvx'
console.log(removeDupes('abawqkbabcdcdcd')) // -> 'abwqkcd'