


// let str = "This is an amezing problem";
// let a = str.split(" ")
// let r = a.reverse();
// let v = r.join(" ");
// console.log(v);


let str = "This is an amezing problem";
let s = str.split(" ");
let d = "";
for(let i = s.length-1; i>=0; i--){
    d += s[i]+" ";
}
console.log(d);