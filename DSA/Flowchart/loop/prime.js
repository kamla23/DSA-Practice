
function prime(n){
    for(let i = 2; i <= n; i++){
         let c = 0;

         for(let j = 1; j <= i; j++){
            if(i%j == 0){
                c++;
            }
         }

         if(c == 2){
            console.log(i);
         }
    }
}
console.log(prime(10)); 