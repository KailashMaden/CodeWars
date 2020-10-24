//Problem 1
// Input: songDecoder('WUBWEWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIEND')
// Output: WE ARE THE CHAMPIONS MY FRIEND

// Solution:
const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim();

const result = songDecoder('WUBWEWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIEND');
console.log(result);

// Problem 2
// Input: When an array is passed like [19, 5, 42, 2, 77]
// Output: should be 5+2 = 7

const sumTwoSmallestNumbers = (numbers) => {
  const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
};

const numbers = [19, 5, 42, 2, 77];
console.log(sumTwoSmallestNumbers(numbers));

// Problem 3
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

// Problem 4
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

// Problem 4 (Optional Solution in short)

const letterCount = (words) => (words.match(/[aeiou]/gi) || []).length;
console.log(letterCount('abracadabra'));

// Problem 5
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
