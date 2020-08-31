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