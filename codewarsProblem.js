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
