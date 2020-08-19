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

