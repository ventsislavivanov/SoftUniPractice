function solve(order) {
    let result = {
        model: order.model,
        engine: null,
        carriage: null,
        wheels: null,
    }

    const engineEnum = {
        small: { power: 90, volume: 1800},
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    if (order.power <= 90) {
        result.engine = engineEnum.small
    } else if (order.power <= 120) {
        result.engine = engineEnum.normal
    } else if (order.power <= 200) {
        result.engine = engineEnum.monster
    }

    if (order.carriage === 'hatchback') {
        result.carriage = { type: 'hatchback', color: order.color }
    } else if (order.carriage === 'coupe') {
        result.carriage = { type: 'coupe', color: order.color }
    }

    let wheelSize= order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    result.wheels = new Array(4).fill(wheelSize);

    return result;
}

console.log(solve({
    model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14
}));
// console.log(solve({
//     model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17
// }));