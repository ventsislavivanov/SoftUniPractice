function solve(input) {
    let nCustomers = Number(input.shift());
    let basket = 1.50;
    let wreath = 3.80;
    let chocolateBunny = 7;


    let index = 0;
    let command = input[index++];
    let sumCustomersAmount = 0;


    for (let i = 0; i < nCustomers; i++) {
        let count = 0;
        let countBasket = 0;
        let countWreath = 0;
        let countChocolateBunny = 0;
        while (command !== 'Finish') {
            count++;
            switch (command) {
                case 'basket': countBasket++; break;
                case 'wreath': countWreath++; break;
                case 'chocolate bunny': countChocolateBunny++; break;
            }
            command = input[index++];
        }

        let customerAmount = basket * countBasket + wreath * countWreath + chocolateBunny * countChocolateBunny;
        if (count % 2 === 0) {
            customerAmount = customerAmount * 0.8;
        }

        console.log(`You purchased ${count} items for ${customerAmount.toFixed(2)} leva.`);
        sumCustomersAmount += customerAmount;
        command = input[index++];
    }
    let averageCustomersAmount = (sumCustomersAmount / nCustomers);
    console.log(`Average bill per client is: ${averageCustomersAmount.toFixed(2)} leva.`)
}


solve(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])
// solve(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"])
