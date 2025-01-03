// // const a = 10;
// // let b = 20;

// // // alert('Hello World');
// // // console.log("Hello World");
// // // document.write('Hello World');
// // const mySymbol = Symbol();
// // console.log(mySymbol); // Symbol()
// // const uniqueId = Symbol('id');
// // console.log(uniqueId); // Symbol(id)
// // const id = Symbol('id');

// // const user = {
// //   name: 'Alice',
// //   age: 30,
// //   [id]: 12345 // Using a symbol as a key
// // };

// // console.log(user.name);  // Alice
// // console.log(user[id]);   // 12345

// // for (let i = 0; i < 10; i++) {
// //    if(i == 4) continue;
// //     console.log(i);
// // }

// // for loop begins when x=2
// // and runs till x <= 4
// for (let x = 2; x <= 4; x++) {
//     console.log("Value of x:" + x);
// }
// let count = 10;
// while (count <= 15) {
//   console.log(count);
//   count++;
// }

// let count1 = 1;
// do {
//   console.log(count1);
//   count1++;
// } while (count1 <= 5);

// const array = [10, 20, 30];
// for (let value of array) {
//   console.log(array.indexOf(value)); // Logs 10, 20, 30
// }

// let num = 2;
// let num1 = 6;
// num1 += num;
// console.log("Addition assignment",num1 += num);

// num1 -= num;
// console.log("Subtraction assignment",num1 -= num);

// num1 *= num;
// console.log("Multiplication assignment",num1 *= num);

// num1 /= num;
// console.log("Division assignment",num1 /= num);

//  num1 %= num;
// console.log("Remainder assignment", num1 %= num);

// let x = 6; 
// console.log(x **= 3); 
// console.log(x **= 0); 
// console.log(x **= 'bar');

// let y = 7; // 00000000000000000000000000000111 

// // y <<= 4; // 00000000000000000000000000011100 

//  y >>= -2;
// console.log(y);

// function User(name, rights) {
//   this.name = name;
//   this.rights = rights;
//   this.sayHi = function() {
//     console.log(this.name + 'with rights of ' + this.rights);
//   }
// }
// User('keerthi', 'admin',);
// "use strict";


var a = 10;
function myfun() {
  console.log(this);
  console.log(window);
  console.log(this === window);
}
myfun();
console.log(a);
console.log(this);
console.log(this === window);

const person = {
  greet: function () {
    console.log(`Hello name is ${this.name}`);
  },
  greet1() {
    console.log(`Hello name is ${this.name}`);
  }
}

const user = Object.create(person);
console.log(user);
user.name = 'Keerthi';
user.greet();
user.greet1();
const api = {};
const endpoints = ['getUser', 'createPost', 'deleteComment'];

endpoints.forEach(endpoint => {
  api[endpoint] = function (data) {
    console.log(`Calling ${endpoint} with data:`, data);
  };
});

api.getUser({ id: 1 }); // Output: "Calling getUser with data: { id: 1 }"
api.createPost({ title: 'Hello World' }); // Output: "Calling createPost with data: { title: 'Hello World' }"
api.deleteComment({ commentId: 42 }); // Output: "Calling deleteComment with data: { commentId: 42 }"
const user3 = {
  name: 'Keerthi',
  logName() {
    console.log(`User name: ${this.name}`);
  }
};

// Bind `this` to the callback
setTimeout(user3.logName.bind(user3), 1000);
const dataFormatter = {
  format(data) {
    console.log(`Formatted by ${this.name}: ${JSON.stringify(data)}`);
  }
};

const formatter1 = { name: 'Formatter1' };
const formatter2 = { name: 'Formatter2' };

dataFormatter.format.call(formatter1, { value: 100 });
dataFormatter.format.apply(formatter2, [{ value: 200 }]);

const person1 = {};

Object.defineProperty(person1, 'age', {
  value: 30,
  writable: false,  // The property is not writable (read-only)
  enumerable: true,
  configurable: false
});

console.log(person1.age);
person1.age = 32;
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
// console.log(Object.freeze(person));
// person.name="keerthi";
// delete person.greet;
console.log(person);
Object.assign(person, person1);
console.log(person);
console.log(person1);
console.log(Object.isFrozen(person));
console.log(Object.getPrototypeOf(person1));
console.log(Object.is(person1, person1));
console.log(person1.hasOwnProperty("age"));

const person2 = Object.create(person);
console.log(person2);
person2.greet();

class BankAccount {
  _balance; // Private field

  constructor(initialBalance) {
    this._balance = initialBalance;
  }
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
    return this._balance;
  }
  withdraw(amount) {
    this._balance -= amount;
    return this._balance;
  }
}

const userAccount = new BankAccount(1000);
console.log(userAccount);
console.log(userAccount.getBalance());
console.log(userAccount.deposit(1500));
console.log(userAccount.withdraw(300));
userAccount._balance = 1000000;
console.log(userAccount.getBalance());
console.log(userAccount.withdraw(300));
console.log(userAccount.propertyName);
const proto = { a: 1 };
const obj = Object.create(proto);
console.log(obj);
const copy = Object.assign({}, obj);
console.log(copy.a);

console.log('Start');  // 1

setTimeout(() => {
  console.log('setTimeout 1');  // 4
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');  // 2
});

queueMicrotask(() => {
  console.log('Microtask 1');  // 3
});

console.log('End');  // 5
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('GET Response:', response.data); // Log the response data
  })
  .catch(error => {
    console.error('GET Error:', error.message); // Log errors
  });

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Hello World',
  body: 'This is a new post created using Axios.',
  userId: 1,
})
  .then(response => {
    console.log('POST Response:', response.data); // Log the response data
  })
  .catch(error => {
    console.error('POST Error:', error.message); // Log errors
  });

  axios.interceptors.request.use((config) => {
    console.log('Request:', config);
    return config;
  });
  
  axios.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
  });

// Add Request Interceptor
axios.interceptors.request.use(
  (config) => {
    // Log the request configuration
    console.log('Intercepted Request:', config);

    // Example: Add a common Authorization header
    config.headers.Authorization = 'Bearer exampleToken123';

    // Return the modified config
    return config;
  },
  (error) => {
    // Handle request errors
    console.error('Request Error:', error.message);
    return Promise.reject(error);
  }
);

// Add Response Interceptor
axios.interceptors.response.use(
  (response) => {
    // Log the response
    console.log('Intercepted Response:', response);

    // Optionally transform the response data
    if (response.data) {
      response.data.receivedAt = new Date().toISOString(); // Add a timestamp
    }

    // Return the modified response
    return response;
  },
  (error) => {
    // Handle response errors
    console.error('Response Error:', error.message);

    // Optionally handle specific status codes globally
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized! Redirecting to login...');
      // Redirect logic (example): window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

// Example GET Request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('GET Response:', response.data); // Log the response data
  })
  .catch(error => {
    console.error('GET Error:', error.message); // Log errors
  });

// Example POST Request
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Hello World',
  body: 'This is a new post created using Axios.',
  userId: 1,
})
  .then(response => {
    console.log('POST Response:', response.data); // Log the response data
  })
  .catch(error => {
    console.error('POST Error:', error.message); // Log errors
  });
