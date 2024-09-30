function solve(input) {
    let result = {};
    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());

        // if (! result.hasOwnProperty(resource)) {
        //     result[resource] = quantity;
        // } else {
        //     let currQuantity = result[resource];
        //     result[resource] = currQuantity + quantity;
        // }
        if (resource in result) {
            result[resource] += quantity;
        } else {
            result[resource] = quantity;
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
);