// Task1
let age: number;
age = 50
let Name: string;
Name = 'Max'
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => {
    return 100 + a;
};

// Task2
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Task3
let some:unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
   str = some; 
}

// Task4
// let customer: [string, number]
// customer = ['Max', 21];

// enum evt { LOADING, READY };

// const page = {
// load: evt.LOADING
// }

// if (page.load === evt.LOADING) {
//     console.log("loading...")
// }
// if (page.load === evt.READY) {
//     console.log("page loaded")
// }

// Task5

interface Page {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}