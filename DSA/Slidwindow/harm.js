var findLHS = function (nums) {
  let a = {};
  for (let i = 0; i < nums.length; i++) {
    let s = nums[i];
    if (a[s] !== undefined) {
      a[s] += 1;
    } else {
      a[s] = 1;
    }
  }
//   console.log(a);
  let har = 0;

  for (let key in a) {
    let n = Number(key); 
    // console.log(n);
  
    if (a[n + 1] !== undefined) {
      let count = a[n] + a[n + 1];
      har = Math.max(har, count);
    }
  }
  return har;
};
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));


