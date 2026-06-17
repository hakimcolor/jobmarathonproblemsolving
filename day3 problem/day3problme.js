// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));


// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax (arr) {
  let max = [0];
  
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 4, 5]));

// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().
function removeDuplicates (arr) {
  let uniqueArray = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return uniqueArray;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 1, 6, 7, 7, 2,]));

// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().


function flattenArray (arr) {
return arr.flat();
}

console.log(flattenArray ([1, [2, 3], [4,5]]));