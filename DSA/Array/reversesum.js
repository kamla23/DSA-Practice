

function reverseSum(l1, l2){
     let a1 = 0;
     let a2 = 0;
     for(let i = l1.length-1; i >= 0; i--){
        a1 = a1*10+l1[i];
     }

     for(let j = l2.length-1; j >= 0; j--){
        a2 = a2*10+l2[j];
     }

     let sum = a1+a2;
    //  console.log(sum);
     let r = [];
     if(sum === 0){
        r.push(0);
     }

     while(sum > 0){
        let d = sum%10;
        r.push(d);
        sum = Math.floor(sum/10);
     }
     return r;
}
console.log(reverseSum([2,4,3], [5,6,4]));
console.log(reverseSum([0], [0]));
console.log(reverseSum([9,9,9,9,9,9,9], [9,9,9,9]));


//with method//

function twoSum(arr1, arr2){
    let n1 = Number(arr1.slice().reverse().join(''));
    let n2 = Number(arr2.slice().reverse().join(''));

    let s = n1+n2;

    return String(s).split('').reverse().map(Number);
}
console.log(twoSum([2,4,3], [5,6,4]));
console.log(twoSum([0], [0]));
console.log(twoSum([9,9,9,9,9,9,9], [9,9,9,9]));