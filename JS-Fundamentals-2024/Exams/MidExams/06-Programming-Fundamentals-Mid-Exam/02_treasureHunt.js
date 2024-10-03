function solve(input) {
    let loot = input.shift().split("|");
    let line = input.shift();

    while (line !== 'Yohoho!') {
        const tokens = line.split(" ");
        const command = tokens.shift();

        switch (command) {
            case 'Loot':
                for (const item of tokens) {
                    if (!loot.includes(item)) {
                        loot.unshift(item);
                    }
                }
                break;
            case 'Drop':
                const idx = Number(tokens.shift());
                if (idx >= 0 && idx < loot.length) {
                    loot.push(loot.splice(idx, 1));
                }
                break;
            case 'Steal':
                const count =  Math.min(loot.length, Number(tokens.shift()));
                const index = loot.length - count;
                let stolen = loot.splice(index, count);
                console.log(stolen.join(', '));
                break;
        }

        line = input.shift();
    }

    if (loot.length > 0) {
        const sumElLength = loot.map(el => el.length).reduce((a, b) => a + b);
        console.log(`Average treasure gain: ${(sumElLength / loot.length).toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

// /solve(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
solve(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);
