function solve(arr) {
    const plants = {};
    const sections = {};
    let line = arr.shift();

    while (line !== 'EndDay') {
        const [command, args] = line.split(': ');
        const tokens = args.split('-');

        const plantName = tokens[0];
        const waterAmount = Number(tokens[1]);
        const section = tokens[2];

        if (command === 'Plant') {

            if (!plants.hasOwnProperty(plantName)) {
                plants[plantName] = { waterNeeded: waterAmount, section };
                sections[section] = (sections[section] || 0) + 1;
            } else {
                plants[plantName].waterNeeded += waterAmount;
            }
        } else if (command === 'Water') {
            if (plants.hasOwnProperty(plantName)) {
                plants[plantName].waterNeeded -= waterAmount;

                if (plants[plantName].waterNeeded <= 0) {
                    const section = plants[plantName].section;
                    sections[section] -= 1;

                    if (sections[section] === 0) {
                        delete sections[section];
                    }

                    delete plants[plantName];
                    console.log(`${plantName} has been sufficiently watered.`);
                }
            }
        }

        line = arr.shift();
    }

    console.log("Plants needing water:");
    for (const plantName in plants) {
        const { waterNeeded } = plants[plantName];
        console.log(` ${plantName} -> ${waterNeeded}ml left`);
    }

    console.log("Sections with thirsty plants:");
    for (const sectionName in sections) {
        console.log(` ${sectionName}: ${sections[sectionName]}`);
    }
}

// solve(["Plant: Orchid-300-TropicalZone",
//     "Plant: Fern-200-FernGully",
//     "Plant: Orchid-100-TropicalZone",
//     "Water: Daisy-50",
//     "Water: Orchid-400",
//     "EndDay"])
//Orchid has been sufficiently watered.
// Plants needing water:
//  Fern -> 200ml left
// Sections with thirsty plants:
//  FernGully: 1


// solve(["Plant: Cactus-150-DesertArea",
//     "Plant: Bamboo-500-BambooGrove",
//     "Plant: Cactus-50-DesertArea",
//     "Water: Cactus-200",
//     "Water: Bamboo-500",
//     "EndDay"])
//Cactus has been sufficiently watered.
// Bamboo has been sufficiently watered.
// Plants needing water:
// Sections with thirsty plants:

solve(["Plant: Rose-300-FlowerBed",
    "Plant: Tulip-150-FlowerBed",
    "Water: Rose-100",
    "Water: Tulip-150",
    "EndDay"])
//Tulip has been sufficiently watered.
// Plants needing water:
//  Rose -> 200ml left
// Sections with thirsty plants:
//  FlowerBed: 1
