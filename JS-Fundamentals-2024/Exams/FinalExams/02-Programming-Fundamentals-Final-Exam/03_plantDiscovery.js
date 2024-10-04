function solve(arr) {
    const n = Number(arr.shift());
    let plants = {}
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = arr.shift().split('<->');
        plants[plant] = {};
        plants[plant]['rarity'] = Number(rarity);
        plants[plant]['count'] = 0;
        plants[plant]['rating'] = 0;
    }

    let line = arr.shift();
    while (line !== "Exhibition") {
        const [command, plantInfo] = line.split(': ');
        const [plant, value] = plantInfo.split(' - ');

        if (plants.hasOwnProperty(plant)) {
            if (command === "Rate") {
                plants[plant]['rating'] += Number(value);
                plants[plant]['count'] += 1;
            } else if (command === "Update") {
                plants[plant]['rarity'] = Number(value);
            } else if (command === "Reset") {
                plants[plant]['rating'] = 0;
                plants[plant]['count'] = 0;
            }
        } else {
            console.log("error");
        }

        line = arr.shift();
    }

    console.log("Plants for the exhibition:");
    for (const key in plants) {
        const averageCount = plants[key][`rating`] / plants[key][`count`] || 0;
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${(averageCount).toFixed(2)}`);
    }
}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

// solve(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"])
