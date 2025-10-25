function pangram(str){
    let a = str.toLowerCase();
    let b = new Set();
    for(let i = 0; i < a.length; i++){
        if(a[i] >= "a" && a[i] <= "z"){
            let c = a[i];
            b.add(c);
        }
    }
    if(b.size === 26){
        return "YES";
    }else{
        return "NO";
    }
}
console.log(pangram("The quick brown fox jumps over a lazy dog"));
console.log(pangram("The quick brown fox jumps over the dog"));
console.log(pangram("Pack my box with five dozen liquor jugs"));
console.log(pangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(pangram("Cwm fjord bank glyphs vext quiz!"));
console.log(pangram("abcdefghijklmnopqrstuvwxyz"));
console.log(pangram("Z Y X W V U T S R Q P O N M L K J I H G F E D C B A"));
console.log(pangram("The five boxing wizards jump quickly with no help"));
console.log(pangram("The quick brown fox jumps over a lazy dog."));
