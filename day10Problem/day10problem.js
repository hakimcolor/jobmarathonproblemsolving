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

// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3 Input: 'IX'    → Output: 9 Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

// Problem 50: Pascal's Triangle Row  [Medium]
// Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
// Example:
// Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
// Hint: Each element is the sum of the two elements above it from the previous row.
