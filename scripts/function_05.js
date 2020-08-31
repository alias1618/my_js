/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
};

var p1 = new Person('Justin', 35);
var p2 = new Person('Momor', 32);

console.log(p1.toString());   // [Justin, 35]
console.log(p2.toString());   // [Momor, 32]
*/

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
};

var p = new Person('Justin', 35);

console.log(Person.prototype === Object.getPrototypeOf(p));   // true

*/

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
};

var p = {};
p.__proto__ = Person.prototype;
Person.call(p, 'Justin', 35);

console.log(p.toString());         // [Justin,35]
console.log(p instanceof Person);  // true

*/

/*
function Some() {}
Some.prototype.data = 10;

var s = new Some();
console.log(s.data);                 // 10

s.data = 20;
console.log(s.data);                 // 20
console.log(Some.prototype.data);    // 10
*/

/*
function Some() {}

var s = new Some();
console.log(s.data);       // undefined

Some.prototype.data = 10;
console.log(s.data);       // 10
*/


/*
function Some() {}
console.log(Some.prototype.constructor);  // [Function: Some]
*/

/*
Object.prototype.xyz = 10;

function Some() {}

var s = new Some();
console.log(s.xyz); // 10

console.log(Object.getPrototypeOf(s) === Some.prototype);          // true

var protoOfS = Object.getPrototypeOf(s);
console.log(Object.getPrototypeOf(protoOfS) === Object.prototype); // true
*/

/*
var arr = [];
console.log(Array.prototype.isPrototypeOf(arr));              // true
console.log(Function.prototype.isPrototypeOf(Array));         // true
console.log(Object.prototype.isPrototypeOf(Array.prototype)); // true

*/


/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
};

var p = Object.create(Person.prototype);
Person.call(p, 'Justin', 35);

console.log(p.toString());         // [Justin,35]
console.log(p instanceof Person);  // true

*/
