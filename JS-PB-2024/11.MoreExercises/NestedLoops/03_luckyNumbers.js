function solve(input) {
    let n = Number(input.shift());

    let result = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    let sum1 = i +j;
                    let sum2 = k + l;

                    if (sum1 === sum2 && n % sum1 === 0) {
                        let combination =`${i}${j}${k}${l}`;
                        result += combination + ' ';
                    }
                }
            }
        }
    }

    console.log(result);
}

solve(['24'])