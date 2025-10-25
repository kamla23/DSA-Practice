


function numberSplit(num){
    let a = Math.floor(num/2);
    let re = num - a;

    return [a, re];
}
console.log(numberSplit(-11));