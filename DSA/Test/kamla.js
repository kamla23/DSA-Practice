
//========================reverse======================//

// let str = "kamla";
// let rev = str.split("").reverse().join("");
// console.log(rev); 

//================without method===========================================//

// let str = "kamla";
// let rev = "";
// for(let i = str.length-1; i >= 0; i--){
//     rev += str[i];
// }
// console.log(rev);

//======================= palindrome =======================================//

// let str = "level";
// let p = str === str.split("").reverse().join("");
// console.log(p);

//================without method===========================================//

// let str = "level";
// let palin = true;
// for(let i = 0; i < str.length/2; i++){
//     if(str[i] !== str[str.length - 1 - i]){
//         palin = false;
//         break;
//     }
// }
// console.log(palin);

//=================== count vowels ============================================//

// let str = "Hello World";
// let vowel = str.match(/[aeiouAEIOU]/g);
// let count  = vowel? vowel.length:0;
// console.log(count); 

//================without method===========================================//

// let str = "Hello World";
// let c = 0;
// let vowels = "aeiouAEIOU";
// for(let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//         c++;
//     }
// }
// console.log(c);

//=================== capitalize first word letter=========================//

// let str = "i am kittu";
// let capital = str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
// console.log(capital);
//================without method===========================================//

// let str = "i am kittu";
// let capital = "";
// let space = true;
// for(let i = 0; i < str.length; i++){
//     if(space){
//         capital += str[i].toUpperCase();
//         space = false;
//     }else{
//         capital += str[i];
//     }
//     if(str[i] === " "){
//         space = true;
//     }
// }
// console.log(capital);

//======================================//
console.log("abc".repeat(3));
console.log("hello".charCodeAt(0));

let obj={a:1,b:2}; 
console.log(Object.assign({},obj));

console.log(typeof function() {});

console.log("JavaScript".lastIndexOf("a"));

console.log("hello".padStart(9,"0"));
console.log([1,2,3].includes(2));

let a = {x:1};
let b = {y:2};
let c = Object.assign(a,b);
let d = {...a, ...b}
console.log(c);
console.log(d);

let o ={a:1,b:2}; 
console.log(Object.values(o));

function test(){
    return;
} 
console.log(test());


let f=function(a,b=5){
    return a+b;
}; 
console.log(f(2));

let i=0; 
while(i<3){
    console.log(i); 
i++;
}
// 0 1 2
console.log(typeof Infinity);

console.log(!"");
