// Method 1
function validAngram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!key in frequencyCounter1) return false
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false
  }

  return true
}

// Method 2
function validAngram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    if (!lookup[letter]) return false
    else lookup[letter] -= 1
  }
  return true
}


console.log(validAngram("hello", "lloeh"));