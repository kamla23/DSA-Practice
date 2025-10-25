
function invert(str){
let rev = str.split("").reverse().join("");
// console.log(rev);
let s = "";
    for(let i = 0; i < rev.length; i++){
        if(rev[i] == rev[i].toUpperCase()){
             s += rev[i].toLowerCase();
             
        }else{
             s += rev[i].toUpperCase();
    
        }
    }
    return s;
}
console.log(invert("dLROW YM sI HsEt"));
console.log(invert("ytInIUgAsnOc"));
console.log(invert("step on NO PETS"));
console.log(invert("XeLPMoC YTiReTXeD"));