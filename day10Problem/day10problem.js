// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

// Ans is
function wordCount(sentence) {
  let words = sentence.split('');
  let counting = {};
  for (let i = 0; i < words.length; i++){
    const word = words[i]
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
// console.log(longestWord('The quick suiiiiiiiiiiiiii brown fox'));
