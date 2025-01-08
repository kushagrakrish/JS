// 1

const makeTea = (typeOfTea) => {
  //Here typeOfTea is  a parameter ,/Plcaholder
  return `Making ${typeOfTea}`;
};

makeTea("greenTea"); //Here greenTea is a argument
const teaOrder = makeTea("black tea");
console.log(teaOrder);

// Que 2

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

const letOrderConfirmation = orderTea("chai");
console.log(letOrderConfirmation);

// 3 do it by arrow function

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

const totalCost = calculateTotal(2, 10);
console.log(totalCost);
