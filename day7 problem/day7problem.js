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

// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

function throttle(fn, limit) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= limit) {
      fn(...args);
      lastTime = now;
    }
  };
}

function onScroll() {
  console.log('Scroll event fired at:', new Date().toLocaleTimeString());
}

const throttledScroll = throttle(onScroll, 200);

const interval = setInterval(() => {
  throttledScroll();
}, 20);

setTimeout(() => {
  clearInterval(interval);
  console.log('Testing stopped.');
}, 1000);
