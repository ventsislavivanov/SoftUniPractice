function solve(input) {
    let man = Number(input.shift());
    let woman = Number(input.shift());
    let table = Number(input.shift());

    let count = 0;
    let result = '';

    for (let i = 1; i <= man ; i++) {
        for (let j = 1; j <= woman ; j++) {
            if (count >= table) {
                continue;
            }

            let combination = `(${i} <-> ${j})` + ' ';
            result += combination;
            count++;
        }
    }

    console.log(result);
}

solve(['2', '2', '6']);