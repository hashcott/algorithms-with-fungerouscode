function insertionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let current = arr[j];
    for (var i = j - 1; i >= 0 && arr[i] > current; i--) {
      console.log(j, i, arr[i], current);
      arr[i + 1] = arr[i];
      console.log(arr);
    }
    console.log("===========================");
    arr[i + 1] = current;
  }
  return arr;
}

insertionSort([3, 9, 5, 11, 3, 5, 6, 8, 7]);
