function solve(input) {
    const targetWords = input.shift().split(" ");

    let wordOccurrence = {};
    for (const word of targetWords) {
        wordOccurrence[word] = 0;
    }

    for (const word of input) {
        if (word in wordOccurrence) {
            wordOccurrence[word]++;
        }
    }

    const sorted = Object.entries(wordOccurrence)
        .sort((a, b) => b[1] - a[1]);

    for (const [word, value] of sorted) {
        console.log(`${word} - ${value}`);
    }
}

solve([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);
//
// solve([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
// );