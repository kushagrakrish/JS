const nums = [1, 2, 3];

const reducedNum = nums?.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);

console.log(reducedNum);
