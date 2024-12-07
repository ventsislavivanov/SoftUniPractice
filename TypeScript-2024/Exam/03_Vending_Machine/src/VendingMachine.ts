import {Drink} from "./Drink";

export class VendingMachine {
    buttonCapacity: number;
    drinks: Drink[];

    constructor(buttonCapacity: number, drinks: Drink[] = []) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = drinks;
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink)
        }
    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex((c) => c.name === name);

        if (index != -1) {
            this.drinks.splice(index, 1);
            return true;
        }

        return false;
    }

    getLongest(): string {
        if (this.drinks?.length === 0) {
            return {}.toString();
        }

        if (this.drinks?.length === 1) {
            return this.drinks[0].toString();
        }

        const cloneDrinks: Drink[] = [...this.drinks];
        const sorted: Drink[] = cloneDrinks.sort((a, b) => b.volume - a.volume);
        return sorted[0].toString();
    }

    getCheapest(): string {
        if (this.drinks?.length === 0) {
            return {}.toString();
        }

        if (this.drinks?.length === 1) {
            return this.drinks[0].toString();
        }

        const cloneDrinks: Drink[] = [...this.drinks];
        const sorted: Drink[] = cloneDrinks.sort((a, b) => a.price - b.price);
        return sorted[0].toString();
    }

    buyDrink(name: string) {
        return this.drinks.find((d) => d.name === name).toString();
    }

    getCount(): number {
        return this.drinks.length
    }

    report() {
        const drinksReport = this.drinks.map((d) => d.toString()).join("\n");
        return `Drinks available:\n${drinksReport}`
    }
}