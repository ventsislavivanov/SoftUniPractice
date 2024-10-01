function solve(words, text) {
    const wordsToFill = words.split(', ');
    const textWords = text.split(" ");

    const startWords = textWords.filter((word) => word.includes('*'));

    for (const template of startWords) {
        const rightWord = wordsToFill.find(word => word.length === template.length);
        text = text.replace(template, rightWord);
    }

    console.log(text)
}

// solve('great',
//     'softuni is ***** place for learning new programming languages'
// );

solve(
'great, learning',
    'softuni is ***** place for ******** new programming languages'
)