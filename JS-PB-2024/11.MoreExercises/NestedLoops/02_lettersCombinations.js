function solve(input) {
    let start = input.shift();
    let end = input.shift();
    let skipLetter = input.shift();

    let count = 0;
    let result = '';

    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        for (let j = start.charCodeAt(0); j <= end.charCodeAt(0); j++) {
            for (let k = start.charCodeAt(0); k <= end.charCodeAt(0); k++) {
                let combination = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                if (combination.includes(skipLetter)) {
                    continue;
                }
                result += combination + ' ';
                count++;
            }
        }
    }

    console.log(result + count);
}

solve(['a', 'c', 'b']);