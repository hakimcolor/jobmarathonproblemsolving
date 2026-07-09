// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

// Ans is
function wordCount(sentence) {
  let words = sentence.split('');
  let counting = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (counting[word]) {
      counting[word]++;
    } else {
      counting[word] = 1;
    }
  }
  return counting;
}
console.log(wordCount('the cat sat on the mat'));

// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.
// ans is
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longestW = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestW.length) {
      longestW = words[i];
    }
  }
  return longestW;
}
console.log(longestWord('The quick suiiiiiiiiiiiiii brown fox'));
// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2 Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(-k).concat(arr.slice(0, n - k));
}
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k));

// Problem 49: Roman to Integer
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3 Input: 'IX'    → Output: 9 Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (values[s[i]] < values[s[i + 1]]) {
      result -= values[s[i]];
    } else {
      result += values[s[i]];
    }
  }
  return result;
}
console.log(romanToInt('III'));

//Problem 50: Pascal's Triangle Row  [Medium]
// Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
// Example:
// Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
// Hint: Each element is the sum of the two elements above it from the previous row

function pascalRow(n) {
  let row = [1];
  for (let i = 1; i <= n; i++) {
    let newRow = [1];
    for (let j = 1; j < i; j++) {
      newRow[j] = row[j - 1] + row[j];
    }
    newRow[i] = 1;
    row = newRow;
  }
  return row;
}
console.log(pascalRow(0));
console.log(pascalRow(3));

// Problem 51: Count Vowels [Easy]
// Description:
// Write a function countVowels(str) that returns the total number of vowels
// (a, e, i, o, u) in a string.
// Example:
// Input: "JavaScript"
// Output: 3
// Hint: Loop through the string and check each character.
function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('JavaScript'));
console.log(countVowels('Hello World'));
console.log(countVowels('Helloworlditsme'));

// Problem 52: Count Characters in a String [Easy]
// Description:
// Write a function charCount(str) that returns an object
// with each character as a key and its frequency as the value.
// Example:
// Input: "banana"
// Output: { b:1, a:3, n:2 }
// Hint: Loop through the string and store frequencies.

// function charCount(str) {
//   const count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   return count;
// }
// console.log(charCount('banana'));

function charCount(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

console.log(charCount('banana'));

// Problem 53: Find the Second Largest Number [Medium]
// Description:
// Write a function secondLargest(arr) that returns the second largest
// unique number in an array.
// Example:
// Input: [10, 5, 8, 20, 20, 15]
// Output: 15
// Hint: Remove duplicates, then find the second largest.

function secondLargest(arr) {
  const unique = [...new Set(arr)];

  if (unique.length < 2) {
    return "No second largest number";
  }



  
}



