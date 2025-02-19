// Ex 1 Step to fund the second largest value in array
const intArray = [1, 2, 66, 99, 7];

const largetValue = (arr) => {
  const firstLargestValue = arr.reduce((arr, curr) => {
    return curr > arr ? curr : arr;
  });
  const indexOfFirstLargestValue = arr.indexOf(firstLargestValue);
  const removeFirstLargestValue = arr.splice(indexOfFirstLargestValue, 1);
  const secondLargestVal = arr.reduce((arr, curr) => {
    return curr > arr ? curr : arr;
  });
  return secondLargestVal;
};

// console.log(largetValue(intArray));

//Ex 2 Diff between filter and find

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 41 },
  { name: "David", age: 28 },
  { name: "Emma", age: 37 },
  { name: "Frank", age: 50 },
  { name: "Grace", age: 22 },
  { name: "Hannah", age: 45 },
  { name: "Ian", age: 30 },
  { name: "Jack", age: 27 },
];

const filteredArry = people?.filter((item) => {
  return item.age > 30;
});

console.log(filteredArry);

const findArray = people.find((item) => {
  return item.age < 30;
});

console.log(findArray);

//Ex 3 How to Find missing elements in a given Array 1 to 10

const missingVal = [];

const findMissingNumber = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingVal.push(i);
    }
  }
  return missingVal;
};

console.log(findMissingNumber(intArray));
