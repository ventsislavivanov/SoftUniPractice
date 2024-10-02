function aggregeteElements(input) {
    let sum = 0;
    let inverseSum = 0;
    let concatString = '';
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        sum += element;
        inverseSum += 1 / element;
        concatString += element.toString();
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatString);
}
aggregeteElements([1, 2, 3]);
aggregeteElements([2, 4, 8, 16]);
//# sourceMappingURL=10_aggregateElements.js.map