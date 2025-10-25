

function substring(str){
    let sub = [];
    for(let i = 0; i < str.length; i++){
        let s = "";
        for(let j = i; j < str.length; j++){
            s+=str[j];
            sub.push(s);
            console.log(s);
        }
    }
    return sub;
}
console.log(substring("abc"));