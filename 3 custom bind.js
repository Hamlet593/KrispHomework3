/*Implement your custom bind method.*/

Function.prototype.myBind = function(context, ...args){
  const newFunc = Object.create(typeof context === 'object' ? context : {context});
  newFunc.fn = this;
  return function(){
    return newFunc.fn(...args);
  }
}

const myScope = {
  name: 'Hamo',
  surName: 'Muradyan',
};

function hamo(input1, input2) {
  console.log(input1 + ' ' + input2);
  return this.name + ' ' + this.surName;
}

let x = hamo.myBind(myScope, 'some data1', 'some data2');
console.log(x())