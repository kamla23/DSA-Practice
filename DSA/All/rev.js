

// let str = "javascript is fun";
// let rev = str.trim().split(/\s+/).reverse().join("");
// console.log(rev);


let s = "()";
let arr = [];

let m = {
    ")":"(",
    "]":"[",
    "}":"{"
}

for(let c of s){
    if(c === "(" || c === "[" || c === "{"){
        arr.push(c);
    }else if(c === ")" || c === "]" || c === "}"){
        if(arr.pop() !== m[c]){
            console.log("no");
        }
    }
    if(arr.length === 0){
        console.log("yes");
    }else{
        console.log('no');
    }
}