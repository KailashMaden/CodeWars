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
