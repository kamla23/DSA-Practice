
let n = 5;
for(let i = 1; i <= n; i++){
   let s = "";

    for(let j = 1; j <= i; j++){
        s = s+j+" "
    }
    // console.log(s);

    for(let j = i-1; j >= 1; j--){
        s += j+" ";
    }
    console.log(s);
}


