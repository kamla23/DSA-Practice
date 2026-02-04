function miniMaxSum(arr) {
    let minsum = Infinity;
    let maxsum = -Infinity;
    
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        
        for(let j = 0; j < arr.length; j++){
            if(j !== i){
                sum += arr[j];
            }
        }
        // console.log(sum);
        
        if(sum < minsum){
            minsum = sum;
        }
        if(sum > maxsum){
            maxsum = sum;
        }
    }
    console.log(minsum, maxsum);
}
console.log(miniMaxSum([1, 3, 5, 7, 9]));