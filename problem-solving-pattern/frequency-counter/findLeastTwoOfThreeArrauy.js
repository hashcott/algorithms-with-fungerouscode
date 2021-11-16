//Find numbers present in at least two of the three arrays

// Input: arr[] = {1, 1, 3, 2, 4}, brr[] = {2, 3, 5}, crr[] = {3, 6}
// Output: {2, 3}
// Explanation: Elements 2 and 3 appear in atleast 2 arrays

function solve(arr = [], brr = [], cur = []) {
  let s1 = new Set();
  let s2 = new Set();
  let s3 = new Set();

  let s = new Set();
  for (let val of arr) {
    s1.add(val);
    s.add(val);
  }
  for (let val of brr) {
    s2.add(val);
    s.add(val);
  }
  for (let val of cur) {
    s3.add(val);
    s.add(val);
  }
  for (let val of s) {
    if (
      (s1.has(val) && s2.has(val)) ||
      (s1.has(val) && s2.has(val)) ||
      (s2.has(val) && s3.has(val))
    ) {
      console.log(val);
    }
  }
}

solve([1, 1, 3, 2, 4], [2, 3, 5], [3, 6]);
