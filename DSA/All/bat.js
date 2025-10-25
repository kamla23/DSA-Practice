

let arr = [[0,0],[1,3],[2,2],[0, 4],[1,5]];

let hit = 0;
let bat = 0;
let avg ;
for(let i = 0; i < arr.length; i++){
//    for(let j = 0; j < arr[i].length; i++){
//     if(j%2 == 0){
//     hit += arr[i][0];
//    }else{
//     bat += arr[i][1];
//    }

   


hit += arr[i][0];
bat += arr[i][1];
}
console.log(hit, bat); 
    if(bat === 0){
       avg = ".000";
    }else{
   avg = "." + Math.round((hit/bat)*1000);
    }
console.log(avg);  