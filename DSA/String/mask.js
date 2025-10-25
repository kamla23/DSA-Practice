

function maskify(str){
    let has = "";
     for(let i = 0; i < str.length; i++){

        if(i < str.length-4){
            has += "#";
        }else{
            has += str[i];
        }
    }
    return has;
}
console.log(maskify("12@34#56$78"));

