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