/*
var array1 = new Array();

console.log(array1.length);
//0
*/

/*
var array2 = new Array(10);

console.log(array2.length);
//10
*/

/*
var array3 = new Array(10, 20, 30, 40, 50);

console.log(array3.length);
//5
*/

/*
function test(array) {
    for(var i = 0; i < array.length; i++) {
         console.log(array[i]);
    }
}


var array = [1, 2, 3];
test(array);  // 1 2 3
console.log('........');



array.length = 5;
test(array);  // 1 2 3 undefined undefined
console.log('........');


array.length = 2;
test(array);  // 1 2
console.log('........');

array.length = 3;
test(array);  // 1 2 undefined
*/


/*
var array = [1, 2, 3];
//undefined
console.log(array['0']);
//1
console.log(array['1']);
//2
console.log(array['2']);
//3
for(var i in array) {
    console.log(i);
}
//0
//1
//2
//undefined
delete array[1];
//true
console.log(array);
//[ 1, , 3 ]
*/


/*

function print(array) {
    for(var i = 0; i < array.length; i++) {
         console.log(array[i]);
    }
}

// 顯示 100 200 300
print({  
    '0' : 100,
    '1' : 200,
    '2' : 300,
    length : 3
});

*/


/*
var array = [];
//undefined
console.log(array.length);
//0
console.log(array[0] = 100);
//100
console.log(array.length);
//1
console.log(array[10] = 900);
//900
console.log(array.length);
//11

*/

/*
var names = ["Justin", "Monica", "Irene", "Dan", "Elsa"];

names.sort(function(n1, n2) {
         return n1.length - n2.length;
      })
      .forEach(function(elem) { // Irene Justin Monica
          console.log(elem);
      });

*/


/*

var obj = {  
    '0' : 100,
    '1' : 200,
    '2' : 300,
    length : 3
 };
 
 obj.forEach = Array.prototype.forEach;
 
 obj.forEach(function(elem, index, arr) {
     console.log(elem);
 });
 
 obj.forEach(console.log);

*/

/*

function isLength5(value, index, array) {
    return value.length === 5;
}

function lengthLessThan6(value, index, array) {
    return value.length < 6;
}

var names = ["Justin", "Monica", "Irene"];

console.log(names.every(isLength5));         // false
console.log(names.some(lengthLessThan6));    // true

*/


var names = ["Justin", "Monica", "Irene"];

var sum = names.filter(function(elem) {
                    return elem.length > 5;
               })
               .map(function(elem) {
                   return elem.length;
               })
               .reduce(function(accum, elem) {
                   return accum + elem;
               }, 0);

console.log(sum);  // 12

