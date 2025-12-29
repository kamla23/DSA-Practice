
function longest(s, k) {
  let sub = 0;
  for (let i = 0; i < s.length; i++) {
    let c = {};
    for (let j = i; j < s.length; j++) {
      let ch = s[j];
      if (c[ch] === undefined) {
        c[ch] = 1;
      } else {
        c[ch] += 1;
      }
    }
    console.log(c);
  }
}
console.log(longest("aaabb", 3));
