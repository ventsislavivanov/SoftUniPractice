function solve(input) {
    let topFirst = +input.shift();
    let topSecond = +input.shift();
    let topThird = +input.shift();

    for (let i = 1; i <= topFirst; i++) {
        for (let j = 1; j <= topSecond; j++) {
            for (let k = 1; k <= topThird; k++) {
                let combo = '';
                if (i % 2 === 0 && k % 2 === 0 &&
                    (j === 2|| j === 3|| j === 5|| j === 7)) {
                    combo += `${i} ${j} ${k}`;
                    console.log(combo)
                }
            }
        }
    }
}

solve(['3', '5', '5']);
// solve(["8", "2", "8"]);
