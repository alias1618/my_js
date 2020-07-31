
/*
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

var maximum = max;

console.log(max(10, 20));      // 20
console.log(maximum(10, 20));  // 20

*/

/*
var max = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

var maximum = max;

console.log(max(10, 20));      // 20
console.log(maximum(10, 20));  // 20
*/

/*
var number = 10;        // Number literal
var obj = {x : 10};     // Object literal
var array = [1, 2, 3];  // Array literal
var func = function() { // Function literal
    // do something...
};


*/

/*
var max = new Function('num1', 'num2', 
    'return num1 > num2 ? num1 : num2'
);

var maximum = max;

console.log(max(10, 20));      // 20
console.log(maximum(10, 20));  // 20

*/

/*
var printIt = function(elem) {
    console.log(elem);
};

[1, 2, 3].forEach(printIt); // 1 2 3

var naturalOrder = function(num1, num2) {
    return num1 - num2;
};

[5, 1, 7, 3, 2].sort(naturalOrder)  // 1 2 3 5 7
               .forEach(printIt);

*/

/*
var numbers = [5, 1, 7, 3, 2];
numbers.sort(function(num1, num2) { // 1 2 3 5 7
           return num1 - num2;
       })
       .forEach(function(elem) {
            console.log(elem);
       });

       
*/

/*
var maximum = function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

console.log(maximum(10, 20));  // 20
console.log(max(10, 20));      // ReferenceError: max is not defined

*/

/*
var gcd = function g(num1, num2) {
    return num2 != 0 ? g(num2, num1 % num2) : num1;
};

console.log(gcd(10, 5));  // 5

*/

/*
var gcd = function(num1, num2) {
    return num2 != 0 ? arguments.callee(num2, num1 % num2) : num1;
};

console.log(gcd(10, 5)); // 5
*/

/*
'use strict'

var gcd = function(num1, num2) {
    return num2 != 0 ? arguments.callee(num2, num1 % num2) : num1;
};

console.log(gcd(10, 5)); // TypeError
*/


/*
var gcd = function g(num1, num2) {
    return num2 != 0 ? g(num2, num1 % num2) : num1;
};

console.log(gcd.length); // 2

*/

/*

func();
function func() {
    console.log('func');
}

*/

/*
func(); // TypeError: undefined is not a function
var func = function() {
    console.log('func');
};
*/


var max = new Function('num1', 'num2', 
    'return num1 > num2 ? num1 : num2'
);