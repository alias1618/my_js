
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

