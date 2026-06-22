// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
    // console.log(error);
  }
}

console.log(safeJsonParse('a'));

console.log(safeJsonParse('{"a":1}'));

// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

// Problem 37: Retry a Promise  [Medium]

async function retry(fn, times) {
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === times) {
        throw error;
      }
      console.log(`Attempt ${i} failed. Retrying...`);
    }
  }
}

let count = 0;
const unstableFetch = () => {
  return new Promise((resolve, reject) => {
    count++;
    if (count < 3) {
      reject('Network Error!');
    } else {
      resolve('Data fetched successfully!');
    }
  });
};

(async () => {
  try {
    console.log('Starting retry process...');
    const result = await retry(unstableFetch, 3);
    console.log('Final Result:', result);
  } catch (err) {
    console.error('All attempts failed. Error:', err);
  }
})();
// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); 
    });
  });
}