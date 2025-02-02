function solve(numAsString, ...operations) {
    let num = Number(numAsString);
    operations = [...operations];

    for (const operation of operations) {
        if (operation === 'chop') {
            num /= 2;
        } else if (operation === 'dice') {
            num = Math.sqrt(num);
        } else if (operation === 'spice') {
            num += 1;
        } else if (operation === 'bake') {
            num *= 3;
        } else if (operation === 'fillet') {
            num *= 0.80;
        }

        console.log(num);
    }
}

function solve2(numAsString, ...operations) {
    let num = Number(numAsString);
    let operationEnum = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice: num => num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.80
    }

    operations.forEach(el => {
        num = operationEnum[el](num);
        console.log(num);
    });
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve2('9', 'dice', 'spice', 'chop', 'bake', 'fillet');