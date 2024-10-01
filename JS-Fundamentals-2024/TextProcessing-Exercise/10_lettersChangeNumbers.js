function solve(str) {
    const elements = str.split(' ').filter(x => x !== '');

    let alphabet = {};
    let a = 97;
    for (let i = 0; i < 26; i++) {
        alphabet[String.fromCharCode(a + i)] = (i + 1);
    }

    let sum = 0;
    for (const element of elements) {
        const firstChar = element.substring(0, 1);
        const lastChar = element.substring(element.length - 1);
        let num = Number(element.substring(1, element.length - 1));

        const firstAlphabetValue = alphabet[firstChar.toLowerCase()]
        if (/[A-Z]/.test(firstChar)) {
            num = num / firstAlphabetValue;
        } else {
            num = num * firstAlphabetValue;
        }

        const lastAlphabetValue = alphabet[lastChar.toLowerCase()];
        if (/[A-Z]/.test(lastChar)) {
            num = num - lastAlphabetValue;
        } else {
            num = num + lastAlphabetValue;
        }

        sum += num;
    }

    console.log(sum.toFixed(2));
}

// solve('A12b s17G');
solve('P34562Z q2576f   H456z');
// solve('a1A');