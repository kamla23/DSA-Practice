
// let arr = [5, 6, 7, 4, 3,8,1];
// for(let i = 0; i < arr.length-1; i++){
//     for(let j = 0; j < arr.length-1-i; j++){
//         if(arr[j] > arr[j+1]){
//             let t = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = t;
//         }
//     }
// }
// console.log(arr);

//===========================//

// let a = [5, 3, 8, 4, 2];
// for(let i = 0; i < a.length-1; i++){
//     let min = i;
//     for(let j = i+1; j < a.length; j++){
//         if(a[j] < a[min]){
//             min = j;
//         }
//     }
//     let t = a[i];
//     a[i] = a[min];
//     a[min] = t;
// }
// console.log(a)


//=================================================//

let arr = [8,3,4,6,7,5,1]
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);