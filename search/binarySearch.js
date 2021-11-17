function binarySeach(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== val && start <= end) {
    if (arr[mid] < val) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] === val) return mid;
  else return -1;
}

console.log(binarySeach([2, 3, 5, 7, 11, 434, 666, 9948, 59965, 595959], 5));
