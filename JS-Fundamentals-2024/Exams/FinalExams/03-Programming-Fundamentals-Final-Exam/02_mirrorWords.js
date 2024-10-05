function solve(arr) {
    let str = arr.shift();
    const pattern = /([#@])(?<word1>[a-z]{3,})\1\1(?<word2>[a-z]{3,})\1/gi;
    const pattern2 = /([#@])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/;

    let validCounter = 0;
    let validPairs = [];
    const matches = str.match(pattern);

    if (matches !== null && matches.length > 0) {
        console.log(`${matches.length} word pairs found!`);

        matches.forEach(x => {
            const word = x.match(pattern2);
            const word1 = word[2];
            const word2 = word[3];

            if (word1 === word2.split("").reverse().join('')) {
                validCounter++;
                validPairs.push(`${word1} <=> ${word2}`);
            }
        });
    } else {
        console.log("No word pairs found!");
    }


    if (validCounter > 0) {
        console.log("The mirror words are:");
        console.log(validPairs.join(', '));
    } else {
        console.log("No mirror words!");
    }

}


solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);