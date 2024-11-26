function solve(arr) {
    let line = arr.shift();
    let products = {};
    let totalSold = 0;

    while (line !== 'Complete') {
        let [command, quantity, food] = line.split(' ');
        quantity = Number(quantity);

        if (command === 'Receive') {
            if (quantity > 0) {
                products[food] = (products[food] || 0) + quantity;
            }
        } else if (command === 'Sell') {
            if (!products[food]) {
                console.log(`You do not have any ${food}.`);
            } else if (products[food] < quantity) {
                console.log(`There aren't enough ${food}. You sold the last ${products[food]} of them.`);
                totalSold += products[food];
                delete products[food];
            } else {
                console.log(`You sold ${quantity} ${food}.`);
                products[food] -= quantity;
                totalSold += quantity;

                if (products[food] === 0) {
                    delete products[food];
                }
            }
        }

        line = arr.shift();
    }

    for (const productsKey in products) {
        console.log(`${productsKey}: ${products[productsKey]}`)
    }

    console.log(`All sold: ${totalSold} goods`);
}

// solve(['Receive 105 cookies', 'Receive 10 donuts', 'Sell 10 donuts', 'Sell 1 bread', 'Complete']);
solve(['Receive 10 muffins', 'Receive 23 bagels', 'Sell 5 muffins', 'Sell 10 bagels', 'Complete'])