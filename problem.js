// inch to feet
/* function inchToFeet(inch) {
    return inch / 12;
}
var result = inchToFeet(10);
console.log(result) */

// mile to kilometer
/* function mileToMeter(mile) {
    return mile * 1.60934;
}

var result1 = mileToMeter(2);
console.log(result1) */

// leap year
/* function leapYear(year) {
    if (year % 400 == 0 || year % 4 == 0) {
        console.log('is leap year')
    } else if (year % 100 == 0) {
        console.log('is not a leap year')
    } else {
        console.log('is not a leap year')

    }
}

leapYear(2024) */

// factorial number
/* function factorial(n) {
    var total = 1;
    for (var i = 1; i < n; i++) {
        total *= i;
    }
    return total;
}

var result = factorial(5);
console.log(result) */

/* function factorial(n) {
    var factorial = 1;
    var i = 1
    while (i < n) {
        factorial *= i;
        i++
    }
    return factorial;
}

var result = factorial(6);
console.log(result); */

/* function factorial(n) {
    var factorial = 1;
    var i = n
    while (i > 1) {
        factorial *= i;
        i--
    }
    return factorial;
}

var result = factorial(6);
console.log(result); */


// swap
/* var a = 1;
var b = 2;
console.log(a, b)
var temp = a;
var a = b;
var b = temp;
console.log(a, b); */

// destruction
/* var a = 1;
var b = 2;
console.log(a, b);
[a, b] = [b, a]
console.log(a, b); */

// sum
/* var arr = [1, 4, 5, 6, 8, 7];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum) */

// find the large number
/* var arr = [1, 4, 5, 6, , 100, 8, 7];
var large = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
        large = arr[i]
    }
}
console.log(large) */

// fibonacci

/* function fibonacci(n) {
    var a = [0, 1]
    for (var i = 2; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2];

    }
    console.log(a)
}
fibonacci(10) */

// max number

/* function max(n) {
    var max = n[0]
    for (var i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
    }
    console.log(max)
}
max([1, 5, 8, 9, 7, 6]); */

// min number

/* function min(n) {
    var min = n[0]
    for (var i = 0; i < n.length; i++) {
        if (n[i] < min) {
            min = n[i];
        }
    }
    console.log(min)
}
min([1, 5, 8, 9, 7, 6]); */

// remove duplicate element

var arr = [1, 5, 8, 7, 9, 6, 3, 6, 8, 5]

function duplicate(n) {
    var uniq = [];
    for (var i = 0; i < n.length; i++) {
        var element = n[i];
        console.log(element)
        if (uniq.indexOf(element) == -1) {
            uniq.push(element);
        }
    }
    console.log(uniq)
}
duplicate(arr)