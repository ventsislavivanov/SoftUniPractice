function solve(n) {
    for (let i = 1; i <= n; i++) {
        let currNum = i.toString();
        let sum = 0;
        let isSpecial = 'False';

        for (let j = 0; j < currNum.length; j++) {
            sum += Number(currNum[j]);
        }

        if (sum === 11 || sum === 7 || sum === 5) {
            isSpecial = 'True';
        }

        console.log(`${i} -> ${isSpecial}`);
    }
}

solve(15);