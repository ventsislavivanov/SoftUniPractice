function solve(str) {
    const pattern = /[A-z][a-z}]*/g;
    const allMatches = str.match(pattern);

    console.log(allMatches.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo')