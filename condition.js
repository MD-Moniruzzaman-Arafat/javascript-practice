console.log("1" == 1); // true
console.log("1" === 1); // false

var myNumber = 42;
if (myNumber == 42) {
    console.log("The number is correct.");
}

var foo = 1;
var bar = 2;

if (foo < bar) {
    console.log("foo is smaller than bar.");
}

var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar) {
    console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo > bar) {
    console.log("foo is smaller than bar OR moo is larger than bar.");
}

var notTrue = false;
if (!notTrue) {
    console.log("not not true is true!");
}

var rank = "Commander";
switch (rank) {
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}