class SnowSportStore {
    constructor(storeName) {
        this.storeName = storeName;
        this.availableEquipment = [];
        this.revenue = 0;
    }

    addEquipment(type, price, condition) {
        if (type === '' || price <= 0 || condition === '') {
            //Uncaught Error Error: Invalid equipment details!
            throw new Error("Invalid equipment details!");
        }

        this.availableEquipment.push({ type, price, condition });

        return `New equipment added: ${type} / ${condition} condition - ${price.toFixed(2)}$.`;
    }

    rentEquipment(type, rentalDays) {
        if (type === '' || rentalDays <= 0) {
            throw new Error("Invalid rental details!");
        }

        const equipment = this.availableEquipment.find(e => e.type === type && e.condition === 'used');
        if (!equipment) {
            throw new Error(`${type} is not available for rent!`);
        }

        const rentalCost = (equipment.price * 0.1 * rentalDays);
        this.revenue += rentalCost;
        return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(2)}$.`;
    }

    sellEquipment(type) {
        const index = this.availableEquipment.findIndex(e => e.type === type && e.condition === 'new');
        if (index === -1) {
            throw new Error(`${type} is not available for purchase!`);
        }

        const equipment = this.availableEquipment.splice(index, 1)[0];
        this.revenue += equipment.price;
        return `${type} has been sold for ${equipment.price.toFixed(2)}$.`;
    }

    showRevenue() {
        return this.revenue > 0
            ? `${this.storeName} has made a total revenue of ${this.revenue.toFixed(2)}$.`
            : "Nothing has been sold or rented.";
    }
}

// let store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.addEquipment('Helmet', 50, ''));

//New equipment added: Ski / new condition - 500.00$.
// New equipment added: Snowboard / used condition - 300.00$.
// Uncaught Error Error: Invalid equipment details!


// let store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.rentEquipment('Snowboard', 3));
// console.log(store.rentEquipment('Boots', 3));

//New equipment added: Ski / new condition - 500.00$.
// New equipment added: Snowboard / used condition - 300.00$.
// Snowboard rented for 3 days. Total cost: 90.00$.
// Uncaught Error Error: Boots is not available for rent!


let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Boots', 100, 'used'));
console.log(store.addEquipment('Helmet', 200, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.sellEquipment('Ski'));
console.log(store.sellEquipment('Helmet'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.showRevenue());

// New equipment added: Ski / new condition - 500.00$.
// New equipment added: Boots / used condition - 100.00$.
// New equipment added: Helmet / new condition - 200.00$.
// New equipment added: Snowboard / used condition - 300.00$.
// Ski has been sold for 500.00$.
// Helmet has been sold for 200.00$.
// Snowboard rented for 3 days. Total cost: 90.00$.
// Alpine Gear Shop has made a total revenue of 790.00$.