function record(arr, str) {
  let arr1 = [];
  if (str == "asc") {
    for (let i = 0; i < arr.length; i++) {
      let s = "";
      s += arr[i];
      let a = s.split("");
      let as = a.sort().join("");
      let n = Number(as);
      arr1.push(n);
    }
    return arr1;
  } else {
     let arr2 = [];
    if (str == "desc") {
      for (let i = 0; i < arr.length; i++) {
        let r = "";
        r += arr[i];
        let d = r.split("");
        let ds = d.sort().reverse().join("");
        let N = Number(ds);
        arr2.push(N);
      }
    }
    return arr2;
  }

}
console.log(record([515, 341, 98, 44, 211], "asc"));
console.log(record([515, 341, 98, 44, 211], "desc"));
console.log(record([63251, 78221], "asc"));
console.log(record([63251, 78221], "desc"));
console.log(record([1, 2, 3, 4], "asc"));
console.log(record([1, 2, 3, 4], "desc"));
