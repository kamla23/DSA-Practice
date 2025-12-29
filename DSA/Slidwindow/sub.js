

function longestSubString(s, k) {
  let sub = 0;
  for (let i = 0; i < s.length; i++) {
    let c = {};

    for (let j = i; j < s.length; j++) {
      let ch = s[j];

      if (c[ch] === undefined) {
        c[ch] =1;
      } else {
        c[ch] += 1;
      }
      console.log(c);

      let v = true;
      for (let key in c) {
        if (c[key] < k) {
          v = false;
          break;
        }
      }

      if (v) {
        let length = j - i + 1;
        if (length > sub) {
          sub = length;
        }
    }
  }
}
return sub;
}
console.log(longestSubString("abbbaaaaaggbbc", 4));

