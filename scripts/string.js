/*
//下面這些都會發生錯誤：
var str = 'Mike's pet.';
var str = "This is a "book".";

//你可以改成這樣就會正確，因為雙引號裡面可以有單引號，或單引號裡面可以有雙引號：

var str = "Mike's pet.";
var str = 'This is a "book".';


//或是使用跳脫字元 (escape character) 反斜線 (backslash) \，來跳脫引號：

// Mike's pet.
var str = 'Mike\'s pet.';
// This is a "book".
var str = "This is a \"book\".";
*/