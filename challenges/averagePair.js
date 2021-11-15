function averagePair(arr, num) {
  arr.sort(a, (b) => a > b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === num) return true;
    if (avg > num) right--;
    else left++;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
