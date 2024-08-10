// Problem - 3 :
// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this within these methods such that method chaining of add, subtract, multiply and divide is possible.

class Calculator {
    constructor () {
        this.value = 0;
    }

    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    divide(num) {
        if(num !== 0) {
            this.value /= num;
        }
        else {
            console.log("Cannot divide by zero");
        }
        return this;
    }
    getResult() {
        return this.value;
    }
}


const calculator = new Calculator();
const result = calculator.add(13).subtract(2).multiply(3).divide(2).getResult();

console.log(result); 
// Output: 16.5