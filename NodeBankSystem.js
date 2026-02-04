// const fs = require('fs').promises;

const { console } = require('inspector');

// // Bank Database
// const bankDatabase = new Map();

// // ================= BASE CLASS =================
// class Account {
//   _accountHolder;      // protected style
//   #balance;            // truly private

//   constructor(name, initialBalance) {
//     if (initialBalance < 0) {
//       throw new Error("Initial balance cannot be negative");
//     }

//     this._accountHolder = name;
//     this.#balance = initialBalance;
//     this.transactions = [];

//     bankDatabase.set(this._accountHolder, this.#balance);
//   }

//   // Read-only balance
//   get balance() {
//     return this.#balance;
//   }

//   // Protected balance modifier
//   _modifyBalance(amount) {
//     this.#balance += amount;

//     bankDatabase.set(thisw._accountHolder, this.#balance);

//     this.transactions.push({
//       type: amount > 0 ? "CREDIT" : "DEBIT",
//       amount,
//       date: new Date()
//     });
//   }

//   deposit(amount) {
//     if (amount <= 0) {
//       throw new Error("Invalid deposit amount");
//     }
//     this._modifyBalance(amount);
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       throw new Error("Insufficient balance");
//     }
//     this._modifyBalance(-amount);
//   }

//   processInternationalTransfer(amount) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (amount > 10000) {
//           reject("Audit Required");
//         } else {
//           resolve("Transfer Completed");
//         }
//       }, 2000);
//     });
//   }

//   displaySummary() {
//     console.log(`Holder: ${this._accountHolder} | Balance: ₹${this.balance}`);
//   }
// }

// // ================= DERIVED CLASS =================
// class Investment extends Account {
//   static INTEREST_RATE = 0.05;
//   #lockedFunds = false;

//   constructor(name, initialBalance) {
//     super(name, initialBalance);
//   }

//   set lockStatus(status) {
//     this.#lockedFunds = status;
//   }

//   _modifyBalance(amount) {
//     if (this.#lockedFunds && amount < 0) {
//       throw new Error("Funds are locked");
//     }
//     super._modifyBalance(amount);
//   }
// }

// // ================= TASK 2 =================
// async function generateMonthlyStatement(accountObj) {
//   try {
//     const { _accountHolder, transactions } = accountObj;
//     const filename = `statement_${_accountHolder}.txt`;

//     await fs.writeFile(filename, JSON.stringify(transactions, null, 2));
//     console.log(`Statement generated for ${_accountHolder}`);
//   } catch (error) {
//     console.error("Error generating statement:", error);
//   }
// }

// // ================= TASK 4 =================
// function auditBankAssets(database) {
//   let total = 0;

//   for (const [name, balance] of database) {
//     if (balance < 0) {
//       console.log("Negative Balance Account:", name);
//     }
//     total += balance;
//   }

//   console.log("Total Bank Assets:", total);
// }

// // ================= TESTING =================

// // Accounts
// const acc1 = new Account("Anurag", 5000);
// const acc2 = new Account("Chitranshi", 9000);
// const acc3 = new Account("Manoj", 5000);
// const acc4 = new Account("Osheen", 5000);

// // Transactions
// acc1.deposit(50000);
// acc2.withdraw(3000);

// // Statements
// generateMonthlyStatement(acc1);

// // International Transfer
// acc1.processInternationalTransfer(5000)
//   .then(console.log)
//   .catch(console.log);

// // ================= END OF DAY =================
// async function EndOfDay() {
//   const acc = new Account("AJ", 50000);
//   const inv = new Investment("CJ", 500000);

//   inv.lockStatus = true;
//   acc.deposit(500000);
//   inv.deposit(60000);

//   await Promise.all([
//     generateMonthlyStatement(acc),
//     generateMonthlyStatement(inv)
//   ]);

//   auditBankAssets(bankDatabase);
// }

// EndOfDay();




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

    processInternationalTransfer(amount, callback){
      return new Promise((resolve,reject)=>{
        setTimeout(function(){
          if (amount>10000) {
            reject("Audit Required")
          }else{
            resolve()
          }
        },2000)
      })
    }

    displaySummary() {
        console.log(`Holder: ${this._accountHolder} | Balance: $${this.balance}`);
    }
}

//Task 1
class InvestmentAccount extends Account{
  static INTEREST_RATE = 0.05
  #lockedfunds = true

  set lockStatus(status){
    this.#lockedfunds = status
  }

  _modifyBalance(amount){
    if (this.#lockedfunds===true && amount<0 ) {
      throw new Error("Funds are locked")
    }
    super._modifyBalance(amount)
  }
}

const user = new Account("user1",50000)
user._modifyBalance(5000)

//Task2 
async function generateMonthlyStatement(accountObj){
  try {
    const{transactions,_accountHolder}=accountObj
    //Convert the Array into String
    const data =  JSON.stringify(transactions)
    //Create a File name
    const path = `statement_${_accountHolder}.txt`
    await fs.writeFile(path,data)
    console.log("Statement Generated");
  } catch (error) {
    throw new Error(error)
  }
}

generateMonthlyStatement(user)

//Task 3


async function main() {
  try {
    await user.processInternationalTransfer(50000,()=>{})    
    console.log("Transfer Completed");
  } catch (error) {
    console.log(error);
  }
}

main()