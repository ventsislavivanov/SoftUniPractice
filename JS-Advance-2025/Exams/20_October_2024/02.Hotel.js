class Hotel {
  initialBudget;
  roomAvailability = {};
  supplyStock = {};

  constructor(initialBudget) {
    this.initialBudget = Number(initialBudget);
  }

  restockSupplies(supplies) {
    let messages = [];

    for (let supply of supplies) {
      let [supplyName, quantityStr, totalPriceStr] = supply.split(" ");
      let quantity = Number(quantityStr);
      let totalPrice = Number(totalPriceStr);

      if (totalPrice <= this.initialBudget) {
        this.initialBudget -= totalPrice;
        this.supplyStock[supplyName] = (this.supplyStock[supplyName] || 0) + quantity;
        messages.push(`Successfully stocked ${quantity} ${supplyName}`);
      } else {
        messages.push(`There was not enough money to restock ${quantity} ${supplyName}`);
      }
    }

    return messages.join('\n');
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (this.roomAvailability[roomType]) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    }

    this.roomAvailability[roomType] = {
      neededSupplies: neededSupplies.map(s => {
        let [name, quantity] = s.split(" ");
        return { name, quantity: Number(quantity) };
      }),
      pricePerNight
    };

    return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
  }

  showAvailableRooms() {
    if (Object.keys(this.roomAvailability).length === 0) {
      return "Our rooms are not ready yet, please come back later...";
    }

    return Object.entries(this.roomAvailability)
      .map(([roomType, details]) => `${roomType} - $ ${details.pricePerNight}`)
      .join("\n");
  }

  bookRoom(roomType) {
    if (!this.roomAvailability[roomType]) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    let { neededSupplies, pricePerNight } = this.roomAvailability[roomType];

    for (let { name, quantity } of neededSupplies) {
      if (!this.supplyStock[name] || this.supplyStock[name] < quantity) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }

    return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
  }
}


// let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

//Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo


//let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

//Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo
// Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?
// Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?
// The Standard Room is already available in our hotel, try something different.


//let hotel = new Hotel(500);
// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

//Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo
// Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?
// Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?
// Deluxe Suite - $ 200
// Standard Room - $ 100


let hotel = new Hotel(500);
console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));

//Successfully stocked 100 Soap
// Successfully stocked 20 Towels
// Successfully stocked 50 Shampoo
// Great idea! Now with the Deluxe Suite, we have 1 types of rooms available, any other ideas?
// Great idea! Now with the Standard Room, we have 2 types of rooms available, any other ideas?
// Deluxe Suite - $ 200
// Standard Room - $ 100
// There is no Apartment available, would you like to book another room?
// Your booking for Deluxe Suite has been confirmed! The price is $200 per night.