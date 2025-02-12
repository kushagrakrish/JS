//1

function makeTea(typeOfTea) {
  return typeOfTea;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl gray");
}

const order = processTeaOrder(makeTea);
console.log(order);

// 2

function returnedFunction(teaType) {
  return `Making ${teaType}`;
}

function createTeaMaker(newTeaFunction) {
  return newTeaFunction();
}

const teaMaker = createTeaMaker(() => returnedFunction("green tea"));
console.log(teaMaker);
