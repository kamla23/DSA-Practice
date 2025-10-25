

let str = "kamla fuleshri";
let vowel = "aieou";
let w = "";
for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            let a = str[i].toUpperCase();
            w += a;
        }else{
            w += str[i];
        }
        
}
console.log(w);

