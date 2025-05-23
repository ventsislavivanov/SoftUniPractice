function factory(library, orders) {
    const result = [];

    for (const order of orders) {
        const current = Object.assign({}, orders.template);
        for (const part of order.parts) {
            current[part] = library[part];
        }

        result.push(current);
    }

    return result;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);


// function createReact(width, height) {
//     const rect = { width, height };
//
//     rect.getArea = () => {
//         return rect.width * rect.height;
//     }
//
//     return rect;
// }
//
// console.log(createReact(5, 3).getArea());
