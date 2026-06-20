// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.
function debounce(fn, delay) {
  let timer;
  return function (...arges) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arges);
    }, delay);
  };
}
function search(text) {
  console.log('Searching for:', text);
}

const debouncedSearch = debounce(search, 300);

debouncedSearch('a');
debouncedSearch('az');
debouncedSearch('aziz');
debouncedSearch('azizul');
