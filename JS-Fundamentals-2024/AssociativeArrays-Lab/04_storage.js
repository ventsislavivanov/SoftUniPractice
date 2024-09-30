function solve(input) {
    let map = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (! map.has(product)) {
            map.set(product, quantity);
        } else {
            let curQuantity = map.get(product);
            const newWQuantity = curQuantity += quantity;
            map.set(product, newWQuantity);
        }
    }

    for (const el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
solve(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);