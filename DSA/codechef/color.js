
let input = `3
3
1 2 3
3
3 3 3
5
3 3 4 4 1`;


let lines = input.trim().split("\n");
let T = parseInt(lines[0]);
let index = 1;

for (let i = 1; i <= T; i++) {
    // let n = Number(lines[index]);
    let a = lines[index + 1].trim().split(" ").map(Number);
    index += 2;
// console.log(n, a);
    let f = {};
    for (let v of a) {
        if (f[v] !== undefined) {
            f[v]++;
        } else {
            f[v] = 1;
        }
    }
// console.log(f);

    let max = 0;
    let small = Infinity;

    for (let key in f) {
        let color = Number(key);
        let freq = f[key];
// console.log(freq)
        if (freq > max) {
            max = freq;
            small = color;
        } else if (freq === max && color < small) {
            small = color;
        }
    }

    console.log(small);
}
