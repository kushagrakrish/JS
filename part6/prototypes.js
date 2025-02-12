let computer = { cpu: 12 };
let apple = { screen: "FHD", __proto__: computer };
let lenevo = {};
console.log(apple?.__proto__);
