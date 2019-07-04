function Ninja(name) {
  var self = this;
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;
  this.showStats = function () {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
  }
}

Ninja.prototype.sayName = function () {
  console.log("my ninja name is " + this.name);
}
Ninja.prototype.drinkSake = function () {
  this.health += 10;
}

var ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.showStats();

