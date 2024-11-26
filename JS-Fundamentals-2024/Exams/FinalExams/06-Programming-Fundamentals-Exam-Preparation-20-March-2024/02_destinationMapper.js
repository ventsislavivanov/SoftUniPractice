function solve(str) {
    const patter = /([=|/])(?<place>[A-Z][A-za-z]{2,})\1/g;
    let match = patter.exec(str);
    while (match) {
        console.log(match)
        match = patter.exec(str);
    }
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// solve('ThisIs some InvalidInput');