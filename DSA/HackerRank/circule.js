// Change input here to test other cases
let input = `5 8
0 4
2 6
1 5
3 7
4 4`;

let lines = input.trim().split("\n");

let [n, c] = lines[0].split(" ").map(Number);

let points = [];
for (let i = 1; i <= n; i++) {
    points.push(lines[i].split(" ").map(Number));
}

// circular distance function
function dist(x, y) {
    let d = Math.abs(x - y);
    return Math.min(d, c - d);
}

let answer = 0;

// compare every pair of pairs
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {

        let [a, b] = points[i];
        let [p, q] = points[j];

        let d1 = dist(a, p);
        let d2 = dist(a, q);
        let d3 = dist(b, p);
        let d4 = dist(b, q);

        let minDist = Math.min(d1, d2, d3, d4);
        answer = Math.max(answer, minDist);
    }
}

console.log(answer);
