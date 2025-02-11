class ShadyCarDealership {
  constructor(dealerName) {
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
  }

  addCar(model, year, mileage, price) {
    if (model === '' || year <= 1950 || mileage < 0 || price < 0) {
      throw new Error('Invalid car!');
    }

    this.availableCars.push({ model, year, mileage, price });

    return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredYear) {
    let foundCar = this.availableCars.find(car => car.model === model);

    if (!foundCar) {
      return(`${model} was not found!`);
    }

    let soldPrice = foundCar.price;
    if (foundCar.year >= desiredYear) {
      soldPrice *= 1;
    } else if (foundCar.year < desiredYear && desiredYear - foundCar.year <= 5) {
      soldPrice *= 0.9;
    } else if (foundCar.year < desiredYear && desiredYear - foundCar.year > 5) {
      soldPrice *= 0.8;
    }

    this.soldCars.push({ model: foundCar.model, year: foundCar.year, mileage: foundCar.mileage, soldPrice });
    this.availableCars = this.availableCars.filter(car => car.model !== model);
    this.revenue += soldPrice;

    return `${model} (${foundCar.year}) was sold for ${soldPrice.toFixed(2)}$`;
  }

  prepareCarForSale(model) {
    let foundCar = this.availableCars.find(car => car.model === model);

    if (!foundCar) {
      return(`${model} was not found for preparation!`);
    }

    foundCar.mileage *= 0.5;
    foundCar.price *= 1.3;

    return `${model} (${foundCar.year}) is prepared for sale with ${foundCar.mileage.toFixed(0)} km. - ${foundCar.price.toFixed(2)}$`;
  }

  salesJournal(criteria) {
    if (criteria !== 'year' && criteria !== 'model') {
      throw new Error('Invalid criteria!');
    }

    if (criteria === 'year') {
      this.soldCars.sort((a, b) => b.year - a.year);
    } else if (criteria === 'model') {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }

    let result = [];
    result.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
    result.push(`${this.soldCars.length} cars sold:`);
    this.soldCars.forEach(car => result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`));

    return result.join('\n');
  }
}

//const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
// console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.sellCar('Toyota Yaris', 2012));

//New car added: Honda CR-V (2010) / 120000 km. - 15000.00$
// New car added: BMW X3 (2005) / 220000 km. - 9000.00$
// New car added: Toyota Yaris (2015) / 80000 km. - 18000.00$
// Honda CR-V (2010) is prepared for sale with 60000 km. - 19500.00$
// BMW X3 (2005) is prepared for sale with 110000 km. - 11700.00$
// Honda CR-V (2010) was sold for 17550.00$
// BMW X3 (2005) was sold for 9360.00$
// Toyota Yaris (2015) was sold for 18000.00$


// const dealership = new ShadyCarDealership('Shady Motors');
// console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
// console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
// console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.salesJournal('model'));

// New car added: Honda CR-V (2010) / 120000 km. - 15000.00$
// New car added: VW Golf (2011) / 130000 km. - 12000.00$
// New car added: BMW X3 (2005) / 220000 km. - 9000.00$
// Honda CR-V (2010) is prepared for sale with 60000 km. - 19500.00$
// BMW X3 (2005) is prepared for sale with 110000 km. - 11700.00$
// Honda CR-V (2010) was sold for 17550.00$
// BMW X3 (2005) was sold for 9360.00$
// Shady Motors has a total income of 26910.00$
// 2 cars sold:
// BMW X3 (2005) / 110000 km. / 9360.00$
// Honda CR-V (2010) / 60000 km. / 17550.00$

