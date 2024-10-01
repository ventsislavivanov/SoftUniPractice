function solve(input) {
    let players = {};
    const powers = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    const paints = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }

    for (const gameInfo of input) {
        let [name, cards] = gameInfo.split(': ');
        cards = cards.split(', ');

        if (name in players) {
            players[name] = players[name].concat(cards);
        } else {
            players[name] = cards;
        }
    }

    for (const key in players) {
        let set = new Set();
        const playerCards = players[key];
        for (const card of playerCards) {
            set.add(card);
        }

        let sum = 0
        for (const card of set) {
            let powerCard, other,paintCard;
            if (card.length === 2) {
                [powerCard, paintCard] = card.split('');
            } else {
                [powerCard, other,paintCard] = card.split('');
                powerCard += other;
            }


            sum += powers[powerCard] * paints[paintCard];
        }

        console.log(`${key}: ${sum}`);
    }
}

// solve([
//         'Peter: 2C, 4H, 9H, AS, QS',
//         'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//         'Andrea: QH, QC, QS, QD',
//         'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//         'Andrea: QH, QC, JS, JD, JC',
//         'Peter: JD, JD, JD, JD, JD, JD'
//     ]
// )

solve([
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
);