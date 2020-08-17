
/*
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(max(10, 20));  // 20

*/

/*
function func(a, b) {
    console.log(a);
    console.log(b);
}

func(10, 20);         // 10 20
func(10);             // 10 undefined
func();               // undefined undefined
func(10, 20, 30, 40); // 10 20

*/

/*
function sum() {
    var sum = 0;    
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
}

//console.log(sum(1, 2));;      // 3

console.log(sum(5, 6, 7));    // 6
//console.log(sum(1, 2, 3, 4)); // 10
*/

/*
function func(a, b) {
    console.log(a + ': ' + arguments[0]);  // 10: 10
    console.log(b + ': ' + arguments[1]);  // 20: 20
    a = 0;
    b = 0;
    console.log(a + ': ' + arguments[0]);  // 0: 0
    console.log(b + ': ' + arguments[1]);  // 0: 0
    arguments[0] = 100;
    arguments[1] = 200;
    console.log(a + ': ' + arguments[0]);  // 100: 100
    console.log(b + ': ' + arguments[1]);  // 200: 200
}

func(10, 20);
*/

/*
function plus(a, b) {
    if(arguments.length != 2) {
        throw new Error('必須有兩個引數');
    }
    return a + b;
}

console.log(plus(10, 20)); // 30
console.log(plus(10));     // Error: 必須有兩個引數

*/

/*
function rangeClosed(startInclusive, endInclusive, step) {
    var s = step || 1;
    var numbers = [startInclusive];
    for(var i = 0; numbers[i] < endInclusive; i++) {
        numbers.push(numbers[i] + s);
    }
    return numbers;
}

rangeClosed(0, 10, 2).forEach(function(elem) { // 1 3 5
    console.log(elem);
});


rangeClosed(1, 5).forEach(function(elem) {    // 1 2 3 4 5
    console.log(elem);
});
*/


function func(option) {
    var opt = {
        x : option.x || 10,
        y : option.y || 20,
        z : option.z || 30
    };
    console.log(opt.x);
    console.log(opt.y);
    console.log(opt.z);
}

func({x : 100}); // 100 20 30

func({           // 100 200 30
    x : 100, 
    y : 200 
});

func({           // 100 200 300
    x : 100, 
    y : 200, 
    z : 300
});