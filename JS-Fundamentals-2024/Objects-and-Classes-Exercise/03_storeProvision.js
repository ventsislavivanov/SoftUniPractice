function solve(stock, order) {
    const products = [];

    while (stock.length > 0) {
        const name = stock.shift();
        const quantity = Number(stock.shift());

        products.push({name, quantity});
    }

    while (order.length > 0) {
        const name = order.shift();
        const quantity = Number(order.shift());

        const existProduct = products.find(product => product.name === name);
        if (existProduct) {
            existProduct.quantity += quantity;
        } else {
            products.push({name, quantity});
        }
    }

    for (const productObj of products) {
        console.log(`${productObj.name} -> ${productObj.quantity}`);
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
// solve([
//         'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
//     ],
//     [
//         'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//     ]
// );