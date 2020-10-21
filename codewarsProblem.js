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

