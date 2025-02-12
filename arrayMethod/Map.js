const nums = [1, 2, 4, 10, 5, 6, 7, 899];

// add 10 to all numbers

const addTen = nums?.map((num) => {
  return num + 10;
});

console.log(addTen);

// Chaining of num and filter

const chaining = nums?.map((item) => {
  const multipliedNum = item * 10;
  //   const filteredNum = (multipliedNum > 20 ? multipliedNum : null)?.filter(
  //     (item) => item !== null
  //   );
  //   return filteredNum;
  return multipliedNum?.filter((item) => item > 10);
});

console.log(chaining);
