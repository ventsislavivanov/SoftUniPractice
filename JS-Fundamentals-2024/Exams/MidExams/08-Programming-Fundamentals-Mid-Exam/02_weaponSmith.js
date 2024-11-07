function solve(input) {
    let parts = input.shift().split("|");
    let line = input.shift();


    while (line !== "Done") {
        let [command, n, m ] = line.split(" ");

        if (command === "Add") {
            const part = n;
            const index = Number(m);

            if (index >= 0 && index < parts.length) {
                parts.splice(index, 0, part)
            }

        } else if (command === "Remove") {
            const index = Number(n);
            if (index >= 0 && index < parts.length) {
                parts.splice(index, 1)
            }
        } else if (command === "Check") {
            const checker = n;

            let print = [];
            for (let i = 0; i < parts.length; i++) {
                if (checker === "Odd") {
                    if (i % 2 !== 0) {
                        print.push(parts[i]);
                    }
                } else if (checker === "Even") {
                    if (i % 2 === 0) {
                        print.push(parts[i]);
                    }
                }

            }

            console.log(print.join(" "));
        }

        line = input.shift();
    }

    console.log(`You crafted ${parts.join("")}!`)
}

// solve(["pa|Do|ha|mm|er",
//     "Remove 0",
//     "Add om 1",
//     "Check Even",
//     "Done"]);
//Do ha er
// You crafted Doomhammer!

solve(["As|hb|ri|ng|er",
    "Remove 10",
    "Add lo 5",
    "Check Odd",
    "Done"]);
//hb ng
// You crafted Ashbringer!

solve(["Ta|es|to|la|ch",
    "Add pa 8",
    "Add ha 2",
    "Remove 3",
    "Done"]);
//You crafted Taeshalach!
