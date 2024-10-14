function townPopulation(input) {
    const towns = {};
    for (const line of input) {
        const [townName, population] = line.split(' <-> ');
        if (towns.hasOwnProperty(townName)) {
            towns[townName] += Number(population);
        }
        else {
            towns[townName] = Number(population);
        }
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
//# sourceMappingURL=05_townPopulation.js.map