function stringOfNumber(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    console.log(result);
}

stringOfNumber(5);