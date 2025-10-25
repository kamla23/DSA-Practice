

function findIndex(arr, str){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == str){
            return i;
        }
    }
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["red", "blue", "Blue", "green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); 

