// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance = this.#balance + amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salry`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this.#salary = value;
    }
  }
}

let employee = new Employee("Kushagra", -30000);
employee.salary = -8000;
// console.log(employee.#salary);

function sqaurenumber(num) {
  return num * num;
}

function higherOrderFunction(arr, fn) {
  return arr?.map(fn);
}

let numbers = [1, 2, 3, 4];
console.log(higherOrderFunction(numbers, sqaurenumber));
// higherOrderFunction(numbers, sqaurenumber);
