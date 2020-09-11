
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


/*
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

*/

/*
var obj = {
    name : 'Justin',
    age : 35,
    childs : [ {name : 'hamimi', age : 3} ]
};

console.log(JSON.stringify(obj, function(key, value) {
    if(key === 'age'){
        return undefined;
    } 
    return value;
}));

*/

/*
var obj = {
    name : 'Justin',
    age : 35,
    childs : [ {name : 'hamimi', age : 3} ]
};

function replacer(key, value) {
    return key === 'age' ? undefined : value;
}

console.log(JSON.stringify(obj, replacer, 2));

*/

/*

var obj = {
    name : 'Justin',
    age : 35,
    toJSON : function() {
        return {
            name : this.name.toUpperCase(), 
            age  : this.age
        };
    }
};

// {"name":"JUSTIN","age":35}
console.log(JSON.stringify(obj));

*/


/*
var json = '{"name":"Justin","age":35,"childs":[{"name":"hamimi","age":3}]}';
var obj = JSON.parse(json);

console.log(obj.name); // Justin

*/

var json = '{"name":"Justin","age":35,"childs":[{"name":"hamimi","age":3}]}';

var obj = JSON.parse(json, function(key, value) {   
    if(key === 'age'){
        return undefined;
    } 
    return value;
});

console.log(obj); // { name: 'Justin', childs: [ { name: 'hamimi' } ] }