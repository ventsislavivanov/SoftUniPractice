function solve(string, char, result) {
    let replacedWord = string.replace('_', char);
    console.log(replacedWord === result ? 'Matched': 'Not Matched');
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');