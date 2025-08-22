function addOrSubtract(integer) {
    if (integer < 10) {
        return integer + 7;
    } else if (integer <= 10) {
        return integer - 3;
    }
}
console.log(addOrSubtract(10));

const multiply = (a, b) => a + b;
console.log(multiply(3, 7));


const capitalize =  'hello';
const recap = capitalize.replace('hello', 'Hello');
console.log(capitalize);
console.log(recap);

const lastLetter = 'down';
const newlastLetter = lastLetter.lastIndexOf(/down/)
console.log(newlastLetter);

const characters = ['Bob', 'Pat', 'Ward'];
characters.splice(1, 1);
console.log(characters); // Output: ['Bob', 'Ward']

const newCharacters = characters.slice(1, 2);
console.log(newCharacters); // Output: ['Pat']

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const array = [1, 2, 3, 4, 5];
 
const newArray = array.map((arrayValue) => {
  return arrayValue * 2;
});
 
console.log(newArray); // Output: [2, 4, 6, 8, 10]

// When the user inputs a number
// Initialize a counter variable and set its value to zero
// While counter is smaller than user inputted number increment the counter by one
// Print the value of the counter variable

function printNumbers(userInput) {
  let counter = 0;
  while (counter < userInput) {
    console.log(counter++);
  }
}

// let r = "rock";
// let p ="paper";
// let s ="scissors";

// const getComputerChoice = Math.random(r, p, s);
// console.log(getComputerChoice);

// function getComputerChoice(sum); {
//   return Math.random = ["rock", "paper", "scissors"]
// }
// console.log(getComputerChoice);

const choices = ["rock", "paper", "scissors"];
// const getComputerChoice = Math.random(choices);
const getComputerChoice = choices.random("rock", "paper", "scissors");
console.log(getComputerChoice);
const getHumanChoice = prompt(choices);

