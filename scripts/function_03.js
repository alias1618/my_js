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

function add(num1, num2) {
    return this.num + num1 ;
    //return this.num + num1 + num2;
}

var o1 = {num : 10};
var o2 = {num : 100};
var args = [20, 30];

console.log(add.apply(o1, args)); // 60
console.log(add.apply(o2, args)); // 150

