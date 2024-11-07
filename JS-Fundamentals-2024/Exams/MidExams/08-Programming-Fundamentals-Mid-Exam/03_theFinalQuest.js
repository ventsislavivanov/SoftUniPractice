function solve(input) {
    let words = input.shift().split(' ');
    let line = input.shift();

    while (line !== "Stop") {
        let [command, n, m] = line.split(' ');

        if (command === "Delete") {
            const index = Number(n);
            if (index >= 0 && index < words.length) {
                words.splice(index + 1, 1)
            }
        } else if (command === "Swap") {
            const word1 = n;
            const word2 = m;

            if (words.includes(word1) && words.includes(word2)) {
                const idx1 = words.indexOf(word1);
                const idx2 = words.indexOf(word2);

                words.splice(idx1, 1, word2);
                words.splice(idx2, 1, word1);
            }
        } else if (command === "Put") {
            const word = n;
            const index = Number(m);

            if (index >= 1 && index < words.length) {
                words.splice(index - 1, 0, word)
            } else if (index === words.length) {
                words.push(word);
            }
        } else if (command === "Sort") {
            words = words.sort((a, b) => b.localeCompare(a));
        } else if (command === "Replace") {
            const replaceWord = n;
            const findWord = m;

            if (words.includes(findWord)) {
                let str = words.join(' ');
                str = str.replace(findWord, replaceWord);
                words = str.split(" ");
            }
        }

        line = input.shift();
    }

    console.log(words.join(" "));
}

// solve(["Congratulations! You last also through the have challenge!",
//     "Swap have last",
//     "Replace made have",
//     "Delete 2",
//     "Put it 4",
//     "Stop"]);
// Congratulations! You made it through the last challenge!

// solve(["This the my quest! final",
//     "Put is 2",
//     "Swap final quest!",
//     "Delete 2",
//     "Stop"]);
// This is the final quest!


solve(["Please, follow the instructions!",
    "Put You 0",
    "Delete 3",
    "Replace me you",
    "Replace follow know",
    "Stop"]);
//Please, follow the instructions!

