function maxSubarray(arr, num) {
  if(arr.length < num) return null
  let maxSum = 0;
  let tempSum = 0;
  // init a window 
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]    
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }
  
  return maxSum;
}

console.log(maxSubarray([1,2,3,4,5], 2));