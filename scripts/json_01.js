
/*
var obj = {
    name : 'Justin',
    age : 35,
    childs : [ {name : 'hamimi', age : 3} ]
};

var json = '{"name":"Justin","age":35,"childs":[{"name":"hamimi","age":3}]}';

var json =
{
    "name":"Justin",
    "age":35,
    "childs":[
        {
            "name":"hamimi",
            "age":3
        }
    ]
}
*/

var obj = {
    name : 'Justin',
    age : 35,
    childs : [ {name : 'hamimi', age : 3} ]
};

var json = JSON.stringify(obj);

// {"name":"Justin","age":35,"childs":[{"name":"hamimi","age":3}]}
console.log(json);

//{"name":"Justin","age":35}
console.log(JSON.stringify(obj, ['name', 'age']));


