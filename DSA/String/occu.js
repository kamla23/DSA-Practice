

// let str = "kamla";
// let obj = {};

// for(let i = 0; i < str.length; i++){
//     let ch = str[i];

//     if(obj[ch]){
//         obj[ch]++;
//     }else{
//         obj[ch] = 1;
//     }
// }
// console.log(obj);

//================================//

let str = "Programming";
let r = "";
let s = 4;
let m = Math.floor(str.length/2);
let l = str.length-1;

for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if((i == s) || (i == m) || (i == l)){
        r += "#";
    }else{
        r += ch;
    }
}
console.log(r);