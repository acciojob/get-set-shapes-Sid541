//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	getArea(){
		let area = this._width * this._height
		return area;
	}

	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side)
		this.side = side;
	}
	getPerimeter(){
		let peri = 4 * this.side;
		return peri;
	}
}

// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

// Creating a Square instance
const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
