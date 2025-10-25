
// function vowelinks(str){
// let vowel = "aeiou";
// let w = str.split(" ");
// let f;
// let l;
// console.log(w);
// for(let i = 0; i < w.length-1; i++){
//      f = w[i].slice(-1);
//      l = w[i+1][0];
// }
// if(vowel.includes(f) && vowel.includes(l)){
//     return "true";
// }else{
//     return "false";
// }

// }
// console.log(vowelinks("a very large apliance"));
// console.log(vowelinks("go to edabit"));
// console.log(vowelinks("an open fire"));
// console.log(vowelinks("a sudden applause"));

//===============================================================================//


// function arrOfMultipel(num, length){
//     let m;
//     let a = [];
//     for(let i = 1; i <= length; i++){
//         m = num*i;
//         a.push(m);
//     }
//     return a;  
// }
// console.log(arrOfMultipel(7, 5));
// console.log(arrOfMultipel(12, 10));
// console.log(arrOfMultipel(17, 6));


//====================================================================//

function sockMerChant(arr){
    let f = {};
    for(let num of arr){
        if(f[num]){
            f[num]++;
        }else{
            f[num] = 1;
        }
    }

    let total = 0;
    for(let c in f){
        total += Math.floor(f[c]/2);
    }
    return total;
}
console.log(sockMerChant([10, 20, 20, 10, 10, 30, 50,10, 20]));
console.log(sockMerChant([50, 20, 30, 90, 30, 20, 50, 20, 90]));
console.log(sockMerChant([]));