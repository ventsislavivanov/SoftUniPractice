function solve(fruit, gr, pricePerKg) {
    const kg = gr / 1000;
    const totalPrice = kg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);