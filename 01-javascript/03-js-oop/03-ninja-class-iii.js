class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("Hi! My name is " + this.name);
  }
  showStats() {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.widsom = 10;
  }

  drinkAndSpeak() {
    super.drinkSake();
    console.log("ahhh that was good sake, I feel healthier");
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.drinkAndSpeak();