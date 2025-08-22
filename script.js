let message = 'Hello';
console.log(message);

const myBirthday = '01-02-1994';
console.log(myBirthday)

let s = "my" + "string";
console.log(s);

console.log(1+'2');
console.log('1'+2);
console.log(2+2+'1')
console.log('1'+2+2)
console.log(6-'2');
console.log('6'/'2');
console.log('3'+2-1);

let j = 1;
console.log(+j)
let p = -2;
console.log(+p);
console.log(+"12");
console.log(+"");

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges);
console.log(Number(apples) + Number(oranges));

let counter = 2;
counter++;
console.log(counter);
let front = 3;
front--;
console.log(front);

let $ = 1;
let a2 = ++$;
console.log(a2)

let _ = 0;
_++;
++_;
console.log(_);
console.log(++_);
console.log(_++)

let u = 4;
console.log(u++);
console.log(u);

let b2 = 5;
console.log(2 * ++b2);

let c2 = 6;
console.log(2 * c2++);

let greeting5 = "Helllo World";
let greeting2 = 'I am learning JavaScript!';
let greeting3 =`with Per Scholas!`;
console.log(greeting5);



let sum = 5 + 3;
console.log(sum);

let greeting = "Hello, Team! ";
console.log(greeting)
const trimmedstring = greeting.trim();
console.log(trimmedstring)

let sentence = "freeCodeCamp loves The Odin Project!";
let index = sentence.search(/love/);
console.log(index);

let sentence1 = "freeCodeCamp loves The Odin Project! Th Odin Project is great!";
let index1 = sentence.lastIndexOf(/The/);
console.log(index1)

let myString = "We are in the building!";
console.log(myString.toLocaleUpperCase())

let name = "Sean";
let age = 31;
let greeting4 = `Hello, my name is ${name} and I am ${age} years old`;
console.log(greeting4)

let q = 5;
let w= "56";
let results = q !== w;
console.log(results);

let e = 5;
if (e > 3) {
    console.log("x is greater than 3");
} else {
    console.log("x is less than or equal to 3");
}
let x = 5;
 
if (x > 10) {
  console.log("Red");
} else if (x > 5) {
  console.log("Blue");
} else {
  console.log("Green");
}

let a = 5;
let b = 10;
 
let day = "Tuesday";
let activity;
 
switch (day) {
  case "Monday":
    activity = "Go to the gym";
    console.log(activity)
    break;
  case "Tuesday":
    activity = "Attend coding meetup";
    console.log(activity)
    break;
  case "Wednesday":
    activity = "Watch a movie";
    console.log(activity)
    break;
  case "Thursday":
    activity = "Visit a museum";
    console.log(activity)
    break;
  case "Friday":
    activity = "Dinner with friends";
    console.log(activity)
    break;
  case "Saturday":
    activity = "Hiking in the mountains";
    console.log(activity)
    break;
  case "Sunday":
    activity = "Rest at home";
    console.log(activity)
    break;
  default:
    activity = "Undefined day";
    console.log(activity)
}

let condition = true;
let result = condition ? "option 1" : "option 2";
console.log(result);

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}
 console.log(favoriteAnimal('Goat'));

 
 
function myFunction() {
  let k = 20;
  console.log(k);
}
 
myFunction();

function add(a, b = 12) {
  if(b > 11){
    return b * 2;
  } else if(a > 3){
    return b;
  }
 
  return a + b;
}
 
console.log(add(3));

function addOrSubtract(integer) {
    if (integer < 10) {
        return integer + 7;
    } else if (integer === 10) {
        return integer - 3;
    }
}
console.log(addOrSubtract(2));

const multiply = (a, b) => a + b;
console.log(multiply);

