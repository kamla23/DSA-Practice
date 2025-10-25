
function MisssAndRepeat(arr){
let b = arr.sort((a,b) => a-b);
let dub = [];
let miss = []
    for(let i = 0; i < b.length; i++){
        if(b[i] === b[i+1]){
            dub.push(b[i]);
        } 

        if(b[i+1] > b[i]+1){
            for(let j = b[i]+1; j < b[i+1]; j++){
                miss.push(j)
            }
        }
    } 
  return [dub,miss];
}
console.log(MisssAndRepeat([3,1,3]));
console.log(MisssAndRepeat([4,3,6,2,1,1]));