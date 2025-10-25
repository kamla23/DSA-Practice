

// convert into pascalCase//

function PascalCase(str){
    let s = "";
  for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(ch === " " || ch === "-" || ch === "_"){
        continue;
    }
    if(i === 0 || str[i-1] === " " || str[i-1] === "-" || str[i-1] === "_"){
        s += ch.toUpperCase();
    }else{
        s += ch.toLowerCase();
    }
  }
  return s;
}
console.log(PascalCase("hello_world-from chat gpt"));

