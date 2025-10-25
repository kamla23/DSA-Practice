
function missArrNumber(arr){
    let n = arr.length+1;
    let total = n*(n+1)/2;
    let arrsum = arr.reduce((sum,num) => sum+num);
    let miss = total-arrsum;
    return miss;
}
console.log(missArrNumber([1,2,3,5]));
console.log(missArrNumber([8,2,4,5,3,7,1]));
console.log(missArrNumber([1])); 