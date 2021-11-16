function collectStrings(obj) {
  let res = [];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      res = res.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      res.push(obj[key]);
    }
  }
  return res;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
