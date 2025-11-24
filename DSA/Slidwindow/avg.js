
var findMaxAverage = function(nums, k) {
    let s = 0;
    for(let i = 0; i < k; i++){
        s += nums[i];
    } 
    let m = s;
    for(let j = k ; j < nums.length; j++){
        s = s - nums[j-k]+nums[j];
        m = Math.max(m, s);
   }
   let avg = m/k;
   return avg;
}
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));