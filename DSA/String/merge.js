

function merge(a, b){
    let ave ;
let m = [...a, ...b].sort((x, y) => x - y);
let sum = 0;
for(let i = 0; i < m.length; i++){
    sum += m[i];
}
if(m.length%2 === 0){
    let m1  = m[m.length/2-1];
    let m2  = m[m.length/2];
    ave = (m1+m2)/2;
}else{
    ave = m[Math.floor(m.length/2)];
}
return ave;
}
console.log(merge([1,3],[2]));
console.log(merge([1,2],[4,14])); 

