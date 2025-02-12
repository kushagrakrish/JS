function Cars(name, model) {
  this.name = name;
  this.model = model;
}

// Above is a constructor function
let myCar = new Cars("Honda", 1999);
console.log(myCar);

// In order to use constructor function use new keyword along with function name

function tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this?.type}`;
  };
}

let newTea = new tea("Lemon Tea");
console.log(newTea?.describe());
