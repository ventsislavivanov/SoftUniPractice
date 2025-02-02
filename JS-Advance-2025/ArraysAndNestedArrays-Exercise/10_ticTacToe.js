function solve(data) {
    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayerPlay = true;
    for (const coordinates of data) {
        let [x, y] = coordinates.split(' ');

        if (initDashboard[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        let marker = isFirstPlayerPlay ? 'X' : 'O';

        initDashboard[x][y] = marker;
        if (checkWin(initDashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            return printDashboard(initDashboard);
        }

        if (! checkFreeSpace(initDashboard)) {
            console.log("The game ended! Nobody wins :(");
            return printDashboard(initDashboard);
        }

        isFirstPlayerPlay = !isFirstPlayerPlay;
    }

    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === marker &&
                dashboard[i][1] === marker &&
                dashboard[i][2] === marker
            ) {
                return true;
            } else if (dashboard[0][i] === marker &&
                dashboard[1][i] === marker &&
                dashboard[2][i] === marker
            ) {
                return true;
            } else if (dashboard[0][0] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][2] === marker
            ) {
                return true;
            } else if (dashboard[0][2] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][0] === marker
            ) {
                return true;
            }
        }

        return false;
    }
    
    function checkFreeSpace(dashboard) {
        return dashboard.flat().includes(false);
    }

    function printDashboard(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])
//Player O wins!
// O	X	X
// X	O	X
// O	false	O

solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])
//This place is already taken. Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"])
//The game ended! Nobody wins :(
// O	X	X
// X	X	O
// O	O	X