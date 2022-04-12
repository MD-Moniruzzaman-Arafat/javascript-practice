// const greet = (name) => { return "Hello " + name + "!"; }

// console.log(greet("Eric"));      // prints out Hello Eric!

// const greet = name => { return "Hello " + name + "!"; }

// console.log(greet("Eric"));      // prints out Hello Eric!

// const greet = name => "Hello " + name + "!";

// console.log(greet("Eric"));      // prints out Hello Eric!

let numbers = [3, 5, 8, 9, 2];

// Old way
function multiplyByTwo1(number) {
    return number * 2;
}

let multipliedNumbers1 = numbers.map(multiplyByTwo1);

console.log(multipliedNumbers1);              // prints out: 6, 10, 16, 18, 4

// Using ES6 arrow functions
const multiplyByTwo = number => number * 2;

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers);              // prints out: 6, 10, 16, 18, 4