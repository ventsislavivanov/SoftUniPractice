function solve(input) {
    let index = 0;
    let command = input[index++];
    let maxPoint = Number.MIN_SAFE_INTEGER;
    let bestPowerWord = '';
    
    while (command !== "End of words" ) {
        let word = command;

        let wordPoints = 0
        let wordLength = word.length;
        for (let i = 0; i < wordLength; i++) {
            wordPoints += word[i].charCodeAt(0)
        }
        let firstLetter = word[0];

        if (firstLetter === 'a' || firstLetter === 'A' ||
            firstLetter === 'e' || firstLetter === 'E' ||
            firstLetter === 'i' || firstLetter === 'I' ||
            firstLetter === 'o' || firstLetter === 'O' ||
            firstLetter === 'u' || firstLetter === 'U' ||
            firstLetter === 'y' || firstLetter === 'Y'
        ) {
            wordPoints = wordPoints * wordLength;
        } else {
            wordPoints = Math.floor((wordPoints / wordLength));
        }

        if (maxPoint < wordPoints) {
            maxPoint = wordPoints;
            bestPowerWord = word;
        }

        command = input[index++];
    }

    console.log(`The most powerful word is ${bestPowerWord} - ${maxPoint}`);
}

// solve(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
solve(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
