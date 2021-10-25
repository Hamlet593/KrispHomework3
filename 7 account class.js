/*Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not, comparing all fields.
It should have toString method.*/

class Account {
  constructor(id, name, balance){
    this._id = id;
    this.name = name;
    this.balance = balance;
  }
  
  set name(value){
    return this._name = value;
  }
  
  get name(){
    return this._name;
  }
  
  set balance(value){
    return this._balance = value;
  }
  
  get balance(){
    return this._balance;
  }
  
  get id(){
    return this._id;
  }
  
  credit(amount){
    return this.balance += amount;
  }
  
  debit(amount){
    if(amount > this.balance){
      return 'Amount exceeded balance';
    }
    return this.balance -= amount;
  }
  
  transferTo(AnotherAccount, amount){
    if(amount > this.balance){
      return 'Amount exceeded balance';
    }
    this.balance -= amount;
    return AnotherAccount.balance += amount;
  }
  
  static identifyAccounts(myAccount, AnotherAccount){
    if(JSON.stringify(myAccount) === JSON.stringify(AnotherAccount)){
      return true;
    }
    return false;
  }
  
  toString(){
    return JSON.stringify(this);
  }
}

let myAccount = new Account(580282, 'Hamo', 0);
let AnotherAccount = new Account(580283, 'Tigran', 0);