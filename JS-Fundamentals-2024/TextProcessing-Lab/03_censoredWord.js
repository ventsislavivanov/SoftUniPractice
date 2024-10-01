function solve(text, word) {
    const starString = '*'.repeat(word.length);

    while(text.includes(word)) {
        text = text.replace(word, starString);
    }

    console.log(text)
}

solve('A small sentence with some words', 'small');