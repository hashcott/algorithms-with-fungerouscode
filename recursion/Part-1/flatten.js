function flatten(arr) {
  let newArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      newArr = newArr.concat(flatten(val));
    } else {
      newArr.push(val);
    }
  }
  return newArr;
}

console.log(flatten([1, [2, 3, 4, [3, 5, 6]], [2]]));
