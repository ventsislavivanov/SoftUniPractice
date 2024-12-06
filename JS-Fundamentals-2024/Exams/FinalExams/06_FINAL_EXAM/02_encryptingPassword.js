function solve(arr) {
    const n = arr.shift();
    const regex = /^(?<symbols>.+)>(?<group1>[0-9]{3})\|(?<group2>[a-z]{3})\|(?<group3>[A-Z]{3})\|(?<group4>[^<>]{3})<\1$/

    for (let i = 0; i < n; i++) {
        const curr = arr[i];

        const match = curr.match(regex);

        if (match) {
            const { group1, group2, group3, group4 } = match.groups;
            const encryptedPassword = group1 + group2 + group3 + group4;
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log("Try another password!");
        }
    }
}

// solve(["3",
//     "##>00|no|NO|!!!?<###",
//     "##>123|yes|YES|!!!<##",
//     "$$<111|noo|NOPE|<<>$$"])
//Try another password!
// Password: 123yesYES!!!
// Try another password!


solve(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])
//Password: 111mquBAUmqu
// Try another password!
// Password: 088abcAAA***
// Try another password!
// Try another password!