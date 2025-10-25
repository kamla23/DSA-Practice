

function progressDay(arr){
    let count = 0;
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < arr[i+1]){
            count = count+1;
             
        }
          
    }
    return count; 
}
console.log(progressDay([3, 4, 1, 2])); 
console.log(progressDay([10, 11, 12, 9, 10]));
console.log(progressDay([6, 5, 4, 3, 2, 9]));
console.log(progressDay([9, 9])); 


