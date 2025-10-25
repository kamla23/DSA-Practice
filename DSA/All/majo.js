
function majority(a) {
    let n = a.length;
    for(let i = 0; i < n; i++){
        let c = 0;
        for(let j = 0; j < n; j++){
            if(a[i] == a[j]){
                c++
            }
        }
        if(c > n/2){
            return a[i];
        }
    }
    return -1
}
console.log(majority([3,2,6,4,4,4]));
console.log(majority([5,5,5,5,5]));
console.log(majority([3,3,4,2,3,3,3]));
console.log(majority([1,2,3,4]));
console.log(majority([-1,-1,-1,2,3]));
console.log(majority([11,12,13,14,11,12,13,14]));