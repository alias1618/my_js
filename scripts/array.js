//var fruits = ['Apple', 'Banana'];

//語法：

//ary[index]

//讀取陣列中的元素
/*
var fruits = ['Apple', 'Banana'];

// Apple
var first = fruits[0];
// Banana
var last = fruits[fruits.length - 1];
*/

//更改陣列中某個元素的值

var fruits = ['Apple', 'Banana'];

fruits[0] = 'Orange';
//fruits[1] = 101;

// 輸出 ["Orange", 101]
console.log(fruits);

//

/*
取得陣列長度 (length)

你可以由陣列的 length 屬性得到一個陣列的長度：
*/

var fruits = ['Apple', 'Banana'];

// 輸出 2
console.log(fruits.length)


//新增元素

//你可以用 push() 方法來新增元素到陣列最後面：

var fruits = ['Apple', 'Banana'];

fruits.push('Orange');

// 輸出 ["Apple", "Banana", "Orange"]
console.log(fruits);

//或用 ary[aryLength] 的方式：

var fruits = ['Apple', 'Banana'];

fruits[fruits.length] = 'Orange';

// 輸出 ["Apple", "Banana", "Orange"]
console.log(fruits);

//上面的 fruits.length 其實就是陣列目前最大索引值加 1 的意思，但一般都會用 .push() 比較方便。



//或用 unshift() 方法來新增一個元素到陣列最前面：

var fruits = ['Apple', 'Banana'];

fruits.unshift('Orange');

// 輸出 ["Orange", "Apple", "Banana"]
console.log(fruits);




//刪除元素

//你可以用 pop() 方法來移除陣列中的最後一個元素：

var fruits = ['Apple', 'Banana'];

// pop() 除了移除元素，還會返回移除的元素值
var last = fruits.pop(); // Banana

// 輸出 ["Apple"]
console.log(fruits);

//用 shift() 方法來移除陣列中的第一個元素：

var fruits = ['Apple', 'Banana'];

// shift() 除了移除元素，還會返回移除的元素值
var first = fruits.shift(); // Apple

// 輸出 ["Banana"]
console.log(fruits);

//delete 運算子可以用來刪除特定位置的元素，但它不會移除元素，只是將該位置的元素值變成 undefined：

var fruits = ['Apple', 'Banana', 'Orange'];

delete fruits[0];

// [undefined, "Banana", "Orange"]
fruits;

//迴圈呼叫陣列 (for loop Array Elements)

//for 語法可以用來遍歷陣列中所有的元素。

//用法：

var fruits = ['Apple', 'Banana', 'Orange'];

for (var i=0; i<fruits.length; ++i) {
    console.log(fruits[i]);
}

//上面依序會輸出：

Apple
Banana
Orange
