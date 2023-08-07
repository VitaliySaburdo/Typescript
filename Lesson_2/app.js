/**
  |============================
  | Simple type of data structure
  |============================
*/
var num;
num = 10;
var str;
str = "String";
var bool;
bool = true;
// No reason to indicate type of data
var person = "Max";
/**
  |============================
  | Hard type of data structure
  |============================
*/
var arr = [];
arr = ["string"];
var arrNum = [];
arrNum = [1, 2];
var arrAny = [];
arrAny = [1, "2", { name: "string" }];
var arrObject;
arrObject = [{ name: "Max" }, { name: "Alex" }];
var obj;
obj = { value: "string" };
obj.value;
var db;
// no errors here
db = {
    id: 1,
    title: "New product",
    info: {
        date: new Date(),
        // isNew: true
    },
};
/**
  |============================
  | Any
  |============================
*/
var some;
// no errors here
some = 1;
some = "string";
some = true;
some = [];
some = {};
/**
  |============================
  | Unknown
  |============================
*/
var something;
something = 10;
something = "string";
var string;
// Type guard
if (typeof something === "string") {
    string = something;
}
/**
  |============================
  | Tuple
  |============================
*/
var fixed;
fixed = ["string", 2];
/**
  |============================
  | Enum
  |============================
*/
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
})(Toggle || (Toggle = {}));
var service = {
    status: Toggle.ENABLE,
};
if (service.status === Toggle.ENABLE) {
    console.log("it`s active");
}
/**
  |============================
  | Union type
  |============================
*/
var union;
union = 10;
union = "Hello World";
function combine(param1, param2) {
    if (typeof param1 === "string" || typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
    return param1 + param2;
}
/**
  |============================
  | Literal type
  |============================
*/
var fruit = [];
function workWithArr(arr, value, action) {
    if (action === "add") {
        arr.push(value);
    }
    else {
        var idx = arr.indexOf(value);
        arr.splice(idx, 1);
    }
    return arr;
}
workWithArr(fruit, 'banana', 'add');
