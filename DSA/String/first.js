
// first non -repeating//

let str = "aabb";
let s = {};
for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(s[ch] === undefined){
        s[ch] = 1;
    }else{
        s[ch] += 1;
    }
}
console.log(s);
for(let i = 0; i < str.length; i++){
    if(s[str[i]] == 1){
        console.log(i);
        return;
    }
}
console.log(-1);
let i = 0;
for( j in s){
    console.log(i);
    break;
}
console.log(-1);

