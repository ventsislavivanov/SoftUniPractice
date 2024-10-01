function solve(str) {
    str = str.split("");
    let newChar = '';
    let result = "";
    for (const char of str) {
        if (newChar !== char) {
            newChar = char;
            result += char;
        }
    }

    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');