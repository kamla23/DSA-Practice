function birthdayCakeCandles(candles) {
let max = -Infinity;
let c = 0;


for(let i = 0; i < candles.length; i++){
    if(candles[i] > max){
        max = candles[i];
    }
}

for(let i = 0; i < candles.length; i++){
    if(candles[i] === max){
        c++;
    }
}
return c;
}
console.log( birthdayCakeCandles([1,2,3,4,4,4]));

