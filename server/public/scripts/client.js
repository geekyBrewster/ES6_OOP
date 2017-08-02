console.log('Up and Atom!');

class Beverage {
  constructor( color, quantity, carbonation ) {
    this.color = color;
    this.quantity = quantity;
    this.carbonation = carbonation;
  }
  refillBeverage(quantity, amount){
    if(quantity = 0){
      quantity += amount;
    } else {
      quantity -= amount;
    }
  }
}

class Beer extends Beverage {
  constructor(color, quantity, carbonation, abv){
    super(color, quantity, carbonation);
    this.abv = abv;
  }
}

class Soda extends Beverage {
  constructor(color, quantity, carbonation, brand, cost){
    super(color, quantity, carbonation);
    this.brand = brand;
    this.cost = cost;
  }
  refillBeverage(quantity, amount, cost){
    super.refillBeverage(quantity, amount);
    if(cost < 5){
      refillBeverage();
    } else {
      console.log("It's too expensive to refill.");
    }
  }
}

let porter = new Beer('brown', 12, true, 6.8);
let mtDew = new Soda('yellow', 16, true, 'Mountain Dew', 1.99 );
let milk = new Beverage('white', 8, false);
