function solve(arr) {
    const str = arr.shift();

    const emojiPattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    const digitPattern = /\d/g;

    const digits = str.match(digitPattern) || [];
    const coolThreshold = digits
        .reduce((product, digit) => product * Number(digit), 1);

    console.log(`Cool threshold: ${coolThreshold}`);

    const emojis = str.match(emojiPattern) || [];

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    emojis.forEach(emoji => {
        const core = emoji.slice(2, -2);
        const coolness = core.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

        if (coolness > coolThreshold) {
            console.log(emoji);
        }
    });
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
// solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
// solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
