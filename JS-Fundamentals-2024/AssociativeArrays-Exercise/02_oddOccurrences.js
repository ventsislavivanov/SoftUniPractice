function solve(str) {
    let map = new Map();
    let words = str.split(' ').map(word => word.toLowerCase());

    for (const word of words) {
        if (! map.has(word)) {
            map.set(word, 1);
        } else {
            const current = map.get(word);
            map.set(word, current + 1);
        }
    }

    const wordEntries = map.entries(words);
    const validWords = []
    for (const [word, occurrence] of wordEntries) {
        if (occurrence % 2 !== 0) {
            validWords.push(word);
        }
    }

    console.log(validWords.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// solve('Cake IS SWEET is Soft CAKE sweet Food');