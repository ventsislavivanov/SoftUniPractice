"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity, drinks = []) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = drinks;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((c) => c.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        if (this.drinks?.length === 0) {
            return {}.toString();
        }
        if (this.drinks?.length === 1) {
            return this.drinks[0].toString();
        }
        const cloneDrinks = [...this.drinks];
        const sorted = cloneDrinks.sort((a, b) => b.volume - a.volume);
        return sorted[0].toString();
    }
    getCheapest() {
        if (this.drinks?.length === 0) {
            return {}.toString();
        }
        if (this.drinks?.length === 1) {
            return this.drinks[0].toString();
        }
        const cloneDrinks = [...this.drinks];
        const sorted = cloneDrinks.sort((a, b) => a.price - b.price);
        return sorted[0].toString();
    }
    buyDrink(name) {
        return this.drinks.find((d) => d.name === name).toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        const drinksReport = this.drinks.map((d) => d.toString()).join("\n");
        return `Drinks available:\n${drinksReport}`;
    }
}
exports.VendingMachine = VendingMachine;
