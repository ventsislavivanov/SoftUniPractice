function solve(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    console.log(reversedStr);
}

solve('Information');
solve('star');
solve('racecar');