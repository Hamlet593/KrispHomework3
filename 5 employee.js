/*Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
It should have setters and getters for appropriate fields.
It should have a method: getFullName().
It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.*/

class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }
  
  set id(value){
    return this._id = value;
  }
  
  get id(){
    return this._id
  }
  
  set firstName(value){
    return this._firstName = value
  }
  
  get firstName(){
    return this._firstName
  }
    
  set lastName(value){
    return this._lastName = value
  }
  
  get lastName(){
    return this._lastName
  }
    
  set position(value){
    return this._position = value
  }
  
  get position(){
    return this._position
  }
    
  set salary(value){
    return this._salary = value
  }
  
  get salary(){
    return this._salary
  }
    
  set workingHours(value){
    return this._workingHours = value
  }
  
  get workingHours(){
    return this._workingHours
  }
  
  getFullName(){
    return this.firstName + ' ' + this.lastName
  }
  
  getAnnularSalary(){
    return this.salary * 12
  }
  
  raiseSalary(percent){
    return this.salary += (this.salary * percent / 100);
  }
  
}

let hamo = new Employee(1234556, 'Hamlet', 'Muradyan', 'Front-End Developer', 540000, 8)
console.log(hamo.getFullName())
console.log(hamo.getAnnularSalary())
console.log(hamo.raiseSalary(10))
console.log(hamo.getAnnularSalary())