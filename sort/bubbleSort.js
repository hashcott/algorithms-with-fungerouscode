const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function bubbleSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length - 1; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j + 1, j);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(bubbleSort([2, 3, 2, 33, 5, 5, 54]));
