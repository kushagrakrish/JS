// check if a number is greater than other
let num1 = 7;
let num2 = 10;
const c = num1 > num2;
console.log(c);

// use if else
// if (num1 > num2) {
//   return false;
// } else {
//   return true;
// }

// CHeck if string is equal to another string
// let name = "Kushagra";
// let sameName = "Kushagrsa";

// if (name === sameName) {
//   console.log("Yes it is a same name");
// } else {
//   console.log("no it is not same name");
// }

// Check a variable is a number or not
let value = 12;
if (typeof value === "number") {
  console.log("Yes it is a number");
} else {
  console.log("No it is not a number");
}

// Check if array is emoty or not
let arr = [];
console.log(arr?.length);
if (arr?.length <= 0) {
  console.log("Array is empty");
} else {
  console.log("Arry has values");
}
