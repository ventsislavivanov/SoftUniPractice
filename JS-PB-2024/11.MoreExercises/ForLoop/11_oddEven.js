function solve(input) {
    let n = Number(input.shift());

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;


    for (let i = 0; i < n; i++) {
        let num = Number(input[i]);

        if (i % 2 !== 0) {
            evenSum += num;
            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
        } else {
            oddSum += num;
            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
        }
    }


    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin !== Number.MAX_SAFE_INTEGER ? oddMin.toFixed(2) : 'No'},`);
    console.log(`OddMax=${oddMax !== Number.MIN_SAFE_INTEGER ? oddMax.toFixed(2) : 'No'},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin !== Number.MAX_SAFE_INTEGER ? evenMin.toFixed(2) : 'No'},`);
    console.log(`EvenMax=${evenMax !== Number.MIN_SAFE_INTEGER ? evenMax.toFixed(2) : 'No'}`);
}

// solve(['6', '2', '3', '5', '4', '2', '1'])
// solve(['2', '1.5', '-2.5']) //OK
// solve(['1', '1']); // OK
// solve(['0']); // OK
solve(['5', '3', '-2', '8', '11', '-3']);
// solve(['4', '1.5', '1.75', '1.5', '1.75']);
// solve(['1', '-5']);
// solve(['3', '-1', '-2', '-3']);