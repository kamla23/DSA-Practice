
let str = "aaabb";
let k = 3;
for(let j = 0; j < str.length; j++){
    let s = {};
    for(let i = j; i < str.length; i++){
        let v = str[j];
        if(s[v] == undefined){
            s[v] = 1;
        }else{
            s[v] = s[v]+1;
        }
    }
     console.log(s)
}


