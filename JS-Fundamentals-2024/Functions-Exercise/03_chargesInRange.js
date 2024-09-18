function solve(char1, char2) {
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);

    const startCode = Math.min(code1, code2);
    const endCode = Math.max(code1, code2);

    let result = [];
    for (let i = startCode + 1; i < endCode; i++) {
        result.push(String.fromCharCode(Number(i)));
    }

    console.log(result.join(' '));
}

// solve('a', 'd');
// solve('#', ':');
solve('C', '#');