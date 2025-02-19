const name = {
  name: "Kushagra",
  greet() {
    console.log(`Hi , my name is ${this.name}`);
  },
};

name.greet();

// If i try to assign this to a variable then the context is lost
const newPerson = name.greet;
newPerson();

// Now try to bind this
const bindedCOntextFunction = name.greet.bind({
  name: "Disha",
});

bindedCOntextFunction();
