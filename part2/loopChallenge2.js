//  Write a for loop that loops on let teas = ["green tea", "black tea", "chai", "coffee"]; and loop should stop on "chai" and store the all the varaibles in a new array

let teas = ["green tea", "black tea", "chai", "coffee"];

let selectedTea = [];

// for (let t = 0; t < teas[2]; t++) {
//   let finalTeas = teas[t];
//   console.log(finalTeas);
//   selectedTea?.push(finalTeas);
// }

for (let t = 0; t < teas?.length; t++) {
  if (teas[t] === "chai") {
    break;
  }
  let finalTeas = teas[t];
  selectedTea?.push(finalTeas);
}

console.log(selectedTea);

// 2

// write a for looop on array cities and skip the bhopal city and store the remaining ones onto the new array called visitedCities

let cities = ["Delhi", "Indore", "Bhopal", "Ujjain"];

let visitedCities = [];

for (let i = 0; i < cities?.length; i++) {
  if (cities[i] === "Bhopal") {
    continue;
  }
  visitedCities?.push(cities[i]);
}

console.log(visitedCities);

// 3 => Done using the for loop

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (let i = 0; i < numbers?.length; i++) {
  if (numbers[i] === 4) {
    break;
  }
  smallNumbers?.push(numbers[i]);
}

console.log(smallNumbers);

// Do this with for of

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

console.log(smallNumbers);
