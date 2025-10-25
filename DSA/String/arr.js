

// let arr = [1,2,3,4,5,6,7,8];
// let c = 0;
// let i = 0;
// while(arr[i] !== undefined){
//     c++;
//     i++;
// }
// console.log(c);

//ZerotoEnd//==================

function ZeroToEnd(arr){
    let n = arr.length;
    let t = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            t[j++] = arr[i];
        }
    }
    while(j < n){
        t[j++] = 0;

    }
    for(let i = 0; i < n; i++){
            arr[i] = t[i];
        }
    return t;
}
console.log(ZeroToEnd([1,2,0,0,4,5]));
console.log(ZeroToEnd([0,0,2,0,5]));
console.log(ZeroToEnd([4,4,5]));
console.log(ZeroToEnd([0,0]));
