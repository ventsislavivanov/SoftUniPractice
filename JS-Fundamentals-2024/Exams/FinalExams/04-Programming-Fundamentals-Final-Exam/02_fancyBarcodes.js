function solve(input) {
    const n = input.shift();
    let pattern = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;

    let digits = {}
    for (let i = 0; i < 10; i++) {
        digits[i] = i;
    }

    for (let i = 0; i < n; i++) {
        const str = input[i];
        const match = str.match(pattern);

        let code = '';
        if (match) {
            for (const char of match.groups.barcode) {
                if (digits.hasOwnProperty(char)) {
                    code += char;
                }
            }

            code === ''
                ? console.log(`Product group: 00`)
                : console.log(`Product group: ${code}`);
        } else {
            console.log("Invalid barcode")
        }
    }
}

// solve(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])
// Product group: 00
// Product group: 0
// Product group: 46

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
// Product group: 11
// Product group: 00
// Invalid barcode
// Invalid barcode
// Invalid barcode
// Product group: 00
