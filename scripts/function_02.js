
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


var printIt = function(elem) {
    console.log(elem);
};

[1, 2, 3].forEach(printIt); // 1 2 3

var naturalOrder = function(num1, num2) {
    return num1 - num2;
};

[5, 1, 7, 3, 2].sort(naturalOrder)  // 1 2 3 5 7
               .forEach(printIt);


               