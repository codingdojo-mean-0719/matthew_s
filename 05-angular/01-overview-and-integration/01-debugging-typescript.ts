// import { dirname } from "path";

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";

// myString is a string, so wrapping the 9 in quotes will make the number 9 a string rather than int

function sayHello(name: string) {
  return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));

//name is declared as a string, so wrapping it in quotes turned 9 into a string rather than int

function fullName(firstName: string, lastName: string, middleName?: string) {
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

// By making middleName an optional argument, it will run without any errors, so adding a ? after the middleName declaration

interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student) {
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

// Jay omitted the 's' on belts so the interface didn't recognize the values of the object. Changing to belts matched the interface


class Ninja {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }
  debug() {
    console.log("Console.log() is my friend.")
  }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Alan", "Turing");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
  fullName: "Alan Turing",
  firstName: "Alan",
  lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
  return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(shane));

// shane is not a valid const because you didn't create an instance of the class. So adding new will create that. Also you needed two parameters, so passing in the 
// 2 strings would make the instance work. The study didn't function because the parameter was an instance of the Ninja class.
// since we fixed the ninja class constructor, we could pass in shane with no errors

var increment = x => { x + 1 };
// This works great:
console.log(increment(3));
const square = x => { x * x };
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => { x * y };
// Nor is this working:
var math = (x, y) => {
  let sum = x + y;
  let product = x * y;
  let difference = Math.abs(x - y)
  return [sum, product, difference];
};


// with arrow functions, you still need to have the curly braces to indicate the start and end of the function, so wrapping the actual function
// in the curly braces gets rid of the errors

class Elephant {
  constructor(public age: number) { }
  birthday() {
    this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday.bind(babar), 1000)
setTimeout(function () {
  console.log(`Babar's age is ${babar.age}.`)
}, 2000)

// Arrow function disconnected from the class. using bind... or arrow function will cause babar's age to increase

class Elephant {
  constructor(public age: number) { }
  birthday = () => {
    this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
  console.log(`Babar's age is ${babar.age}.`)
}, 2000)