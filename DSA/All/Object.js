



// function toArray(obj){
    
// }


// let  o = {a:5, b:6};
// let a = [];

// console.log(Object.entries(o));

// for(let i in o){
//     a.push(i,o[i]);
// }
// console.log(a); 



// function toArray(obj){
//     return Object.entries(obj)
    //    return Object.keys(obj);
    //    return Object.values(obj);
// }
// console.log(toArray({a:1, b:2}));


// function toArray(obj){
//     const arr = [];
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             arr.push([key, obj[key]]);
//         }
//     }
//     return arr;
// }
// console.log(toArray({a:1, b:5}));



// function toArray(obj){
//     let  arr = [];
//     for(let key in obj){
//         arr.push([key, obj[key]]);
//     }
//     return arr; 
// } 
// console.log(toArray({a:1, b:2}))


// function toArray(obj){
//     let arr = [];
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             arr.push([key, obj[key]]);
//         }
//     }
//     return arr;
// } 
// console.log(toArray({a:5, b:4}));


function boolean(str){
    let arr = [];
    for(let i = 1; i <= str.length; i++){
        if(i == 1){
            arr.push(true);
        }else{
            arr.push(false);
        }
    }
return arr;
}
console.log(boolean("100101"));
console.log(boolean("10"));
console.log(boolean("001"));