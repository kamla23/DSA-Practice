//============== One poniter=============//
// function dublicate(arr){
//     let r = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             r = arr[i];
//         }
//     }
//     return r;
// }
// console.log(dublicate([1,2,2,3,4]));

//=================two pointer================//
function dublicate(arr) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = 1;
  while (end < arr.length) {
    if (arr[start] === arr[end]) {
      return arr[start];
    }
    start++;
    end++; 
  }
  return -1;
}
console.log(dublicate([1, 5, 2, 5, 3, 4])); 
