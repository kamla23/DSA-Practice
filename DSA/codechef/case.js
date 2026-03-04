let input = `3
8
AabBcCDd
2
ab
3
XXY`.trim().split("\n");

let T = Number(input[0]);
let index = 1;

for (let t = 0; t < T; t++) {
    let s = input[index + 1].trim();
    index += 2;

    let freq = new Array(26).fill(0);

    for (let ch of s) {
        let lower = ch.toLowerCase();
        freq[lower.charCodeAt(0) - 97]++;
    }

    let max1 = 0, max2 = 0;

    for (let f of freq) {
        if (f > max1) {
            max2 = max1;
            max1 = f;
        } else if (f > max2) {
            max2 = f;
        }
    }

    console.log(max1 + max2);
}
