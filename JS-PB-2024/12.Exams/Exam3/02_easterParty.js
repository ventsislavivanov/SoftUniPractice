function solve(input) {
    let nGuests = Number(input.shift());
    let envelopePerPerson = Number(input.shift());
    let budget = Number(input.shift());

    let cake = budget * 0.1

    if (nGuests >= 10 && nGuests <= 16) {
        envelopePerPerson = envelopePerPerson - envelopePerPerson * 0.15;
    } else if (nGuests > 15 && nGuests <= 20) {
        envelopePerPerson = envelopePerPerson - envelopePerPerson * 0.2;
    } else if(nGuests > 20) {
        envelopePerPerson = envelopePerPerson - envelopePerPerson * 0.25;
    }

    let partyCost = nGuests * envelopePerPerson + cake;

    if (budget >=  partyCost) {
        console.log(`It is party time! ${(budget - partyCost).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(partyCost - budget).toFixed(2)} leva needed.`);
    }
}

// solve(["18", "30", "450"])
solve(["8", "25", "340"])
// solve(["8", "25", "340"])
