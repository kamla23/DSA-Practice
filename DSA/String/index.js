

function indexsuffle(str){
    let s = "";
    let b = "";
    for(let i = 0; i < str.length; i++){
        if(i%2 == 0){
            s += str[i];
        }else{
            b += str[i];
        }
    }
    return s+b;
}
console.log(indexsuffle("holiday")); 