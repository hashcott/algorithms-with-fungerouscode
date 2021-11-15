// Frequency Counter
// function areThereDuplicates(...arr) {
//   let counter = {};
//   for (const val of arr) {
//     counter[val] = (counter[val] || 0) + 1;
//     if (counter[val] > 1) return true;
//   }
//   return false;
// }

console.log(areThereDuplicates("a", "b", "c", "a"));

// Multiple pointers

function areThereDuplicates(...args) {
  // Two pointers
  args = args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// console.log(areThereDuplicates("a", "b", "c", "a"));
