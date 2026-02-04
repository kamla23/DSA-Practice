

function staircase(n) {
    for(let i = 1; i <= n; i++){
        let s = "";
        
        for(let k = 1; k <= n-i; k++){
            s += " ";
        }
        for(let j = 1; j <= i; j++){
            s += "#";
        }
        console.log(s)
    }
}
console.log(staircase(6)); 

