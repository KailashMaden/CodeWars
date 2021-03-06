//------------------------------------------------Problem 1
// Input: songDecoder('WUBWEWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIEND')
// Output: WE ARE THE CHAMPIONS MY FRIEND

// Solution:
const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim();

const result = songDecoder('WUBWEWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIEND');
console.log(result);

// ----------------------------------------------Problem 2
// Input: When an array is passed like [19, 5, 42, 2, 77]
// Output: should be 5+2 = 7

const sumTwoSmallestNumbers = (numbers) => {
  const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
};

const numbers = [19, 5, 42, 2, 77];
console.log(sumTwoSmallestNumbers(numbers));

// --------------------------------------------Problem 3
// Input: String - "The sunset sets at twelve o' clock"
// Output: Should return - "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// ------------------------------------------Problem 4
// Input: Vowel count: example: abracadabra
// Output: 5

const getCount = (str) => {
  const vowelCount = str.split('').reduce((acc, letter) => {
    if (letter.match(/[aeiou]/g)) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return vowelCount;
};

console.log(getCount('abracadabra'));

// ----------------------------------------Problem 4 (Optional Solution in short)

const letterCount = (words) => (words.match(/[aeiou]/gi) || []).length;
console.log(letterCount('abracadabra'));

// ----------------------------------------Problem 5
// INPUT iqTest("2 4 7 8 10") => OUTPUT 3 Third number is odd, while the rest of the numbers are even
// INPUT iqTest("1 2 1 1") => OUTPUT 2 Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
  numbers = numbers.split(' ').map(function (el) {
    return parseInt(el);
  });

  var odd = numbers.filter(function (el) {
    return el % 2 === 1;
  });
  var even = numbers.filter(function (el) {
    return el % 2 === 0;
  });

  console.log(numbers.indexOf(odd[0]));
  console.log(numbers.indexOf(even[0]));

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}

iqTest('2 4 7 8 10');
// console.log(iqTest('2 4 7 8 10'));

//--------------------------------------- Problem 6

// Input: persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit
//  persistence(999) === 4,  because 9*9*9 = 729, 7*2*9 = 126,
//   1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0,  because 4 is already a one-digit number

function persistence(num) {
  var num = num.toString();
  var inArr = num.split('');
  result = 1;
  if (inArr.length == 1) {
    return 0;
  } else {
    for (var i = 0; i < inArr.length; i++) {
      result = result * num[i];
    }
    return 1 + persistence(result);
  }
}

//--------------------------------------- Problem 7

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

// Option solution
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }

//------------------------------------- Problem 8

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Example: a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

// Optional solution
// function longest(s1, s2) {
//   var answer = [s1, s2].join("").split("").sort();
//   return Array.from( new Set(answer)).join("");
// }
// function longest(s1, s2) {
//   return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
// }

//-------------------------------------- Problem 9
// Delete occurrences of an element if it occurs more than n times
// Input function: deleteNth ([1,1,1,1],2)  //Output: return [1,1]
// Input function: deleteNth ([20,37,20,21],1) //Output: return [20,37,21]

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

//------------------------------------ Problem 10
// Build a pile of Cubes
// Input function: findNb(1071225) Output--> 45
// Input function: findNb(91716553919377) Output--> -1

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

// Optional better solution:
// function findNb(m) {
//   var n = 0;
//   while (m > 0) m -= ++n**3;
//   return m ? -1 : n;
// }

//--------------------------------- Problem 11
// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// Optional solution:
// function solution(number){
//   var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
//   return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
// }
