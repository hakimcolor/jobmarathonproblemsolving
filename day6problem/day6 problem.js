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

function mergeArrays(...arrays) {
  const mergeArray = arrays.flat();
  return mergeArray;
}

console.log(mergeArrays([1, 2], [3, 4], [5]));
console.log(mergeArrays([1, 2], [3, 4], [5], [6, 7, 8], [9, 10]));

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

function mergeArrays(...arrays) {
  const mergeArray = arrays.flat();
  return mergeArray;
}

console.log(mergeArrays([1, 2], [3, 4], [5]));
console.log(mergeArrays([1, 2], [3, 4], [5], [6, 7, 8], [9, 10]));

// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.
async function getUserDate(id) {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return {
    id: id,
    name: 'test user',
  };
}
getUserData(1).then((data) => {
  console.log(data);
});

// Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
// Example:
// const user = {profile: null};const city = user?.profile?.address?.city ?? 'Unknown';// Output: 'Unknown'
// Hint: Chain ?. for each level; use ?? for the fallback. 
