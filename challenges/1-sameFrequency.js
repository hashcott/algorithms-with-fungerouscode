function sameFrequency(num1, num2) {
  num1 = `${num1}`;
  num2 = `${num2}`;
  if (num1.length !== num2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < num1.length; i++) {
    counter1[num1[i]] = (counter1[num1[i]] || 0) + 1;
  }
  for (let i = 0; i < num2.length; i++) {
    counter2[num2[i]] = (counter2[num2[i]] || 0) + 1;
  }

  for (const key in counter1) {
    if (!key in counter1) return false;
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
