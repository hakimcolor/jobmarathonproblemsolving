// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.
function countProperties(obj) {
  let arrObj = Object.keys(obj).length;
  return arrObj;
}
console.log(countProperties({ a: 1, b: 2, c: 3 }));

// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().
function mergeObjects(obj1, obj2) {
  let mergeObj = { ...obj1, ...obj2 };
  return mergeObj;
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));

// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15 Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().র
function invertObject (obj) {
  let inverted = {};

  for(let key in obj){
    let value = obj[key];
    inverted[value] = key;
  }
  return inverted;
}

let result = invertObject({ a: 1, b: 2 });

let outputParts = [];
for (let key in result) {
  outputParts.push(`${key}: '${result[key]}'`); 
}

console.log(`{ ${outputParts.join(', ')} }`);