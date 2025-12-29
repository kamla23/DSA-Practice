
function maxSlid(arr, k){
    let sum = 0;
    let max = 0;
    for(let i = 0; i < k; i++){
        sum += arr[i]; 
    }
    max = sum;
    for(let j = k; j < arr.length; j++){
        sum = sum - arr[j-k] + arr[j];
        max = Math.max(max, sum);
    }
return max; 
}
console.log(maxSlid([2,1,5,1,3,2], 3)); 