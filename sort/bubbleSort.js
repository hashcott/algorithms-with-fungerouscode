function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let noSwap;
  for (let j = 0; j < arr.length - 1; j++) {
    noSwap = true;
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr, i, i + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([3, 3, 4, 5, 6, 7, 9]));
