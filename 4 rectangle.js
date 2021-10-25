/*Create a Rectangle class. Rectangle should have: length and width. It should have getters and setters for all fields.
It should have getArea() method.
It should have getPerimeter() method.
It should have toString() method.*/

class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }
  
  get width(){
    return this._width
  }
  
  set width(value){
    return this._width = value;
  }
 
  get length(){
    return this._length
  }
  
  set length(value){
    return this._length = value
  }
  
  getArea(){
    return this.length * this.width
  }

  getPerimeter(){
    return 2 * (this.width + this.length);
  }
  
  toString(){
    return JSON.stringify(this);
  }
  
}

let example1 = new Rectangle(100, 200);