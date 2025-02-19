// Coding challenge #1: Print numbers from 1 to 10

for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

// Coding challenge #2: Print the odd numbers less than 100

for (let i = 1; i < 100; i = i + 2) {
  //   console.log(i);
}

// Coding challenge #3: Print the multiplication table with 7

for (let i = 0; i <= 10; i++) {
  let row = "7 *" + i + "= " + 7 * i;
  //   console.log(row);
}

// Coding challenge #4: Calculate the sum of numbers from 1 to 10

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Coding challenge #5: Calculate the sum of odd numbers greater than 10 and less than 30
let newSum = 0;

for (let i = 11; i <= 30; i = i + 2) {
  newSum = newSum + i;
}
console.log(newSum);

// Coding challenge #6: Find Duplicate Elements in an array with filter

const arr = [1, 1, 3, 4, 5, 6, 6, 10];

function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(findDuplicates(arr));

// Coding challenge #6: Find Duplicate Elements in an array without filter method

// Below is with Object tracker
const elementTracker = {};
const duplicate = [];

arr?.map((item) => {
  if (elementTracker[item]) {
    duplicate?.push(item);
  } else {
    elementTracker[item] = true;
  }
});
// console.log(duplicate);

// Coding challenge #6: Find Duplicate Elements in an array without filter method

// Below is with loop

const testArray = [1, 2, 3, 2, 4, 5, 4, 5];
let testDuplicate = [];

for (let i = 0; i < testArray.length; i++) {
  for (let j = i + 1; j < testArray.length; j++) {
    if (testArray[i] === testArray[j]) {
      if (!testDuplicate.includes(testArray[i])) {
        testDuplicate.push(testArray[i]);
      }
    }
  }
}
// console.log(testDuplicate);

// Coding challenge 7 how to find Max and Min in a given array in javascript

const exArray7 = [1, 9, 222, 33, 51];
const maxNum = exArray7?.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, exArray7[0]);

console.log(maxNum);

const min = exArray7.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
}, exArray7[0]); 

console.log(min);
