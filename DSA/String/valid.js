


let str = "[{()}{(]}]";
let s = [];
let b = [];
let count = 0;
let c = 0;
for(let i = 0; i < str.length; i++){
    if((str[i] === "(") || (str[i] === "{") || (str[i] === "[")) {
        s.push(str[i]);
        count++;
    }
    if((str[i] === ")") || (str[i] === "}") || (str[i] === "]")){
        b.push(str[i]);
        c++;
    }
}
let m = [];
    let a = s.concat(b);
    m.push(a);
 
    if(s.length === b.length){
        console.log("yes");
    
    }else{
        console.log("no");
       
    }

    


