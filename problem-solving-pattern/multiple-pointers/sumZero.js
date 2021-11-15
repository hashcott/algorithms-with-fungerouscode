function sumZero(arr) {
  arr = arr.soft((a,b) => a - b)
  let sum = Infinity
  let left = 0;
  let right = arr.length
  while(left < right) {
    sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if(sum > 0) {
      right--
    } else {
      left++
    }
  }
}