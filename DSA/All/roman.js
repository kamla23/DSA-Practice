let a = "IX";
let s = 0;
let d = 0;
let t = 0;
let o = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}
for(let i = 0; i < a.length; i++){
     s += o[a[i]];
     d += o[a[i+1]];
     if(s > d){
        t += d - s;
        
     }else{
        t += s;
     }

} 
console.log(t);