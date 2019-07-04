function Ninja(name) {
  var self = this;
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;
  this.showStats = function () {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
  }
  this.kick = function (ninja) {
    var damage = strength * 15;
    ninja.health -= damage;
    console.log("OOOOFFFF " + this.name + " kicked " + ninja.name + " so hard he crippled them for " + damage + " health points");
  }
}

Ninja.prototype.sayName = function () {
  console.log("my ninja name is " + this.name);
}
Ninja.prototype.drinkSake = function () {
  this.health += 10;
}
Ninja.prototype.punch = function (ninja) {
  ninja.health -= 5;
  console.log("OOOOOF, someone got rocked. " + ninja.name + " is at " + ninja.health + " health");
}

var ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.showStats();

var blueNinja = new Ninja("Bob Barker");
var redNinja = new Ninja("Adam Sandler");

redNinja.punch(blueNinja);
redNinja.kick(blueNinja);