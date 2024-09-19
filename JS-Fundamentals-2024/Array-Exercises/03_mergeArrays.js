function solve(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        const el2 = arr2[i];

        if (i % 2 === 0) {
            const sum = (Number(el1) + Number(el2))
            result.push(sum);
        } else {
            const concatenation = el1 + el2;
            result.push(concatenation);
        }
    }

    console.log(result.join(' - '));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);