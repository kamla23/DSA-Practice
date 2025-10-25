
// let str = "I Am Beautiful";
// let d = "";
// let capital = true ; 
// for(let i = 0; i < str.length; i++){
//     let c = str.charCodeAt(i)
//    if(str[i] == ' '){
//      d += ' '
//      capital = true;
// }else if (capital){
//     if(c >= 97 && c <= 122){
//         d += String.fromCharCode(c - 32);
//     }else{
//         d += str[i];
        
//     }
//     capital = false;
// }else{
//     if(c >= 65 && c <= 90){
//         d += String.fromCharCode(c+32);
//     }else{
//         d += str[i];
//     }
// }
// }
// console.log(d); 


// let str = "i am beautiful";
// let d = "";
// for(let i = 0; i < str.length; i++){
//     if(str[i-1] == ' '|| i == 0){
//      d += str[i].toUpperCase();
// }else{
//     d+= str[i]
// }
// }
// console.log(d); 

// function countInstaces(s, d){
//     let count = 0;
//     for(let i = 0; i < d.length; i++){
//         if(s == d[i]){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countInstaces("a", "edabit"));
// console.log(countInstaces("c", "Chamber of secrets"));
// console.log(countInstaces("b", "big fat bubble"));
// console.log(countInstaces("k", "krika mkerikk"));


function doubleChar(str){
    let repeat = "";
    for(let i = 0; i < str.length; i++){
        repeat+= str[i]+str[i];

    }
    return repeat;
}
console.log(doubleChar("String"));
console.log(doubleChar("Hello world"));
console.log(doubleChar("1234!"));