function solve(input) {
    let digit = Number(input.shift());

    if (! ((digit >= 100 && digit <= 200) || digit === 0)) {
        console.log('invalid');
    }
}

solve(['0'])