function solve(text) {
    const pattern = /[^a-zA-Z0-9]+/;
    let result = text.split(pattern)
        .filter(x => x !== '')
        .map(x => x.toUpperCase())
        .join(', ')

    console.log(result);
}

solve('Hi, how are you?')