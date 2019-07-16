class Bicycle {
  price: number;
  max_speed: number;
  miles: number;

  constructor(price: number, max_speed: number) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
  }

  displayinfo() {
    return "Price: " + this.price + " max speed: " + this.max_speed + " miles: " + this.miles;
  }

  ride() {
    this.miles += 10;
    return "Riding...";
  }

  reverse() {
    this.miles -= 5;
    return "Reversing...";
  }
}


let bike1 = new Bicycle(1499, 49);
console.log(bike1.displayinfo())
console.log(bike1.ride())
console.log(bike1.displayinfo())
console.log(bike1.reverse())
console.log(bike1.displayinfo())
