
function sumSubString(str) {
  let a = [];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let s = "";
    for (let j = i; j < str.length; j++) {
      s += str[j];
      a.push(s);
    }
  }
//   console.log(a);
  for(let i = 0; i < a.length; i++){
    sum += Number(a[i]);
  }
  return sum;
}
console.log(sumSubString("6759"));
console.log(sumSubString("421"));

