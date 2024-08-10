// Problem - 1 :
// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add a method sayHello to greet the person.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


const person1 = new Person("Himanshu", 21);
person1.sayHello();
// Output: Hello, my name is Himanshu and I am 21 years old.
