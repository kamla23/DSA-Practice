

// function countvc(str){
//     let vowels = "aeiou";
//     let vcount = 0;
//     let constcount = 0;
//     for(let i = 0; i < str.length; i++){
//         let c = str[i].toLowerCase();
//         if(vowels.includes(c)){
//             vcount++;
//         }else if(c >= "a" && c <= "z"){
//             constcount++;
//         }
//     }
//     return {vcount, constcount};
// }
// console.log(countvc("kamla"));
// console.log(countvc("javascript"));


// function palindrome(str){
//     let rev = str.split("").reverse().join("");
//     if(str === rev){
//         return "palindrome";
//     }else{
//         return "not palindrome";
    
// }
// }
// console.log(palindrome("madam"));
// console.log(palindrome("kamla"));

// function sumstring(str){

// }
// console.log(sumstring("12243660"));
// console.log(sumstring("1111112223"));
// console.log(sumstring("123456"));


function arraypalindrome(arr){
let s = 0;
let e = arr.length-1;
while(s < e){
    if(arr[s] !== arr[e]){
        return "not palindrome";
    }
     s++;
     e--;
    }
   return "palindrome";
}
console.log(arraypalindrome([1,2,1]));
console.log(arraypalindrome([2,4,6,8,4,2]));
console.log(arraypalindrome([1,2,3,2,1])); 


// function TicTacToe(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === "x"){

//         }
//     }

// }
// console.log(TicTacToe(["x", "0", "0"], ["0", "x", "0"], ["0", "#", "x"]));