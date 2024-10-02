function cats(input) {
    input.forEach(cat => {
        const [name, age] = cat.split(' ');
        console.log(`${name}, age ${age} says Meow`);
    });
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
//# sourceMappingURL=08_cats.js.map