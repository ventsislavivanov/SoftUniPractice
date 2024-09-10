function solve(input) {

    let start = Number(input.shift());
    let end = Number(input.shift());

    let result = '';
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end ; j++) {
            for (let k = start; k <= end ; k++) {
                for (let l = start; l <= end ; l++) {
                    if (((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0)) && i > l && ((j + k) % 2 === 0)) {
                        let combination =`${i}${j}${k}${l}`;
                        result += combination + ' ';
                    }
                }
            }
        }
    }

    console.log(result);
}

solve(["5", "8"]);