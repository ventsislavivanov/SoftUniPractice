function solve(input) {
    let a1 = +input.shift();
    let a2 = +input.shift();
    let n = +input.shift();

    for (let s1 = a1; s1 <= a2 - 1; s1++) {
        for (let s2 = 1; s2 <= n - 1; s2++) {
            for (let s3 = 1; s3 <= n / 2 -1 ; s3++) {
                if (s1 % 2 !== 0 && (s2 + s3 + s1) % 2 !== 0) {
                    let combo = `${String.fromCharCode(s1)}-${s2}${s3}${s1}`;
                    console.log(combo)
                }
            }
        }
    }
}

// solve(["86", "88", "4"]);
solve(["71", "74", "6"]);
// solve(["69", "72", "4 "]);
