//Problem 1
// Input: songDecoder('WUBWEWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIEND')
// Output: WE ARE THE CHAMPIONS MY FRIEND

// Solution:
const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim();

const result = songDecoder('WUBWEWUBWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIEND');
console.log(result);
