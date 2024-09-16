function solve(num) {
    let sum = 0;
    let numToSting = num.toString();

    for (let i = 0; i < numToSting.length; i++) {
        sum += Number(numToSting[i]);
    }

    console.log(sum)
}

solve(245678);
solve(97561);
solve(543);