// Base class Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        return '';
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const circle = document.createElement('div');
        circle.className = 'shape circle';
        circle.style.backgroundColor = this.color;
        circle.style.width = '100px';
        circle.style.height = '100px';
        return circle;
    }
}

// Triangle class extending Shape
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const triangle = document.createElement('div');
        triangle.className = 'shape triangle';
        triangle.style.borderBottomColor = this.color;
        return triangle;
    }
}

// ✅ TODO Completed: Rectangle class
class Rectangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const rectangle = document.createElement('div');
        rectangle.className = 'shape rectangle';
        rectangle.style.backgroundColor = this.color;
        rectangle.style.width = '140px';
        rectangle.style.height = '80px';
        return rectangle;
    }
}

// ✅ TODO Completed: ShapeManager class
class ShapeManager {
    constructor() {
        this.shapes = []; // store Shape objects
    }

    addShape(shape) {
        this.shapes.push(shape);
        this.updateShapeContainer();
    }

    updateShapeContainer() {
        const container = document.getElementById('shapeContainer');
        container.innerHTML = '';

        this.shapes.forEach(shape => {
            const element = shape.draw(); // polymorphism → calls correct draw()
            container.appendChild(element);
        });
    }
}

// Initialize ShapeManager
const shapeManager = new ShapeManager();

// Handle form submission to add a new shape
document.getElementById('addShapeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const shapeType = document.getElementById('shapeType').value;
    const color = document.getElementById('color').value;

    let newShape;

    switch (shapeType) {
        case 'circle':
            newShape = new Circle(color);
            break;
        case 'rectangle':
            newShape = new Rectangle(color);
            break;
        case 'triangle':
            newShape = new Triangle(color);
            break;
    }

    shapeManager.addShape(newShape);

    // Reset form
    document.getElementById('shapeType').value = 'circle';
    document.getElementById('color').value = '#000000';
});
