//Find frequencies of elements of an array present in another array

function solve(arr1, arr2) {
  if (arr1.length < arr2.length) return null;
  let counter = {};
  for (let val of arr1) {
    counter[val] = (counter[val] || 0) + 1;
  }
  for (const val of arr2) {
    console.log(counter[val]);
  }
}

solve([29, 8, 8, 8, 7, 7, 8, 7], [7, 8, 29]);
