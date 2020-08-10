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
    name     : 'momor', 
    age      : 32,
    toString : toString
};

console.log(p1.toString());  // [Justin,35] 
console.log(p2.toString());  // [momor,32]

*/

/*
function toString() {
    return '[' + this.name + ',' + this.age + ',' + this.phone + ']';
}

var p1 = {
    name : 'Justin', 
    age  : 35,
    phone :123456789
};

var p2 = {
    name     : 'momor', 
    age      : 32,
};

console.log(toString.call(p1));  // [Justin,35] 
console.log(toString.call(p2));  // [momor,32]

*/


/*
function add(num1, num2) {
    return this.num + num1 + num2;
}

var o = {num : 10};

console.log(add.call(o, 40, 30)); // 60

*/


/*
function add(num1, num2) {
    return this.num + num1 ;
    //return this.num + num1 + num2;
}

var o1 = {num : 10};
var o2 = {num : 100};
var args = [20, 30];

console.log(add.apply(o1, args)); // 60
console.log(add.apply(o2, args)); // 150

*/


/*
function toString() {
    return this.name;
}

var p1 = {
    name     : 'Justin', 
    toString : toString
};

var p2 = {
    name     : 'momor', 
    toString : toString
};

console.log(p1.toString());        // Justin
console.log(p2.toString());        // momor
console.log(p1.toString.call(p2)); // momor
*/

/*
var o = {
    name : 'Justin',
    toString : function() {
        return this.name;
    }
};

console.log(o.toString()); // Justin

*/


var global = global || (function() {
    return this;
})();


/*
function func() {
    function inner() {
        return this;
    }
    return inner();
}

console.log(func() === global);    // true

var o1 = {func : func};

console.log(o1.func() === o1);         // false
console.log(o1.func() === global);     // true
console.log(func.call(o1) === global); // true

*/

/*
function func() {
    function inner() {
        return this;
    }
    this.inner = inner;
    return this.inner();
}

console.log(func() === global);            // true

var o1 = {func : func};

console.log(o1.func() === o1);                // true
console.log(o1.func.call(global) === global); // true
console.log(func.call(o1) === global);        // false

*/


'use strict'
/*
 (function() {
     return this;
 })();  // undefined
*/

/*
 var global = global || Function('return this')();


 var get = eval;
 var global = global || get('this');

 var global = global || (0, eval)('this');
*/

/*
 var obj = {
    '0' : 100,
    '1' : 200,
    '2' : 300,
    length : 3,
    forEach : function(callback) {
        for(var i = 0; i < this.length; i++) {
            callback(this[i]);
            console.log(this[i]);
        }
    }
};


obj.forEach(function(elem) {
    console.log(elem);
});
*/

/*
function forEach(callback) {
    for(var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

var obj1 = {
    '0' : 100,
    '1' : 200,
    '2' : 300,
    length : 3,
};

var f1 = forEach.bind(obj1);

f1(function(elem) {
    console.log(elem);  // 100 200 300
});

var obj2 = {
    '0' : 10,
    '1' : 20,
    '2' : 30,
    length : 3,
    forEach : f1
};

obj2.forEach(function(elem) {
    console.log(elem);  // 100 200 300
});

*/

function plus(a, b) {
    return a + b;
}

var addTwo = plus.bind(undefined, 2);
console.log(addTwo(10, 20));    // 12
console.log(addTwo(5));     // 7