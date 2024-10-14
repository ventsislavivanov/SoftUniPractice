function towns(input) {
    const towns = [];
    input.forEach(el => {
        let [town, latitude, longitude] = el.split(' | ');
        const obj = { town, latitude: Number(latitude), longitude: Number(longitude) };
        towns.push(obj);
    });
    for (const town of towns) {
        console.log(town);
    }
}
// towns(['Plovdiv | 136.45 | 812.575']);
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
//# sourceMappingURL=04_towns.js.map