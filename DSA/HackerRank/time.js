function timeConversion(s) {
    let p = s.slice(-2);
    let time = s.slice(0, 8);
   
let [hour,minute,second] = time.split(":");
hour = parseInt(hour);

if(p === "AM"){
    if(hour === 12){
        hour = 0;
    }
}else{
    if(hour !== 12){
        hour = hour+12;
    }
}

hour = hour.toString().padStart(2, "0");
return `${hour}:${minute}:${second}`;
}

console.log(timeConversion("07:05:45PM"))