function evenPossitionElement(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result.push(Number(input[i]));
        }
    }
    console.log(result.join(' '));
}
evenPossitionElement(['20', '30', '40', '50', '60']);
evenPossitionElement(['5', '10']);
//# sourceMappingURL=06_evenPossitionElement.js.map