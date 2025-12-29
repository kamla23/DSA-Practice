

let longest = function(s) {
    let l = 0;
    for(let i = 0; i < s.length; i++){
        let c = "";

        for(let j = i; j < s.length; j++){
            if(c.includes(s[j])){
               break; 
            }
            c += s[j];
            l = Math.max(l, c.length);
        }
    }
    return l;
};
console.log(longest("abcabcbb"));