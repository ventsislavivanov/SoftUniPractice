function solve(name, lastName, hairColor ) {
    const Person = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(Person));
}

solve('George', 'Jones', 'Brown');