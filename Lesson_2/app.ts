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

arrAny = [1, '2',{name:"string"}];

let arrObject: { name: string }[];

arrObject = [{ name: 'Max' }, { name: 'Alex' }]

let obj: {value: string};

obj = { value: 'string' };

obj.value