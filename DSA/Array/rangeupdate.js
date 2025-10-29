

let arr = [0,0,0,0,0];

let d = [];
d[0] = arr[0];
for(let i = 1; i < arr.length; i++){
    d[i] = arr[i]- arr[i-1];
}
console.log(d);

function update(d, l, r, v){
        d[l] += v;
        if(r+1 < d.length){
            d[r+1] -= v
        }
}
update(d, 1,3,5);
update(d, 2,4,2);
console.log(d);

let a = [];
a[0] = d[0];
for(let j = 1; j < arr.length; j++){
    a[j] = a[j-1] + d[j];
}
console.log(a); 