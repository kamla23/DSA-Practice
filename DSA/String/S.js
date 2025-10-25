

let str = "kamla Fuleshri";
let vowel = "AEIOUaeiou";
let  r = "";

let f = 0;
let m = Math.floor(str.length/2);
let l = str.length-1;
for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if((i == f) || (i == m )|| (i == l)){
        r += "#";
    }else if(vowel.includes(str[i])){
        r += str[i].toUpperCase();
    }else{
        r += ch;
    }
}
console.log(r);