function processOddNumber(arr) {
    console.log(
        arr.filter((el, i) => i % 2 !== 0)
            .map(e => e * 2)
            .reverse()
    );
}

processOddNumber([1, 2, 3, 4, 5, 6,]);