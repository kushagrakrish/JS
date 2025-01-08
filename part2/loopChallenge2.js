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

// console.log(selectedTea);

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

// console.log(visitedCities);

// 3 => Done using the for loop

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (let i = 0; i < numbers?.length; i++) {
  if (numbers[i] === 4) {
    break;
  }
  smallNumbers?.push(numbers[i]);
}

// console.log(smallNumbers);

// Do this with for of

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(smallNumbers);
// 4

let teaTypes = ["green tea", "herbal tea", "chai", "black tea"];
let preferredTeas = [];

for (const teas of teaTypes) {
  if (teas === "herbal tea") {
    continue;
  }
  preferredTeas?.push(teas);
}

// console.log(preferredTeas);

// 5 Use a `for-in` loop to loop through an object containing city population and stop the loop when the population of "Berlin: is found and store all the previous cities in a new Object named 'cityPopulations"

let citiesPopulation = {
  London: 50000,
  "New York": 21320,
  Berlin: 23421,
  USA: 1232,
};

let newCityPopulation = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  newCityPopulation[city] = citiesPopulation[city];
}
// console.log(newCityPopulation);

let availableTeas = [];
teaTypes?.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas?.push(tea);
});
console.log(availableTeas);

// l

let array = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < array?.length; i++) {
  if (array[i] === 7) {
    continue;
  }
  console.log(array[i]);
  let doubledValue = 2 * array[i];
  doubledNumbers?.push(doubledValue);
}

console.log(doubledNumbers);

//
let newTeas = ["green tea", "herbal tea", "chai", "jasmine tea", "black tea"];
let shortTeas = [];

for (const tea of newTeas) {
  if (tea?.length > 10) {
    break;
  }
  shortTeas?.push(tea);
}

console.log(shortTeas);
