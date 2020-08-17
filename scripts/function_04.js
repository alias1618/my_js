
/*
function doSome() {
    var x = 10;
    function f(y) {
        return x + y;
    }
    return f;
}

var foo = doSome();
console.log(foo(20));  // 30
console.log(foo(30));  // 40

*/

/*
function doSome() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}

var foo = doSome();
console.log(foo(20));  // 30
console.log(foo(50));  // 60
*/

/*
var sum = 0;
[1, 2, 3, 4, 5].forEach(function(elem) {
    sum += elem;
});
console.log(sum); // 15
*/


/*
function doSome() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}

var foo1 = doSome();
var foo2 = doSome();
console.log(foo1(20));  // 30
console.log(foo2(20));  // 30

*/


//scope chain

/*
var x = 10;
function outer() {
    var y = 20;
    function inner() {
        var z = 30;
    }
}
func(); 

*/


/*
function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

var p1 = {
    name     : 'Justin', 
    age      : 35,
    toString : toString
};

var p2 = {
    name     : 'Monica', 
    age      : 32,
    toString : toString
};

var p3 = {
    name     : 'Irene', 
    age      : 2,
    toString : toString
};

console.log(p1.toString());  // [Justin,35] 
console.log(p2.toString());  // [Monica,32] 
console.log(p3.toString());  // [Irene,2]
*/

/*
function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = toString;
}

var p1 = new Person('Justin', 35);
var p2 = new Person('Monica', 32);
var p3 = new Person('Irene', 2);


console.log(p1.toString());  // [Justin,35] 
console.log(p2.toString());  // [Monica,32] 
console.log(p3.toString());  // [Irene,2]
*/


/*
function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = toString;
}

var p = {};
Person.call(p, 'Justin', 35);

console.log(p.toString());  // [Justin,35]
*/


/*
function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

function person(name, age) {
    return {
        name     : name,
        age      : age,
        toString : toString
    };
}

var p = person('Justin', 35);

console.log(p.toString());  // [Justin,35]

*/

/*
function Nobody()  {
}

function Person(name, age)  {
    return [];
}

var n = new Nobody();
var p = new Person();

console.log(n instanceof Nobody);  // true
console.log(p instanceof Person);  // false
console.log(p instanceof Array);   // true



function Person() {}
var p = new Person();
console.log(p.constructor == Person);  // true
*/


/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person('Justin', 35);

console.log(p.name);  // Justin
console.log(p.age);   // 35

*/


/*
function Person(name, age) {
    this.getName = function() {
        return name;
    };

    this.age = age;
}

var p = new Person('Justin', 35);

console.log(p.name);       // undefined
console.log(p.getName());  // Justin
console.log(p.age);        // 35

*/



function Account() {
    var balance = 0;

    this.getBalance = function() {
        return balance;
    };

    this.setBalance = function(money) {
        if(money < 0) {
            throw new Error('can\'t set negative balance.');
        }
        balance = money;
    };
}

var acct = new Account();

console.log(acct.getBalance());   // 0

acct.setBalance(1000);
console.log(acct.getBalance());   // 1000

acct.setBalance(-1000);           // Error: can't set negative balance



