

function filterArray(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if( typeof arr[i] === "number" && arr[i] >= 0 && arr[i] <= 9){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(filterArray([1,2,"a","b"]));
console.log([1,"a", "b", 0, 15]);
console.log(filterArray([1,2,"aasf", "1", "123", 123]));
