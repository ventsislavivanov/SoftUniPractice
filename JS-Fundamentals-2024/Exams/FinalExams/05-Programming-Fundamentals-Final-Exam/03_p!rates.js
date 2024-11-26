function solve(arr) {
    let line = arr.shift();
    let cities = {};

    while (line !== 'Sail') {

        let [town, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        if (! cities.hasOwnProperty(town)) {
            cities[town] = { population, gold };
        } else {
            cities[town]['population'] += population;
            cities[town]['gold'] += gold;
        }

        line = arr.shift();
    }

    line = arr.shift();

    while (line !== 'End') {

        const [action, town, ...args] = line.split("=>");

        if (action === 'Plunder') {
            const [people, gold] = args.map(Number);

            cities[town]['population'] -= people;
            cities[town]['gold'] -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[town]['population'] <= 0 || cities[town]['gold'] <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }

        } else if (action === 'Prosper') {

            const gold = Number(args[0]);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[town]['gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town]['gold']} gold.`);
            }

        }

        line = arr.shift();
    }

    const citiesCount = Object.keys(cities).length;
    if (citiesCount) {
        console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);
        for (const key in cities) {
            console.log(`${key} -> Population: ${cities[key]['population']} citizens, Gold: ${cities[key]['gold']} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

// solve([
//     'Tortuga||345000||1250',
//     'Santo Domingo||240000||630',
//     'Havana||410000||1100',
//     'Sail',
//     'Plunder=>Tortuga=>75000=>380',
//     'Prosper=>Santo Domingo=>180',
//     'End'
// ]);

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]);
//