//Merge object// 

function mergeObjects(obj1, obj2){
        let merge = {...obj1, ...obj2};
        let s = Object.assign({}, obj1, obj2);
        // return s;
        return merge;
}
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); 
console.log(mergeObjects({name: "Ram"}, {age: 76})); 

