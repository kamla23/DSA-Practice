
function Binory(n){
    let c = 0
    let pawer = 0;
    while(n > 0){
        let last = n%10;
        pawer = pawer+last*(2**c);
        c++;
        n = Math.floor(n/10);
    }
    return pawer;
}
console.log(Binory(1101));
console.log(Binory(1011));
console.log(Binory("0001"));
console.log(Binory(100000));
console.log(Binory("00000"));
console.log(Binory(11111111));
console.log(Binory(1001100110011001));
console.log(Binory(100000000));
console.log(Binory(101010));
console.log(Binory(1000001));
console.log(Binory(10));
console.log(Binory(11111));
console.log(Binory(1111111111111111))
console.log(Binory("011011010111"));
