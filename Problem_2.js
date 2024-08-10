// Problem - 2 :
// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional property designation and a method getDetails to display the employee details.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

class Employee extends Person {
  constructor(name, age, designation) {
    super(name, age);
    this.designation = designation;
  }

  getDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`
    );
  }
}

let Employee_1 = new Employee("Himanshu", 21, "Software Engineer");
Employee_1.sayHello();
Employee_1.getDetails();
