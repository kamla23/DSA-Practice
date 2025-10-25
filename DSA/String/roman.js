


let str = "CD";
let s = str.split("");
let T = 0;
let roman = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000}

for(let i = 0; i < s.length; i++){
    if(i+1 < s.length && roman[s[i]] < roman[s[i+1]]){
        T += roman[s[i+1]] - roman[s[i]];
        i++;
    }else{
        T += roman[s[i]];
    }
}   
console.log(T);