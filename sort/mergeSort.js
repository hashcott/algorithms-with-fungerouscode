function merge(arr1, arr2) {
  let result = [];
  let j = 0;
  let i = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let m = Math.floor(arr.length / 2);
  let a = mergeSort(arr.slice(0, m));
  let b = mergeSort(arr.slice(m));
  console.log(a, b);
  console.log("===============");
  return merge(a, b);
}
console.log(mergeSort([1, 2, 4, 56, 4, 5, 67, 4, 4]));
