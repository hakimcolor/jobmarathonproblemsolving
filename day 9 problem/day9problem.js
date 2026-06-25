// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.
function twoSum(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const cloneStr1 = str1.toLowerCase().split('').sort().join('');
  const cloneStr2 = str2.toLowerCase().split('').sort().join('');

  const anagram = cloneStr1 === cloneStr2;
  return anagram;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));

// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.




function isValidParentheses(str) {
  const stack = [];

  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of str) {
    if (bracketMap[char]) {
      const topElement = stack.pop();

      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses('()[]{}'));
console.log(isValidParentheses('([)]'));
console.log(isValidParentheses('{[]}'));
console.log(isValidParentheses('('));  
//     Problem 45: Binary Search[Medium]
// Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or - 1 if not found.
//     Example:
// Input: [1, 3, 5, 7, 9], target = 7  → Output: 3
// Hint: Use left and right pointers; check the middle element each iteration.