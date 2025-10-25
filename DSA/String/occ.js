// let str = "greekforgreeks";
// let a = "k";
// let s = str.split(a).join('');
// console.log(s);

//====================================//

// let str = "greekforgreeks";
// let a = "k";
// let r = "";
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== a){
//         r += str[i];
//     }
// }
// console.log(r);

//=======================================//

// let a = "Kamla";
// let b = "Fuleshri";

// let r = "";
// for(let i = 0; i < a.length; i++){
//     r += a[i];
// }

// for(let j = 0; j < b.length; j++){
//     r += " ";
//     r += b[j];
// }
// console.log(r);

// let arr = [2,6,4,5,7];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr[arr.length-2]);

// function palindrome(str){
//     let a = str.split("").reverse().join('');
//     if(a == str){
//         return "yes";
//     }else{
//         return "no"
//     }
// }
// console.log(palindrome("mom"));

// function slarge(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr[arr.length-2];
// }
// console.log(slarge([3, 4, 5,8, 7]));
