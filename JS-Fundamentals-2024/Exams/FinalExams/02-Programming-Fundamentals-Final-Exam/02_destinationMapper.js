function solve(str) {
    const patter = /([=|/])(?<place>[A-Z][A-za-z]{2,})\1/g;
    let match = patter.exec(str);
    let places = [];
    let sum = 0;

    while(match) {
        places.push(match[2]);
        match = patter.exec(str);
    }

    console.log(`Destinations: ${places.join(', ')}`);
    places.forEach(place => sum += place.length);
    console.log(`Travel Points: ${sum}`);
}

solve('("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")');
// solve('("ThisIs some InvalidInput")');