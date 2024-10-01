function solve(arr) {
    const offers = {}
    for (const line of arr) {
        let [country, town, price] = line.split(' > ');

        if (! offers.hasOwnProperty(country)) {
            offers[country] = {};
        }

        if (! offers[country].hasOwnProperty(town)) {
            offers[country][town] = Number(price);
        } else if (offers[country][town] > Number(price)){
            offers[country][town] = Number(price);
        }
    }

    const sorted = Object.entries(offers).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [country, towns] of sorted) {
        let result = `${country} -> `;

        const sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        for(const [town, price] of sortedTowns) {
            result += `${town} -> ${price} `;
        }

        console.log(result);
    }
}

solve([
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);
// Albania -> Tirana -> 1000
// Bulgaria -> Sofia -> 200 Sopot -> 800
// France -> Paris -> 2000


// solve([
//         'Bulgaria > Sofia > 25000',
//         'Bulgaria > Sofia > 25000',
//         'Kalimdor > Orgrimar > 25000',
//         'Albania > Tirana > 25000',
//         'Bulgaria > Varna > 25010',
//         'Bulgaria > Lukovit > 10'
//     ]
// );
// Albania -> Tirana -> 25000
// Bulgaria -> Lukovit -> 10 Sofia -> 25000 Varna -> 25010
// Kalimdor -> Orgrimar -> 25000
