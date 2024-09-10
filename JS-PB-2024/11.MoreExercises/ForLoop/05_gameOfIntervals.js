function solve(input) {
    let nPeople = Number(input.shift());

    let result = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;

    for (let i = 0; i < nPeople; i++) {
        let num = Number(input[i]);

        if (num >= 0 && num <= 9) {
            result += num * 0.2;
            a++;
        } else if (num >= 10 && num <= 19) {
            result += num * 0.3;
            b++;
        } else if (num >= 20 && num <= 29) {
            result += num * 0.4;
            c++;
        } else if (num >= 30 && num <= 39) {
            result += 50;
            d++;
        } else if (num >= 40 && num <= 50) {
            result += 100;
            e++;
        } else {
            result = result / 2;
            f++;
        }
    }


    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${(a / nPeople * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(b / nPeople * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(c / nPeople * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(d / nPeople * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(e / nPeople * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(f / nPeople * 100).toFixed(2)}%`);
}

solve([

    '10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20'


])