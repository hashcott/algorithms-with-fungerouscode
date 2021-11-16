function stringifyNumber(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      stringifyNumber(obj[key]);
    } else if (typeof obj[key] === "number") {
      obj[key] = `${obj[key]}`;
    }
  }
  return obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumber(obj));
