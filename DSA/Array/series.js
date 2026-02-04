

function series(n){
    let c = 0;
    let arr = [];
    for(let i = 1; i <= n; i++){
         c = c*10+5;
         arr.push(c);
      
    }
    return arr.join("+");
}
console.log(series(3));