function Animal(type) {
  this.type = type;
}

Animal.prototype.speaks = function () {
  return `${this.type} makes the sound`;
};

let dog = new Animal("Dog");

console.log(dog.speaks());

// Creating a class

class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  start() {
    return `This is a ${this.name} car of model ${this.model}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `This is an example of inheritnace ${this.name}`;
  }
}

let testCar = new Car("Ferrari", 1900);
console.log(testCar.start());
console.log(testCar.drive());
