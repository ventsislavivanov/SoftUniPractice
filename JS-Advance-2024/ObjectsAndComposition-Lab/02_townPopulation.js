function solve(data) {
    const result = {};
    for (const datum of data) {
        const [town, population] = datum.split(' <-> ');
        if (!result.hasOwnProperty(town)) {
            result[town] = 0;
        }

        result[town] += Number(population);
    }

    for (const resultKey in result) {
        console.log(`${resultKey} : ${result[resultKey]}`);
    }
}

solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
