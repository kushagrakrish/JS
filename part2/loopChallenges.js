// Write a while loop that calculate the sum of all numbers from1 to 5 and stores the result in a variable named sum

let sum = 0;
let i = 0;
while (i <= 5) {
  sum = sum + i;
  i++;
}
0 + 1 + 3 + 5 + console.log(sum);
// sum=0 ;i=1
// sum=1 ;i=2
// sum=3 ; i=3
// sum=

// 2 Write a while loop that counts down from 5 to 1 and stores the number in an array named countdown
let countdown = [];
let j = 0;
while (j <= 5) {
  countdown?.push(j);
  j++;
}

console.log(countdown);

// 3 Write a do while loop that prompts user to enter their fav tea type until they enter "stop" store each tea type in an array 'teaCollection`

let teaCollection = [];
let tea;

// do {
//   tea = prompt(`Enter your fav tea(type "stop") to finish`);
//   if (tea !== "stop") {
//     teaCollection?.push(tea);
//   }
// } while (tea !== "stop");

// // While loop is a loop that can execute a block of code as long as a specified condition is true.

// Write a do while loop that adds number from 1 to 3 and stores in variable called total

let total = 0;
let x = 1;

do {
  total = total + x;
  x++;
} while (x <= 3);

console.log(total);

// Write a for loop that multiplies each element of array [2,4,6] by 2 and stores the result in a new array called multipliedNumbers

let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let y = 0; y < numbers?.length; y++) {
  const takeNumber = numbers[y] * 2;
  multipliedNumbers?.push(takeNumber);
}
console.log(multipliedNumbers);

// Write a for loop that lists all the cities in array  ["Paris","New York","tokyo","London"] and stores each city in a new array named 'cityList`
let cities = ["Paris", "New York", "tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities?.length; c++) {
  let finalCities = cities[c];
  console.log(finalCities);
  cityList?.push(finalCities);
}
console.log(cityList);
