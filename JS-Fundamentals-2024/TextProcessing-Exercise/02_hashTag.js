function solve(str) {
    const words = str.split(" ");
    const hashWords = words.filter((word) => word.startsWith("#") && word.length > 1);

    const pattern = /\b[A-Za-z]+\b/;

    for (let word of hashWords) {
        word = word.substring(1);
        if (pattern.test(word)) {
            console.log(word);
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');