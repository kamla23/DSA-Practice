let n = 5;
for(let i = 1; i <= n; i++){
    let s = "";

    for(let j = 1; j <= n-1; j++){
       s += " "
    }

    for(let k = 1; k <= i; k++){
        s += "* "
    }
    console.log(s);
}