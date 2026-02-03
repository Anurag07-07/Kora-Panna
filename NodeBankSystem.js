const fs = require('fs').promises; // File System with Promises

const bankDatabase = new Map();

// 1. Base Class: Account
class Account {
    // Protected property convention
    _accountHolder;
    
    // Private property (Truly private)
    #balance;

    constructor(name, initialBalance) {
        this._accountHolder = name;
        this.#balance = initialBalance;
        this.transactions = []; // Array to store history
        bankDatabase.set(this._accountHolder,this.#balance)
    }

    // Getter for balance (Read-only for outside world)
    get balance() {
        return this.#balance;
    }

    // Protected-style method to modify balance
    _modifyBalance(amount) {
        this.#balance += amount;
        this.transactions.push({
            type: amount > 0 ? 'CREDIT' : 'DEBIT',
            amount: amount,
            date: new Date()
        });
    }

    deposit(amount){
      this._modifyBalance(amount)
    }

    processInternationalTransfer(amount,callback){
      return new Promise(function(resolve,reject){
        setTimeout(function(){
          if (amount>10000) {
          reject("Audit Required")
        }else{
          resolve(callback)
        }
        },2000)
      })
    }

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}

//Task 1
class Investment extends Account{
  static INTEREST_RATE = 0.05
  #lockedFunds=true

  constructor(name){
    super._accountHolder = name
  }

  set lockStatus(status){
    this.#lockedFunds = status
  }

  _modifyBalance(amount){
    if (this.#lockedFunds===true && amount<0) {
      throw new Error("Funds are Locked")
    }
    super._modifyBalance(amount)
  }
}

const accountObj1 = new Account("Anurag",5000)
const accountObj2 = new Account("Chitranshi",9000)
const accountObj3 = new Account("Manoj",5000)
const accountObj4 = new Account("Osheen",5000)
const accountObj5 = new Account("IDK",-500)

//Task 2
async function generateMonthlyStatement(accountObj){
  try {
    const {_accountHolder,transactions} = accountObj
    const filename = `statement_${_accountHolder}.txt`
    const Data = JSON.stringify(transactions)
    await fs.writeFile(filename,Data)
    console.log("Recipt Generated");
    
  } catch (error) {
    throw new Error("Give me the file")
  }
}

accountObj1.deposit(50000)

generateMonthlyStatement(accountObj1)

//Task 3
accountObj1.processInternationalTransfer(1000000,function(){
  console.log("Transfer Completed");
}).then(function(data){
  data()
}).catch(function(data){
  console.log(data);
})

//Task 4
function auditBankAssests(bankDatabase){
  let sum = 0
  for (const element of bankDatabase) {
    if (element[1]<0) {
      console.log(element[0]);
    }    
    sum+=element[1]
  }
  console.log(sum);
}

auditBankAssests(bankDatabase)

//Task 5
async function EndofDay() {
  const acc = new Account("AJ",50000)
  const inv = new Investment("CJ")

  acc.deposit(500000000)
  inv.deposit(60000)

  Promise.all([generateMonthlyStatement(acc),generateMonthlyStatement(inv)]).then(()=>{
      console.log("Statement Generated");
  })

  auditBankAssests(bankDatabase)
}

EndofDay()