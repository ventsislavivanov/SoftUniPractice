function solve(str) {
    const pattern = /(^|(?<=\s))(([a-z0-9]+)([.\-_]?)([a-z0-9]+)(@)([a-z]+([.\-_][a-z]+)+))(\b|(?=\s))/gi
    // Има обяснение какво правят групите
    const matches = str.match(pattern);

    console.log(matches.join('\n'));
}

solve('Please contact us at: support@github.com.');
solve('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
solve('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')