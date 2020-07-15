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