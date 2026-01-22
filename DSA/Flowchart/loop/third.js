
//with 3 loop//
// let arr = [34,56,12,23,25];

// let max = arr[0];

// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max);


// let secondmax = -Infinity;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== max && arr[i] > secondmax){
//         secondmax = arr[i];
//     }
// }

// console.log(secondmax);

// let  thirdmax = -Infinity;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== max && arr[i] !== secondmax && arr[i] > thirdmax){
//         thirdmax = arr[i];
//     }
// }
// console.log(thirdmax);




//-------with  one loop------------//

function thirdmax(arr){
    let max = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            third = second;
            second = max
            max = arr[i];
        }else if(arr[i] !== max && arr[i] > second){
            third = second;
            second = arr[i];
        }else if(arr[i] !== max && arr[i] !== second && arr[i] > third){
            third = arr[i]
        }
    }
    return third;
}
console.log(thirdmax([34, 56, 12, 23, 25]));

