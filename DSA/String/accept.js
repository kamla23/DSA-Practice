

let str = "I love programming in JavaScript";

let s = str.split("");
console.log(s);
let w = "";

for(let i = 0; i < s.length-1; i++){
        if(s[i] < s.length){
            w += s.length;
            console.log(w);
        }
}

