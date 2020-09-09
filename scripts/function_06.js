/*
function Car() {}
Car.prototype.wheels = 4;

function SportsCar() {}
SportsCar.prototype = new Car();
SportsCar.prototype.doors = 2;

var sportsCar = new SportsCar();
console.log(sportsCar.doors);        // 2
console.log(sportsCar.wheels);       // 4
console.log(sportsCar.constructor);  // [Function: Car]

*/

/*
function Car() {
    Car.prototype.wheels = 4;
}

function SportsCar() {
    SportsCar.prototype = new Car();
    SportsCar.prototype.doors = 2;
}

var sportsCar = new SportsCar();
console.log(sportsCar.doors);    // undefined
console.log(sportsCar.wheels);   // undefined

*/

/*
function Car() {}
function SportsCar() {}
SportsCar.prototype = new Car();

var sportsCar = new SportsCar();
console.log(sportsCar instanceof SportsCar);  // true
console.log(sportsCar instanceof Car);        // true
console.log(sportsCar instanceof Object);     // true

*/
/*
var arrayLike = Object.create(Array.prototype, {
    '0'    : {value : 10},
    '1'    : {value : 20},
    '2'    : {value : 30},
    length : {value : 3}
});

console.log(arrayLike instanceof Array);  // true


console.log(Array.prototype.isPrototypeOf([]));              // true
console.log(Function.prototype.isPrototypeOf(Array));         // true
console.log(Object.prototype.isPrototypeOf(Array.prototype)); // true
*/

/*
var o = {x : 10};
console.log(o.hasOwnProperty('x'));        // true
console.log(o.hasOwnProperty('toString')); // false
console.log(o.hasOwnProperty('xyz')); // false


console.log(Object.keys({x : 10, y : 20}).join(', ')); // x, y

*/

var obj = {};

Object.defineProperties(obj, {
    'name': {
         value      : 'John',
         enumerable : true
     },
     'age': {
         value      : 39,
         enumerable : false
     },
});

console.log(Object.keys(obj).join(', '));                // name
console.log(Object.getOwnPropertyNames(obj).join(', ')); // name, age


