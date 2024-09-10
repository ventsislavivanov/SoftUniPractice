function solve(input) {
    let word = input.shift();

    let result = 0;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if(char === 'a') {
            result += 1;
        } else if(char === 'e') {
            result += 2;
        } else if(char === 'i') {
            result += 3;
        } else if(char === 'o') {
            result += 4;
        } else if(char === 'u') {
            result += 5;
        }
    }

    console.log(result);
}

solve(["bamboo"])