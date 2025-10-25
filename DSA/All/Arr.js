// function factorChain(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] % arr[i] !== 0) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     return "false";
//   } else {
//     return "true";
//   }
// }
// console.log(factorChain([3, 1, 12, 36]));
// console.log(factorChain([1, 1, 1, 1, 1]));
// console.log(factorChain([3, 6, 12, 36]));
// console.log(factorChain([2, 4, 6, 10, 12]));
// console.log(factorChain([10, 1]));

// function freeShopping(price) {
//   let total = 0;
//   for (let i in price) {
//     total += price[i];
//   }
//   if (total > 50.00) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(freeShopping({ shampoo: 5.99, "Ruber dusk": 15.99 }));
// console.log(freeShopping({"flatScreen tv":399.99}));
// console.log(freeShopping({"monopoly":11.99, "secret hitler":35.99}));

//  function dublicate(arr){
//   let obj = {};
//   for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]]){
//       obj[arr[i]]++;
//     }else{
//       obj[arr[i]] = 1;
//     }
//   }
//   let str = "";
//   for(key in obj){
//     if(obj[key] > 1){
//       str += key + " ";
//     }
//   }
//   return str;
// }
// console.log(dublicate([1,1,2,2,3,4,3]));

// function string(str){
//   let obj = {};
//   for(let i of str){
//     if(obj[i]){
//       obj[i]++;
//     }else{
//       obj[i] = 1;
//     }
//   }
//   return obj;
// }
// console.log(string([1,1,2,2,3,4,3]));

// function anagrams(arr){
//   let sort = arr.sort();
//   console.log(sort);
//   let sub = [];
//   for(let i = 0; i < arr.length; i++){
//         if(arr[i] == sort[i]){
//           sub.push(arr[i]);
//         }
//   }
// }
// console.log(anagrams(["eat", "ate", "tea", "tan", "nat"]));

function longestConsective(arr) {
  let s = arr.sort();
  console.log(s);
  let c = [];
  let d = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] < s[i + 1]) {
      // d++;
      c.push(s[i]);
    }
  } 
  return c;
}
console.log(longestConsective([100, 4, 200, 1, 3, 2]));
