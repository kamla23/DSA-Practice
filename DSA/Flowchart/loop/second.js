
function  second(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    
    let secondMax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== max && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(second([12, 45, 7, 30, 50])); 