

// o(1) - Constant Time//

// let arr = [1,2,3,4,5,6];
// console.log(arr[0]);

//==========================================================================================//

//o(n) - Linear Time//
// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i <= arr.length; i++) {
//     console.log(i);
// }

//===================================================================================//

//o(n**2) - Quadratic Time//
// let n = 5; 
// for (let i = 0; i < n; i++) {        
//     for (let j = 0; j < n; j++) {    
//         console.log(i, j);          
//     }
// }


//=============================================================================//

//o(log n) - logarithmic time//
// let arr = [1, 3, 5, 7, 9, 11, 13, 15];
// let target = 11;

// let low = 0, high = arr.length - 1;

// while (low <= high) {
//     let mid = Math.floor((low + high) / 2); 

//     if (arr[mid] === target) {
//         console.log("Found at index:", mid);
//         break;
//     } else if (arr[mid] < target) {
//         low = mid + 1; 
//     } else {
//         high = mid - 1; 
//     }
// }

//==============================================================================//

// O(n + m) - Two Different Inputs//
// let arr1 = [1, 2, 3];   
// let arr2 = [4, 5, 6, 7];  
// for (let a of arr1) {
//     console.log(a);
// }
// for (let b of arr2) {
//     console.log(b);
// }

//=====================================================================================//

// O(n log m) → Linear * Logarithmic//
// let arr1 = [10, 20, 30, 40];  
// let arr2 = [5, 15, 25, 35, 45, 55, 65, 75]; 

// for (let x of arr1) {                   
//     let low = 0, high = arr2.length - 1;

//     while (low <= high) {               
//         let mid = Math.floor((low + high) / 2);

//         if (arr2[mid] === x) {
//             console.log("Found", x);
//             break;
//         } else if (arr2[mid] < x) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
// }

//=======================================================================================//

// O(n * m)  - Nested Loops with Different Sizes//

// let n = 3; 
// let m = 4;
// for (let i = 0; i < n; i++) {        
//     for (let j = 0; j < m; j++) {    
//         console.log(i, j);          
//     }
// }
//=======================================================================================//


// 



