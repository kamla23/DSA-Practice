// function sumOfcubes(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]**3;

//     }
//     return sum;
// }
// console.log(sumOfcubes([1, 5, 9]));
// console.log(sumOfcubes([3, 4, 5]));
// console.log(sumOfcubes([2]));
// console.log(sumOfcubes([]));

// function format(arr){
//     let str = "";
//     for(let i = 0; i < arr.length; i++){

//         for(let j = 0; j < 3; j++){
//             if(j === 0){
//                 str += "(";
//             }
//             str+= arr[j];
//         }
//         str += ")" + " ";

//         for(let k = 3; k < 6; k++){
//             str += arr[k];
//         }
//        str += "-";

//        for(let l = 6; l < arr.length; l++){
//         str += arr[l];
//        }
//        return `"${str}"`;
//     }

// }
// console.log(format([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(format([5, 1, 9, 5, 5, 4, 4, 6, 8]));
// console.log(format([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));

// function tuckIn(arr, arr1){
//     let a = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i === 0){
//             a.push(arr[i]);
//             a.push(...arr1)
//         }else{
//             a.push(arr[i])
//         }
//     }
//     return a;
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(tuckIn([15, 150], [45, 75, 35]));
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

// const totalVolume = (...arr) => {
//   let t = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let m = 1;
//     for (let j = 0; j < arr[i].length; j++) {
//       m = m * arr[i][j];
//     }
//     t += m;
//   }
//   return t;
// };
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));


// const totalVolume = (...arr) => {
//     let t = 0;
//     for(let i = 0; i < arr.length; i++){
//         let m = 1;
//         for(let j = 0; j < arr[i].length; j++){
//             m = m*arr[i][j];
//         }
//         t += m;
//     }
//     return t;
// }
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));
// console.log(totalVolume([1, 1, 1]));  


// function getMiddle(str){
//     let l = str.length;
//     let m = Math.floor(l/2);

//     if(l%2 === 0){
//         return str[m - 1] + str[m];
//     }else{
//         return str[m];
//     }
// } 
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));


function vowelinks(str){
let vowele = "aeiou";
for(let i = 0; i < str.length; i++){
    if(vowele.includes(str[i])){
        
    }
}

}

console.log(vowelinks("a very large apliance"));
console.log(vowelinks("go to edabit"));
