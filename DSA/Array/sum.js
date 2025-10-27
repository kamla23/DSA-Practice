
function sumTwo(arr, t){
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === t){
                return [i, j];
            }
        }
    }
}
console.log(sumTwo([2,7,11,15], 9));
console.log(sumTwo([3,2,4],6));
console.log(sumTwo([3,3], 6));
