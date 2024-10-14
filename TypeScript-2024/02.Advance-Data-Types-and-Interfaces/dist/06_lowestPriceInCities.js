function lowestPrice(input) {
    const list = {};
    input.forEach(line => {
        let [townName, productName, productPrice] = line.split(' | ');
        if (!list.hasOwnProperty(productName)) {
            list[productName] = {};
        }
        if (!list[productName].hasOwnProperty('town')) {
            list[productName]['town'] = townName;
            list[productName]['price'] = Number(productPrice);
        }
        if (list[productName].hasOwnProperty('price') && list[productName]['price'] > productPrice) {
            list[productName]['price'] = Number(productPrice);
        }
    });
    for (const key in list) {
        console.log(`${key} -> ${list[key]['price']} (${list[key]['town']})`);
    }
}
lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
//# sourceMappingURL=06_lowestPriceInCities.js.map