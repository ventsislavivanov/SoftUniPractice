function solve(text, word) {
    const arr = text.split(' ');
    let count = 0;
    for (const w of arr) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}

solve('This is a word and it also is a sentence',
    'is');