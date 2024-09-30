function solve(arr) {
    let catalogue = [];
    for (const arrElement of arr) {
        let [name, price] = arrElement.split(" : ");
        price = Number(price)
        catalogue.push({name, price});
    }

    const sortedCatalogues = catalogue.sort((a, b) => a.name.localeCompare(b.name));
    let curFirstLetter = ''

    for (const productObj of sortedCatalogues) {
        if (curFirstLetter === productObj.name.charAt(0)) {
            console.log(`  ${productObj.name}: ${productObj.price}`);
        } else {
            curFirstLetter = productObj.name.charAt(0);
            console.log(curFirstLetter);
            console.log(`  ${productObj.name}: ${productObj.price}`);
        }
    }
}

solve([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);

// solve([
//         'Omlet : 5.4',
//         'Shirt : 15',
//         'Cake : 59'
//     ]
// );