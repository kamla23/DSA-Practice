

function emaphasise(str){
    let s = str.toLowerCase();
    let words = s.split(" ");
    // console.log(words);
    for(let i = 0; i < words.length; i++){
        let w = words[i];
        if(words.length > 0){
            words[i] = w[0].toUpperCase() + w.slice(1);
        }
    }
    return words.join(' ');
}
console.log(emaphasise("hello world"));
console.log(emaphasise("GOOD MORNING"));
console.log(emaphasise("99 red balloons!")); 