/**
  |============================
  | Simple type of data structure
  |============================
*/

let num: number;

num = 10;

let str: string;

str = "String";

let bool: boolean;

bool = true;

// No reason to indicate type of data
const person = "Max";

/**
  |============================
  | Hard type of data structure
  |============================
*/

let arr: string[] = [];

arr = ["string"];

let arrNum: number[] = [];

arrNum = [1, 2];

let arrAny: any[] = [];

arrAny = [1, "2", { name: "string" }];

let arrObject: { name: string }[];

arrObject = [{ name: "Max" }, { name: "Alex" }];

let obj: { value: string };

obj = { value: "string" };

obj.value;

let db: {
  id: number;
  title: string;
  // ? means that the field is optional
  info?: {
    date: Date;
    isNew?: boolean;
  };
};

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

let some: any;

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

let something: unknown;

something = 10;

something = "string";

let string: string;

// Type guard

if (typeof something === "string") {
  string = something;
}

/**
  |============================
  | Tuple
  |============================
*/

let fixed: ["string", number];

fixed = ["string", 2];

/**
  |============================
  | Enum
  |============================
*/

enum Toggle {
  ENABLE,
  DISABLE,
}

const service = {
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

let union: number | string;

union = 10;
union = "Hello World";

function combine(param1: string | number, param2: string | number) {
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

const fruit = [];

function workWithArr(arr: string[], value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
    const idx = arr.indexOf(value);
    arr.splice(idx, 1);
  }
  return arr;
}

workWithArr(fruit, 'banana', 'add');
workWithArr(fruit, 'apple', 'add');
workWithArr(fruit, 'peach', 'add');

console.log(fruit);
workWithArr(fruit, 'apple', 'delete');
console.log(fruit);