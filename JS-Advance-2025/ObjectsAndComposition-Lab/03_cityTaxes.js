function collectTaxes() {
    this.treasury += this.population * this.taxRate;
}

function applyGrowth(percentage) {
    this.population += Math.floor(this.population * percentage / 100);
}

function applyRecession(percentage) {
    this.treasury -= Math.ceil(this.treasury * percentage / 100);
}
function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    }
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
// console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
