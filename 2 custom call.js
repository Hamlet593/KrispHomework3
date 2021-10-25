/*Implement your custom call method.*/

Function.prototype.myCall = function(context, ...args) {
  const newFunc = Object.create(typeof context === 'object' ? context : {context});  
  newFunc.fn = this;
  return newFunc.fn(...args);
}

function hamo(arg1, arg2) {
  console.log(arg1 + arg2)
  return (`${this.name} ${this.surName}`);
};

let obj = {
  name: 'Hamo',
  surName: 'Muradyan',
};

console.log(hamo.myCall(obj, 3, 25))
console.log(hamo.call(obj, 3, 25))