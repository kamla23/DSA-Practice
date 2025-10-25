
// let str = "codeleet";
// let index = [4,5,6,7,0,1,2,3];

// let arr = new Array(str.length);
// for(let i = 0; i < str.length; i++){
//     arr[index[i]] = str[i];
// }
// console.log(arr.join(""));


let str = "codeleet";
let index = [4,5,6,7,0,1,2,3];
let arr = [];
for(let i = 0; i < str.length; i++){
    arr[index[i]] = str[i];
}
console.log(arr);
let s = "";
for(let i = 0; i < arr.length; i++){
    s = s + arr[i];
}
console.log(s);