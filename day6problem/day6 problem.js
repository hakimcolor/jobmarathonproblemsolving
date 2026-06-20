// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

const user = { firstName: 'Sara', lastName: 'Khan', age: 25 };

const { firstName: name, lastName, age } = user;

console.log(name, lastName, age);

//  console.log(name);
//  console.log(lastName);
//  console.log(age);


// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5] Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

// const arra = [1,2];
// const arrb = [3,4];
// const arrc = [5];

// const mergeArrays =[...arra, ...arrb, ...arrc];

// console.log(mergeArrays);

function mergeArrays (...arrays) {
  const mergeArray = arrays.flat();
  return mergeArray;
};

console.log(mergeArrays ([1, 2,], [3, 4], [5]));
console.log(mergeArrays ([1, 2,], [3, 4], [5], [6, 7, 8], [9, 10]));


// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5] Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

// const arra = [1,2];
// const arrb = [3,4];
// const arrc = [5];

// const mergeArrays =[...arra, ...arrb, ...arrc];

// console.log(mergeArrays);

function mergeArrays (...arrays) {
  const mergeArray = arrays.flat();
  return mergeArray;
};

console.log(mergeArrays ([1, 2,], [3, 4], [5]));
console.log(mergeArrays ([1, 2,], [3, 4], [5], [6, 7, 8], [9, 10]));
