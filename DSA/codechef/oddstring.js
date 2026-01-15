function solve(n, s){
    let f = {};

    for(let ch of s){
        if(f[ch] === undefined){
            f[ch] = 1;
        }else{
            f[ch]++;
        }
    }
    console.log(f)

    for(let key in f){
        if(f[key] > 2){
            console.log("NO");
            return;
        }
    }

    console.log("YES");
}
solve(1, "a");
solve(2, "bb");
solve(5, "xxxxx");
solve(7, "aabccbd");
solve(8, "aabccbdc");
solve(8, "abcdabcd");
solve(8, "codechef");
solve(5, "abcde");


