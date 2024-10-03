function solve(input) {
    let command = input.shift();
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let income = 0;
    while (command !== 'end of shift') {
        const match = command.match(pattern);
        if (match) {
            let { customer, product, count, price } = match.groups;
            const totalPrice = Number(count) * Number(price);
            income += totalPrice;

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        command = input.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

solve(
    [
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
    ]
);

solve(
    [
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift'
    ]
);