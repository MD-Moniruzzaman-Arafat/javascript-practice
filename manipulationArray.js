var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);

console.log(myStack.pop());
console.log(myStack);

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
// myQueue.push(4);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue);

var myArray = [1, 2, 3];
myArray.unshift(0);
console.log(myArray);       // will print out 0,1,2,3

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 5);

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 5, 100, 200, 300);

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9