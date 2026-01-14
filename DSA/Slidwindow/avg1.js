var findMaxAverage = function(nums, k) {
    let left = 0;
    let sum  = 0;
    let maxSum = -Infinity;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        let slid = i - left + 1;
        if(slid === k){
            maxSum = Math.max(maxSum, sum);
            sum -= nums[left];
            left++;
        }
    }

   return maxSum/k; 
};
console.log(findMaxAverage([1,12,-5,-6,50,3],4));