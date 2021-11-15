function search(arr, num) {
  let min = 0;
  let max = arr.length;
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] > num) max--;
    else if (arr[mid] < num) min++;
    else return mid;
  }
  return -1;
}

console.log(search([2, 4, 6, 7, 8, 85], 7));
