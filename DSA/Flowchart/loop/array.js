

//array hcf//


function hcfArray(arr){
    let small = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < small){
            small = arr[i]
        }
    }
    let hcf = 1;
    for(let i = 1; i <= small; i++){
        let c = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j]%i === 0){
                c++;
            }
        }
        if(c === arr.length){
            hcf = i;
        }
    }
    return hcf;
}
console.log(hcfArray([24, 36, 60, 48]))