/* 
    CIT 281 Project 1
    Name: Devon Acosta
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
  result += alphabet[getRandomInteger(0,alphabet.length)];
}

console.log(result);