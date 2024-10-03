function solve(arr) {
    let items = [];
    let totalPrice = 0;
    let command = arr.shift();

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;

    while (command !== "Purchase") {
        const match = command.match(pattern);
        if (match) {
            const { name, price, quantity} = match.groups;
            const furniturePrice = Number(price) * Number(quantity);

            items.push(name);
            totalPrice += furniturePrice;
        }

        command = arr.shift();
    }

    console.log("Bought furniture:");
    items.forEach(furniture => console.log(furniture));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}




// solve([
//         '>>Sofa<<312.23!3',
//         '>>TV<<300!5',
//         '>Invalid<<!5',
//         'Purchase'
//     ]
// );

// solve(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase']
// );

solve(
    ['>Invalid<<!4',
        '>Invalid<<!2',
        '>Invalid<<!5',
        'Purchase']

);