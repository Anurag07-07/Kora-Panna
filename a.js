const fs = require('fs').promises; // File System with Promises

//Database
const bankDatabase = new Map();

class Account {
  // Protected property convention
  _accountHolder;

  // Private property (Truly private)
  #balance;

  constructor(name, initialBalance) {
    this._accountHolder = name;
    this.#balance = initialBalance;
    this.transactions = []; // Array to store history
    bankDatabase.set(this._accountHolder, this.#balance)
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

    bankDatabase.set(this._accountHolder, this.#balance)
  }

  deposit(amount) {
    this._modifyBalance(amount)
  }

  processInternationalTransfer(amount, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (amount > 10000) {
          reject("Audit Required")
        } else {
          resolve()
        }
      }, 2000)
    })
  }

  displaySummary() {
    console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
  }
}

//Task 1
class InvestmentAccount extends Account {
  static INTEREST_RATE = 0.05
  #lockedfunds = true

  constructor(name, initialBalance) {
    super(name, initialBalance)
  }

  set lockStatus(status) {
    this.#lockedfunds = status
  }

  _modifyBalance(amount) {
    if (this.#lockedfunds === true && amount < 0) {
      throw new Error("Funds are locked")
    }
    super._modifyBalance(amount)
  }
}

const user = new Account("user1", 50000)
user._modifyBalance(5000)

//Task2 
async function generateMonthlyStatement(accountObj) {
  try {
    const {
      transactions,
      _accountHolder
    } = accountObj
    //Convert the Array into String
    const data = JSON.stringify(transactions)
    //Create a File name
    const path = `statement_${_accountHolder}.txt`
    await fs.writeFile(path, data)
    console.log("Statement Generated");
  } catch (error) {
    throw new Error(error)
  }
}

generateMonthlyStatement(user)

//Task 3


async function main() {
  try {
    await user.processInternationalTransfer(50000, () => {})
    console.log("Transfer Completed");
  } catch (error) {
    console.log(error);
  }
}

main()


//Task 4

function auditBankAssets(databaseMap) {
  let bank_amount = 0;
  for (const [key, value] of databaseMap) {
    if (value < 0) {
      console.log(key);
      continue
    }
    bank_amount += value
  }
}

auditBankAssets(bankDatabase)

//Task 5
function EndofDay() {
  const acc = new Account("user1", 50000)
  const inv = new InvestmentAccount("user2", 5000)

  acc.deposit(5000)
  inv.deposit(5000)

  Promise.all([generateMonthlyStatement(acc), generateMonthlyStatement(inv)]).then(() => {
    console.log("Statement Generated");
  })

  auditBankAssets(bankDatabase)
}

EndofDay()