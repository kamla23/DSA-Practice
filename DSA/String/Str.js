

// let str = "Lashika Sahu";
// let a = str.split(" ");
// let b = a[1].split('').reverse().join('');
// console.log(a[0],b);



// let a = "apple";
// for(let i = a.length-1; i >= 0; i--){
//     console.log(a[i]);
// }
// console.log(a);


// let students = {
//     name:"ganotri",
//     age : 12,

//     name: "kamla",
//     age: 18,

//     name:"reena",
//     age: 20,

//     name : "meena",
//     age: 13,

//     name: "teena",
//     age:21,

// }
// for( let i in students.length){
//     if(students[i].age >= 18){
//         console.log(students[i].age);
//     }
// } 


let data = {
    a:10,
    b:"yello",
    c:20,
    d:"true",
    e:15
}

let sum = 0;
for(key in data){
    if(typeof data[key] === "numbers"){
        sum = sum + data[key]
    };
}

