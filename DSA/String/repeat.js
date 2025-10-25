
let str = "aaabbc";
let k = 2;
let maxlength = 0;
for (let j = 0; j < str.length; j++) {
  let s = {};

  for (let i = j; i < str.length; i++) {
    let ch = str[i];
    if (s[ch] === undefined) {
      s[ch] = 1;
    } else {
      s[ch] = s[ch] + 1;
    }

    let d = 0;
    let ak = 0;
    for (let key in s) {
      d++;
      if (s[key] >= k) {
        ak++;
      }
    }
    let l = i-j+1;
    if(d === ak){
        if(l > maxlength){
            maxlength = l;
        }
    }
  }
}
console.log(maxlength);

