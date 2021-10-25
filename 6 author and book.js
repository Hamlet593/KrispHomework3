/*Create an Author class and a Book class. Author should have: name, email, gender.
It should have appropriate getters and setters. It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
It should have a toString method.*/

class Author {
  constructor(name, email, gender){
    this.name = name;
    this.email = email;
    this._gender = gender;
  }
  
  set name(value){
    return this._name = value
  }
  
  get name(){
    return this._name;
  }
  
  set email(value){
    return this._email = value;
  }
  
  get email(){
    return this._email;
  }
  
  get gender(){
    return this._gender;
  }
  
  toString(){
    return JSON.stringify(this)
  }
  
}

const author = new Author('Hamo', 'hamomuradyan93@gmail.com', 'male');

class Book {
  constructor(title, author, price, quantity){
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
  
  set title(value){
    return this._title = value
  }
  
  get title(){
    return this._title;
  }
  
  set author(value){
    if(value instanceof Author){
      return this._author = value
    }
    else{
      console.log('Invalid input')
    }
  }
  
  get author(){
    return this._author;
  }
  
  set price(value){
    return this._price = value;
  }
  
  get price(){
    return this._price;
  }

  set quantity(value){
    return this._quantity = value;
  }
  
  get quantity(){
    return this._quantity;
  }
  
  getProfit(){
    return this.price * this.quantity
  }
  
  toString(){
    return JSON.stringify(this)
  }  
    
}

const book = new Book('Master & Margarita', author, 5500, 80);
console.log(book.getProfit())