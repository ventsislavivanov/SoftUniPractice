function solve(arr) {
    function installGame(account, game) {
        if (! account.includes(game)) {
            account.push(game);
        }

        return account;
    }

    function uninstallGame (account, game) {
        if (account.includes(game)) {
            account = account.filter(el => {
                return el !== game;
            });
        }

        return account;
    }

    function updateGame(account, game) {
        if (account.includes(game)) {
            account = uninstallGame(account, game)
            account = installGame(account, game);
        }

        return account;
    }

    function expansionGame(account, game) {
        const tokens = game.split('-');
        const basicGame = tokens[0];
        const expansion = tokens[1];

        const expansionGame = `${basicGame}:${expansion}`
        account.splice(account.indexOf(basicGame), 0, expansionGame);

        return account;
    }

    let account = arr.shift().split(' ');
    let index = 0;
    let commandOrPlay = arr[index];

    while (commandOrPlay !== 'Play!') {
        const tokens = commandOrPlay.split(' ');
        const command = tokens[0];
        const game = tokens[1];

        switch (command) {
            case 'Install':
                account = installGame(account, game);
                break;
            case 'Uninstall':
                account = uninstallGame(account, game);
                break;
            case 'Update':
                account = updateGame(account, game);
                break;
            case 'Expansion':
                account = expansionGame(account, game);
                break;
        }

        index++;
        commandOrPlay = arr[index];
    }

    console.log(account.join(' '));
}

solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
// solve(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);