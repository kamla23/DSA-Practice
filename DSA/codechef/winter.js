let a = 10;
let b = 20;
let t = [5, 6, 25, 4, 3, 30, 2];

let w = false;
let c = 0;

for (let j = 0; j < t.length; j++) {
    if (t[j] < a) {
        if (!w) {
            c++;
            w = true;
        }
    } else if (t[j] > b) {
        w = false;
    }
}
console.log(c);
