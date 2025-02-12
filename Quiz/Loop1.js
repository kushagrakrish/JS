// Write a while loop that calculate the sum of all numbers from1 to 5 and stores the result in a variable named sum
let sum = 0;
let i = 0;
while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);
// 2 Write a while loop that counts down from 5 to 1 and stores the number in an array named countdown
let arr = [];
let j = 1;
while (j <= 5) {
  arr?.push(j);
  j++;
}
// console.log(arr);

// 3 Write a do while loop that prompts user to enter their fav tea type until they enter "stop" store each tea type in an array 'teaCollection`
const teaCollection = [];
let tea;

// do {
//   tea = prompt(`Enter the tea`);
//   if (tea !== "stop") {
//     teaCollection?.push(tea);
//   }
// } while (tea !== "stop");

// Write a do while loop that adds number from 1 to 3 and stores in variable called total

let total = 0;
let z = 1;
do {
  total = total + z;
  z++;
} while (z <= 3);
// console.log(total);

// Write a for loop that multiplies each element of array [2,4,6] by 2 and stores the result in a new array called multipliedNumbers
let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let x = 0; x < numbers.length; x++) {
  //   const newArr = numbers[x] * 2;
  console.log(numbers[x]);
  //   multipliedNumbers?.push(newArr);
}

console.log(multipliedNumbers);

// Write a for loop that lists all the cities in array  ["Paris","New York","tokyo","London"] and stores each city in a new array named 'cityList`
let cities = ["Paris", "New York", "tokyo", "London"];
let cityList = [];

// for (let c = 0; c < cities?.length; c++) {
//   let finalCities = cities[c];
//   console.log(finalCities);
//   cityList?.push(finalCities);
// }
console.log(cityList?.concat(cities));
