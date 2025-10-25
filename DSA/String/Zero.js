

function ZeroToEnd(arr){
    let n = arr.length;
    let temp = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            temp[j++] = arr[i];
        }
    }
    while(j < n){
        temp[j++] = 0;
    }

    for(let i = 0; i < n; i++){
        arr[i] = temp[i];
    }
return temp;
}
console.log(ZeroToEnd([1,2,0,5,0,0,6]));

