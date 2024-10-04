function solve(arr) {
    const n = arr.shift();

    let pieces = {};
    for (let i = 1; i <= n; i++) {
        let [piece, composer, key] = arr.shift().split('|');

        pieces[piece] = {};
        pieces[piece]['composer'] = composer;
        pieces[piece]['key'] = key;
    }

    let line = arr.shift();
    while (line !== 'Stop') {
        let [command, piece, composer, key] = line.split('|');

        if (command === 'Add') {
            if (! pieces.hasOwnProperty(piece)) {
                pieces[piece] = {};
                pieces[piece]['composer'] = composer;
                pieces[piece]['key'] = key;

                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece]['key'] = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        line = arr.shift();
    }

    for (const key in pieces) {
        console.log(`${key} -> Composer: ${pieces[key]['composer']}, Key: ${pieces[key]['key']}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']
)

solve([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
);