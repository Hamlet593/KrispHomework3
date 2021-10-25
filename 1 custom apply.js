/*Implement your custom apply method.*/

Function.prototype.myApply = function(context, args){
  const newFunc = Object.create(typeof context === 'object' ? context : {context}); //I write ternary operator for all spacial cases if the transmitted context is not object the code will not be throw an error.
  if(!Array.isArray(args)){
    throw new Error('Փոխանցի array-ի մեջ, սա քեզ համար call չէ');
  };
  newFunc.fn = this;
  return newFunc.fn(...args)
}

function hamo(arg1, arg2) {
  console.log(arg1 + arg2)
  return (`${this.name} ${this.surName}`);
};

let obj = {
  name: 'Hamo',
  surName: 'Muradyan',
};

console.log(hamo.myApply(obj, [3, 25]))
console.log(hamo.apply(obj, [3, 25]))