let n = 4;
for(let i = 1; i <= n; i++){
    let s = "";
    for(let j = 1; j<= n-i; j++ ){
        s += "-"
    }
    // console.log(s);

    for(let k = 1; k <= 2*i-1; k++){
        s += "*"
    }
    console.log(s);
}

for(let i = 1; i <= n-1; i++){
     let r = ""
     for(let j = 1; j <= i; j++){
            r += "-"
     }
    //  console.log(r)

     for(let k = 1; k <= 2*(n-i)-1; k++){
        r += "*"
     }
     console.log(r);
}