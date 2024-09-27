function solve(input) {
    for (const el of input) {
        const [townName, townLatitude, townLongitude] = el.split(' | ');
        const curTown = {
            town: townName,
            latitude: Number(townLatitude).toFixed(2),
            longitude: Number(townLongitude).toFixed(2),
        };
        console.log(curTown)
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])