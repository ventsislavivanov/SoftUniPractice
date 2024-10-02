function biggerHalf(input) {
    const sorted = input.sort((a, b) => a - b);
    const halfLength = sorted.length % 2 === 0 ? sorted.length / 2 : Math.ceil(sorted.length / 2);
    const result = sorted.slice(-halfLength);
    console.log(result);
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
//# sourceMappingURL=07_biggerHalf.js.map