let n = 5; 
for(let i = 1; i <= n; i++){
    let s = "";
    for(let j = 1; j <= n; j++){
        if(j === 1 ||j === i|| i === n ){
            s += "*"
        }else{
            s += " "
        }
    }
    console.log(s);
}
