function solve(arr) {
    function isValidIndex (index, str) {
        return index >= 0 && index < str.length;
    }

    let stops = arr.shift();

    let line = arr.shift();
    while (line !== "Travel") {
        line = line.split(":");

        if (line[0] === "Add Stop") {
            const index = Number(line[1]);
            if (isValidIndex(index, stops)) {
                const value = line[2];
                const firstPart = stops.substring(0, index)
                const lastPart = stops.substring(index);

                stops = firstPart.concat(value).concat(lastPart);
            }

            console.log(stops)
        } else if (line[0] === "Remove Stop") {
            const startIndex = Number(line[1]);
            const endIndex = Number(line[2]);

            if (isValidIndex(startIndex, stops) && isValidIndex(endIndex, stops)) {
                const firstPart = stops.slice(0, startIndex)
                const lastPart = stops.slice(Number(endIndex) + 1);

                stops = firstPart + lastPart;
            }

            console.log(stops)
        } else if (line[0] === "Switch") {
            const findWord = line[1];
            const newWord = line[2];
            if (stops.includes(findWord)) {
                stops = stops.replace(findWord, newWord);
            }

            console.log(stops);
        }

        line = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}



// function solve(arr) {
//     let stops = arr.shift();
//
//     let line = arr.shift();
//     while (line !== "Travel") {
//         let [command, index, value] = line.split(":");
//
//         if (command === "Add Stop") {
//             const firstPart = stops.substring(0, index)
//             const lastPart = stops.substring(index);
//
//             stops = firstPart.concat(value).concat(lastPart);
//             console.log(stops)
//         } else if (command === "Remove Stop") {
//             const firstPart = stops.slice(0, index)
//             const lastPart = stops.slice(Number(value) + 1);
//
//             stops = firstPart + lastPart;
//             console.log(stops)
//         } else if (command === "Switch") {
//             if (stops.includes(index)) {
//                 stops = stops.replace(index, value);
//             }
//             console.log(stops);
//         }
//
//         line = arr.shift();
//     }
//
//     console.log(`Ready for world tour! Planned stops: ${stops}`);
// }

solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]
);
//Hawai::RomeCyprys-Greece
// Hawai::Rome-Greece
// Bulgaria::Rome-Greece
// Ready for world tour! Planned stops: Bulgaria::Rome-Greece

// solve(["Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Travel"]
// );
//AlbNigeriaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland
