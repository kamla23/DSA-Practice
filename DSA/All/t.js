

// function filterArray(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if( typeof arr[i] === "number" && arr[i] >= 0 && arr[i] <= 200){
//             arr1.push(arr[i]);
//         }
//     }
//  return arr1;
// }
// console.log(filterArray([1,2,"a", "b"]));
// console.log(filterArray([1, "a", 0, 15]));
// console.log(filterArray([1,2,"aasf", "1", "123", 123]));


// function secret(arr){
//     let str = [];
//     for(let i = 0; i < arr.length; i++){
//             str.push(arr[i][0]);
//         }
//         let s = str.sort().join("");
//         return s;
// }
// console.log(secret(["Adam", "Sarah", "Malcolm"]));
// console.log(secret(["Harry", "Newt", "Luna","Cho"]));
// console.log(secret(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));


 function drinkByDrinks(drinks){ 

    for(let i = 0; i < drinks.length; i++){
        for(let j = i+1; j < drinks.length; j++){
            if(drinks[i].price > drinks[j].price){
                let t = drinks[i];
                drinks[i] = drinks[j];
                drinks[j] = t; 
            }  
        }
    }
    let a = [];
    for(let i = 0; i < drinks.length; i++){
        a.push(drinks);
    }
    return a;
}
 const drinks = [
        {name:"lemonade", price:50},
        {name:"line", price:10}
    ]
 console.log(drinkByDrinks(drinks)); 




