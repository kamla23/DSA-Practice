var number = function(colors) {
    let n = colors.length;
    let count = 0;

    for(let i = 0; i < n; i++){
        let a = colors[i];
        let b = colors[(i+1)%n];
        let c = colors[(i+2)%n];

        if(a !== b && b !== c){
            count++;
        }
    }
    return count;
}
console.log(number([1,0,1,0,1,0]))