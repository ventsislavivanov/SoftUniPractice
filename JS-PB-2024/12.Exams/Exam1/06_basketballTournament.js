function solve(input) {
    let index = 0
    let nameOrEnd = input[index++];
    let totalMatch = 0;
    let winMatch = 0;
    let lostMatch = 0;

    while (nameOrEnd !== 'End of tournaments') {
        let nMatch = Number(input[index++]);
        totalMatch += nMatch;
        
        for (let i = 0; i < nMatch; i++) {
            let teamScore1 = Number(input[index++]);
            let teamScore2 = Number(input[index++]);

            if (teamScore1 > teamScore2) {
                winMatch++;
                console.log(`Game ${i + 1} of tournament ${nameOrEnd}: win with ${teamScore1 - teamScore2} points.`);
            } else if (teamScore1 < teamScore2) {
                lostMatch++;
                console.log(`Game ${i + 1} of tournament ${nameOrEnd}: lost with ${teamScore2 - teamScore1} points.`);
            }
        }

        nameOrEnd = input[index++];
    }

    console.log((winMatch / totalMatch * 100).toFixed(2) + '% matches win');
    console.log((lostMatch / totalMatch * 100).toFixed(2) + '% matches lost');
}

// solve(['Dunkers', '2', '75', '65', '56', '73', 'Fire Girls', '3', '67', '34', '83', '98', '66', '45', 'End of tournaments']);
solve(['Ballers', '3', '87', '63', '56', '65', '75', '64', 'Sharks', '4', '64', '76', '65', '86', '68', '99', '45', '78', 'End of tournaments']);