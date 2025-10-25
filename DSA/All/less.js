
function arrBetween(num1, num2, arr){
    let arr1 = [];

    for(let i = 0; i < arr.length; i++){
        if(num1 < arr[i] && num2 > arr[i] ){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));