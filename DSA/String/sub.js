

function getAllSubstrings(str){
    let sub = [];
    for(let i = 0;i < str.length; i++){
        for(let j = i+1; j <= str.length; j++){
            sub.push(str.slice(i,j));
        }
    }
    return sub;
}
console.log(getAllSubstrings("abc")); 
console.log(getAllSubstrings("ab"));
console.log(getAllSubstrings("x"));


function getAllSubstrings(str) {
    let subs = [];
    for (let i = 0; i < str.length; i++) {
        let temp = ""; 
        for (let j = i; j < str.length; j++) {
            temp += str[j];     
            subs.push(temp);  
        }
    }
    return subs;
}

console.log(getAllSubstrings("abc")); 
console.log(getAllSubstrings("ab"));  
console.log(getAllSubstrings("x"));  
