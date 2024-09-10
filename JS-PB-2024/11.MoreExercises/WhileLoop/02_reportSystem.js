function solve(input) {
    let expectedMoney = Number(input.shift());
    let collectMoney = 0;

    let index = 0;
    let inputElement = input[index];

    let csCounter  = 0;
    let ccCounter  = 0;

    let csSum  = 0;
    let ccSum  = 0;

    while (expectedMoney >= 0) {
        if (inputElement === "End") {
            console.log('Failed to collect required money for charity.')
            break;
        }
        if(collectMoney >= expectedMoney) {
            break;
        }

        let currentProductPrice = Number(inputElement);
        let hasError = false;

        if (index % 2 === 0) { //cash
            if (currentProductPrice <= 100) {
                collectMoney += currentProductPrice;
                csSum += currentProductPrice;
                csCounter++
            } else {
                hasError = true;
            }
        } else { // card
            if (currentProductPrice >= 10) {
                collectMoney += currentProductPrice;
                ccSum += currentProductPrice;
                ccCounter++
            } else {
                hasError = true;
            }
        }

        if (hasError) {
            console.log('Error in transaction!')
        } else {
            console.log('Product sold!')
        }

        index++;
        inputElement = input[index];
    }

    if (collectMoney >= expectedMoney) {
        console.log(`Average CS: ${(csSum/ csCounter).toFixed(2)}`);
        console.log(`Average CC: ${(ccSum / csCounter).toFixed(2)}`);
    }
}

solve(['500', '120', '8', '63', '256', '78', '317']);
// solve(['600', '86', '150', '98', '227', 'End']);