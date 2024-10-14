function towns(input: string[]): void {
    type Town =  { town: string, latitude: number, longitude: number }
    const towns: Town[] = [];

    input.forEach(el => {
        let [town, latitude, longitude] = el.split(' | ');
        const obj: Town = { town,  latitude: Number(latitude),  longitude: Number(longitude) };

        towns.push(obj);
    });


    for (const town of towns) {
        console.log(town)
    }
}

// towns(['Plovdiv | 136.45 | 812.575']);
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);