function solve(input) {
    let num1End = Number(input.shift());
    let num2End = Number(input.shift());
    let num3End = Number(input.shift());

    for (let i = 1; i <= num1End; i++) {
        for (let j = 1; j <= num2End; j++) {
            for (let k = 1; k <= num3End; k++) {
                if (i % 2 === 0 && k % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7)) {
                    console.log(`${i} ${j} ${k}`)
                }
            }
        }
    }
}

solve(['3', '5', '5']);