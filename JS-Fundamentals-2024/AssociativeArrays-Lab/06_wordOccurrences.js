function solve(input) {
    let result = {}
    for (const word of input) {
        if (! result.hasOwnProperty(word)) {
            result[word] = 1;
        } else  {
            let currCount = result[word]
            currCount++;
            result[word] = currCount;
        }
    }
    const entries = Object.entries(result);
    const sorted = entries.sort((a, b) => b[1] - a[1]);

    for (const entry of sorted) {
        console.log(`${entry[0]} -> ${entry[1]} times`)
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);