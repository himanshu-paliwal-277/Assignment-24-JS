// Problem - 4 :
// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override the draw method. Demonstrate polymorphism using instances of these classes.

class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a Circle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Drawing a Rectangle');
    }
}

function renderShape(shape) {
    shape.draw();
}
  
const circle = new Circle();
const rectangle = new Rectangle();
  
renderShape(circle);    
// Output: Drawing a Circle
renderShape(rectangle); 
// Output: Drawing a Rectangle
