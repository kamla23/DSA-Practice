
// var Duplicate = function(nums, k) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if( (nums[i] == nums[j]) && (Math.abs(i-j) ) <= k){
//                 return true;
//             }
//         }
//     }
// return false;
// };
// console.log(Duplicate([1,2,3,1], 3));
// console.log(Duplicate([1,0,1,1], 1));
// console.log(Duplicate([1,2,3,1,2,3], 2));



//with set method//

var Duplicate = function(nums, k){
    let a = new Set();
    for(let i = 0; i < nums.length; i++){
       if(a.has(nums[i])){
        return true;
       }
       a.add(nums[i])
       if(a.size > k){
        a.delete(nums[i - k]);
       }
     }
return false;   
};
console.log(Duplicate([1,2,3,1], 3));
console.log(Duplicate([1,0,1,1], 1));
console.log(Duplicate([1,2,3,1,2,3], 2));