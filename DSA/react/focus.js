//Reverse//

// function revers(str){
//     let rev  = "";
//     for(let i = str.length-1; i>= 0; i--){
//         rev += str[i];
//     }
//     return rev;
// }
// console.log(revers("kamla"));
//============= with method =============================================//

// function revers(str){
//     let rev = str.split("").reverse().join("");
//     return rev;
// }
// console.log(revers("kamla"));
//=========================================================================================//

//Largest Number in Array//

// function largest(arr){
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]> max){
//             max = arr[i];
//         }
//     }
// return max;
// }
// console.log(largest([10,20,40,80,90,30,]));

//============with method ===================================//
// function largest(arr){
//     let max = Math.max(...arr);
//     return max;
// }
// console.log(largest([10,20,40,80,90,30,]));

//=========================================================//

// count vowels//

// function vowels(str){
//     let count = 0;
//     let vowel = "aieouAIEOU";
//     for(let i = 0; i < str.length; i++){
//         if(vowel.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowels("programming"));
//=========== with method ==========================//

// function vowels(str){
//     let vowel = (str.match(/[aeiou]/gi)||[]).length;
//     return vowel;
// }
// console.log(vowels("Aprogramming"));
//=====================================================//

// remove dulicates in array//
// function remove(arr) {
//   let uni = [];
//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;

//     for (let j = 0; j < uni.length; j++) {
//       if (arr[i] === uni[j]) {
//         exists = true;
//         break;
//       }
//     }

//     if (!exists) {
//       uni.push(arr[i]);
//     }
//   }
//   return uni;
// }
// console.log(remove([1, 2, 2, 3, 4, 4, 5, 6]));

//================= with method =============================================//
// function remove(arr) {
//     let uni = [...new Set(arr)];
//     return uni;
// }
// console.log(remove([1, 2, 2, 3, 4, 4, 5, 6]));
//====================================================================//

// exists//
function exists(a, b){
    let arr = [];
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(b[j] === a[i]){
                arr.push(b[j]);
            }
        }
    }
  return [...new Set(arr)];
}
console.log(exists([ 1, 2, 3, 4 ], [3, 4, 5, 6]));
console.log(exists([ 1, 1, 2, 2, 3],[2, 2, 3, 4]));

