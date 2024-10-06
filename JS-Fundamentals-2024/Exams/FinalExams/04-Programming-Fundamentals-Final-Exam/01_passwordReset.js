function solve(arr) {
    let str = arr.shift();
    let line = arr.shift();

    while (line !== "Done") {
        const command = line.split(' ');


        if (command[0] === "TakeOdd") {
            let newPass = '';
            for (let i = 0; i < str.length; i++) {
                if (i % 2 !== 0) {
                    newPass += str[i];
                }
            }
            str = newPass;
            console.log(newPass);
        } else if (command[0] === "Cut") {
            const startIndex = Number(command[1]);
            const cutLength = Number(command[2]);

            const firstPart = str.slice(0, startIndex);
            const endPart = str.slice(startIndex + cutLength);

            str = firstPart.concat(endPart)
            console.log(str);
        } else if (command[0] === "Substitute") {
            const findEl = command[1];
            const replacedEl = command[2];

            if (! str.includes(findEl)) {
                console.log("Nothing to replace!");
            } else {
                while (str.includes(findEl)) {
                    str = str.replace(findEl, replacedEl);
                }

                console.log(str);
            }
        }

        line = arr.shift();
    }

    console.log(`Your password is: ${str}`);
}

// solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]
// );
//icecream::hot::summer
// icecream::hot::mer
// icecream-hot-mer
// Nothing to replace!
// Your password is: icecream-hot-mer

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
//programming!is!funny
// programming!is!fun
// programming***is***fun
// Nothing to replace!
// Your password is: programming***is***fun