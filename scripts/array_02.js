
//push

//目的 : 將任一項目接到array最後面。

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5]

// 將數字6加入array後 
array.push(6)

// 輸出array 
console.log(array)
// [ 0, 1, 2, 3, 4, 5, 6 ] 
*/

/*
//pop

//目的 : 將array最後面元素刪除。

//使用方法 : 

// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5]

// 將array最後面元素刪除 
array.pop()

// 輸出array 
console.log(array)
// [ 0, 1, 2, 3, 4 ] 
*/


//unshift

//目的 : 將任一項目接到array最前面。

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5]

// 將數字6加入array最前面 
array.unshift(6)

// 輸出array 
console.log(array)
// [ 6, 0, 1, 2, 3, 4, 5 ] 
*/

//shift

//目的 : 將array第一個元素刪除。

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5]

// 將array第一個元素刪除 
array.shift()

// 輸出array 
console.log(array)
// [ 1, 2, 3, 4, 5 ] 
*/


//reverse

//目的 : 將array元素顛倒排列。

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5]

// 顛倒排列 
array.reverse()

// 輸出array 
console.log(array)
// [ 5, 4, 3, 2, 1, 0 ] 
*/

//splice

//目的 : 指定array中任一起始點index與欲刪除的數量後由一值進行取代，下面範例顯示，
//我們想要將數字1, 2, 3 這三個元素由6進行取代的作法

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 指定數字1的index(1)後三個元素進行刪除(包含數字1,2,3)，並由數字6取代 
// splice("起始index", "欲刪除數量", "取代的元素") 
array.splice(0, 3 )

// 輸出array 
console.log(array)
// [ 0, 6, 4, 5 ] 
*/


//slice

//目的 : 指定array中起始點index與結束點index後，
//回傳一array包含起始點index與結束點index之前的所有元素。 下面範例有兩種

//一 ：只輸入起始點index

//二 ：輸入起始點index與結束點index

 

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array = [0, 1, 2, 3, 4, 5]

// slice("起始點index", "結束點index") 
// 目的 : 得到除了數字0之外的元素array 
var result1 = array.slice(3)

// 輸出result1 
console.log(result1)
// [ 1, 2, 3, 4, 5 ] 

// 目的 : 得到除了數字1到數字4之間的元素array 
var result2 = array.slice(1, 5)

// 輸出result2 
console.log(result2)
// [ 1, 2, 3, 4 ] 
*/


//concat

//目的 : 合併兩個array

//使用方法 : 
/*
// 定義一個array，其值包含數字 0 ~ 5 依序排列 
var array1 = [0, 1, 2, 3, 4, 5]
// 定義一個array，其值包含數字 6 ~ 10 依序排列 
var array2 = [6, 7, 8, 9, 10]


// 目的 : 將array2 合併到 array1後面 
var newArray = array1.concat(array2)

// 輸出newArray 
console.log(newArray)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 
*/




//indexOf

//目的 : 從array中找到目標元素並回傳其index

//使用方法 : 

/* 定義一個array，其值包含數字 0 ~ 5 依序排列 */
var array = [0, 1, 2, 3, 4, 5]


/* 目的 : 從array中找到數字2的index */
var targetIndex = array.indexOf(2)

/* 輸出targetIndex */
console.log(targetIndex)
/* 2 */

/* 目的 : 從array中找到數字7的index */ 
var targetIndex2 = array.indexOf(7)

/* 輸出targetIndex */ 
console.log(targetIndex2) 
/* -1, 當數字7不存在於array中時，會回傳index -1 表示不存在 */
