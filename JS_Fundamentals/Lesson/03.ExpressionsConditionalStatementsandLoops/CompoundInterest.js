function compoundInterst(data) {
    let principalSum = data[0];
    let intersetRate = data[1] / 100;
    let frequency = 12 / data[2];
    let time = data[3];

    let result = principalSum * (1 + intersetRate / frequency) ** (frequency * time);

    console.log(result.toFixed(2));
}

compoundInterst([1500, 4.3, 3, 6]);