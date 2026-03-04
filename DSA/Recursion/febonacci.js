
function febonacci(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    let feb = febonacci(n-1)+febonacci(n-2);
    return feb;
}
// console.log(febonacci(5));

for(let i = 0; i <= 5; i++){
    console.log(febonacci(i))
}