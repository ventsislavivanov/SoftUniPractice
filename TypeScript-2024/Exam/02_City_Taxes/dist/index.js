function cityTaxes(name, population, treasury) {
    var _this = this;
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            _this.treasury += _this.population * _this.taxRate;
        },
        applyGrowth: function (percentage) {
            _this.population += Math.floor(_this.population * percentage / 100);
        },
        applyRecession: function (percentage) {
            _this.treasury -= Math.ceil(_this.treasury * percentage / 100);
        }
    };
}
// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);
var city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
