// let user = {}

// //Addition of Value
// user.name = "Javascript"
// user.abb = "JS"


// //Value access
// console.log(user.name);
// console.log(user['name']);

// //Delete the value
// delete user.name

// console.log(user);


// const lang = Object.freeze({
//   name:"Javascript",
//   abb:"JS"
// })

// lang.name = "Typescript"
// console.log(lang);

// let main = {
//   name:"Javascript",
//   greet:function(){
//     console.log("Hello");
//   }
// }

// main.greet()


//Assignment 1
// let smartHome = {
//   temp:22,
//   isLightOn:true
// }


// smartHome.securitySystem = "Active"
// console.log(`The Current Temp is ${smartHome['temp']} degress`);
// smartHome.temp = 18
// delete smartHome.isLightOn
// console.log(smartHome);

// const bankAccount = Object.freeze({
//   accountNumber:98765,
//   balance:{
//     amount:5000
//   }
// })

// bankAccount.balance.amount = 10000

// console.log(bankAccount);

//Function
// Functional Expression 
// Functional Equation 
// IIFE Immediately Invoked Functional Equation
// Arrow Functions


//Function Expression 
// main()

// function main(){
//   console.log("JS");
// }

// main()

//Functional Equation 
// let main1 = function(){
//   console.log("Javascript");
// }

// main1()

// IIFE 

// (function(){
//   console.log("DB Connected");
// })();

// (function(){
//   console.log("Redis Connected");
// })()

// let sum = (a,b)=>a+b

// console.log(sum(45,56));

// let sum = (a=50,b=50)=>a+b
// console.log(sum());


//Assignment 1
// function toCelcius(f){
//   let c = (f-32)*(5/9)
//   return c
// }

// const isFreezing = (temp)=>{
//   if (temp<0) {
//     return true
//   }
//   return false
// }


// function Test(){
//   let temp = toCelcius(32)
//   console.log(isFreezing(temp));
// }
// Test()


// function main(){
//   console.log("Hello");
//   return " Anu "
// }

// console.log(main());



// (()=>{
//   securityCode = 7
//   console.log(`System Initialized Security Code ${securityCode} generated`);
// })()

// console.log(securityCode);

// function main(){
  
// }

// main.prototype.Greet = function(){
//   console.log("Hello");
// }

// delete main.prototype.Greet

// function main2(){
//   let obj = new main()
//   obj.Greet()
// }

// main2()


// function Main(){

// }

// Main.prototype.Random = {
//   randomNumberGenerator:function(){
//     console.log(Math.random());
//   }
// }

// function GenerateNumber(){
//   const ans = new Main()
//   ans.Random.randomNumberGenerator()
// }

// GenerateNumber()

// Rest Operator Spread Operator 


// function main(a,...b){
//   console.log(a);
//   console.log(b);
// }

// main(1,2,1,3,2,1,2)


// let arr1 = [1,2,3,5,5,4,5]
// let arr2 = ['a','b']
// let arr3 = [...arr1,...arr2]

// let obj1 = {
//   name :"JS"
// }

// let obj2 = {
//   name :"TS"
// }

// let Obj3 = {...obj1,...obj2}

// console.log(Obj3);

//Destructing
// let arr = [{name:"Javascript"},{name:"Typescript"}]

// let [a,b,c] = arr

// console.log(a);
// console.log(b);
// console.log(c);

// let lang = {
//   name:"rust",
//   abb:"rs"
// }

// let {name,abb} = lang

// console.log(name);
// console.log(abb);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// loops 
// class get set static  
// Object 
// new 
// this and there uses in objects bind apply and call 
// Map and Date 

////Loops
//forof forin Object.data
//map foreach filter every reduce find 

//For of loop => array
// let arr = [1,2,3,4,5]


// for (let i of arr) {
//   console.log(i);
// }

// //For in Loop => Object
// let lang = {
//   name:"javascript",
//   abb:"js"
// }

// for (let key in lang) {
//   console.log(key,lang[key]);
// }

// //Object
// const a = Object.keys(lang)
// const b = Object.values(lang)
// const c = Object.entries(lang)

// console.log(a);
// console.log(b);
// console.log(c);

// map filter reduce every find foreach

// let arr = [1,2,3,4,5,5,7]

// function machine(data){
//   return data*2
// }

// const  ans1 = arr.map((i)=>i*2)

// const b = arr.forEach(function(data){
//   console.log(data*5);
// })

// console.log(b);

// function even(data){
//   return data%2!=0
// }

// const c = arr.filter(even)
// console.log(c);


// let friends = ["sam","sachin","ramesh"]

// let f = friends.filter(function(data){
//   return data.startsWith('s')!== true
// })

// console.log(f);

// let arr = ["a","b",9]

// let arr = [1,2,3,4,5]
// const ans = arr.every(function(data){
//   return typeof data === 'string'
// })

// let ele = arr.find(function(data){
//   return data === 6
// })

// console.log(ele);



// const sum = arr.reduce(function(sum,i){
//   return sum+i
// },0)

// console.log(sum);

const products = [
  { name: 'Apple', price: 1.5, category: 'Fruit' },
  { name: 'Onion', price: 0.8, category: 'Vegetable' },
  { name: 'Steak', price: 12.0, category: 'Meat' },
  { name: 'Banana', price: 1.2, category: 'Fruit' },
  { name: 'Carrot', price: 0.5, category: 'Vegetable' }
];



// let fruits = products.filter(function(data){
//   return data.category==='Fruit'
// })

// let name_data = []

// products.map(function(data){
//   name_data.push(data.name)
// })
// console.log(name_data);


// const total_cost = products.reduce((sum,product)=>{
//   return sum+product.price  
// },0)
// console.log(total_cost);


// const users = [
//   { id: 1, name: 'Alice', age: 22, hasID: true },
//   { id: 2, name: 'Bob', age: 17, hasID: true },
//   { id: 3, name: 'Charlie', age: 25, hasID: false },
//   { id: 4, name: 'David', age: 30, hasID: true }
// ];

// const user = users.find((data)=>{
//   return data.hasID===false
// })

// console.log(user);

// const bob = users.every(function(data){
//   return data.age>18
// })
// console.log(bob);

// users.forEach((user)=>{
//   console.log(`Checking Access for ${user.name}`);
// })


// const user = { id: 1, name: 'Alice', age: 22, hasID: true }

// Object.entries(user).forEach(([key,value])=>{
//   console.log(key,value);
// })

// static get set 

// class ABC{
//   static name  = "Maclaren"
//   constructor(name,brand){
//     this.name = name
//     this.brand = brand
//   }

//   static message(){
//    return `This is My Car ${this.name}`
//   }
// }

// console.log(ABC.name);
// console.log(ABC.message());


// const car1 = new Car("Koiensegg","Regera")

// console.log(car1.name);
// console.log(car1.brand);

// console.log(car1.message());

// class User{
//   // #name_name = "Anurag" # more private 
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }

//   get deatils(){
//     console.log(`The User Data is ${this.name} ${this.age}`);
//   }

//   set setage(age){
//     if (age>0) {
//       this.age = age
//     }
//   }
// }

// const user1 = new User("AJ",21)

// user1.deatils
// user1.setage = 95
// user1.deatils


// class BankAccount{
//   constructor(accountHolder,balance){
//     // this.__accountHolder = accountHolder  # private 
//     // this._balance = balance  # protected 
//   }

//   set balancer(balance){
//     if (balance<0) {
//       console.log(`Transaction Denied: Insufficient Funds`);
//     }else{
//       this._balance = balance
//     }
//   }

//   get formatedBalance(){
//     return `${this._balance}`
//   }

//   withdraw(amount){
//     this._balance -= amount
//   }
// }

// const user = new BankAccount('Anurag',99999995656656656545464469n)
// console.log(user.formatedBalance);



// class Book{
//   static totalBooks = 0;
//   constructor(title,author,price){
//     this.title = title
//     this.author = author
//     this.price = price
//     Book.totalBooks+=1
//   }

//   static comparePrice(bookA,bookB){
//     return bookA.price > bookB.price ? bookA.price : bookB.price
//   }
// }

// const bookA = new Book("IDK Title1","IDK Author1",5000)
// const bookB = new Book("IDK Title2","IDK Author 2",2)



// const ans = Book.comparePrice(bookA,bookB)
// console.log(ans);

// console.log(Book.totalBooks);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// classlist add delete toogle conatins replace 
// addeventlistenar stop propgation preventDefault

///Closure and Lexical Scoping

// function Parent(){
//   let name = "JS"
//   return function(){
//     console.log(name);
//   }
// }

// let ans = Parent()
// ans()

// console.log(this);

// let obj = {
//   name:"JS",
//   greet:function(){
//     setTimeout(function(){
//       console.log(this.name);
//     },1000)
//   }
// }


// obj.greet()


// let lang = {
//   name :"JS",
//   greet:function(){
//     console.log(this.name);
//   }
// }



// let abb = lang.greet
// function message(city,car){
//   console.log(`Hello this is ${this.name} and City ${city} Car ${car}`);
// }

// let user = {
//   name:"Anurag",
// }

// const map = new Map()
// map.set('name','JS')
// map.set('lang','Javscript')

// console.log(map.get('name'));
// console.log(map.has('name'));
// console.log(map.delete('lang'));
// console.log(map);


// const date = new Date()
// console.log(date.getDate());
// console.log(date.toLocaleDateString());
// console.log(date.setDate());

// const users = [
//   { name: "Anurag", score: 80 },
//   { name: "Rahul", score: 45 },
//   { name: "Priya", score: 92 }
// ];

// function evaluate(passingMarks, bonus) {
//   return {
//     name: this.name,
//     finalScore: this.score + bonus,
//     status: this.score + bonus >= passingMarks ? "Pass" : "Fail"
//   };
// }

// let arr = []
// users.forEach((user)=>{
//   arr.push(evaluate.apply(user,[60,10]))
// })
// console.log(arr);

// const items = [
//   { id: 101, name: "Laptop", price: 60000 },
//   { id: 102, name: "Mouse", price: 1500 },
//   { id: 101, name: "Laptop", price: 60000 },
//   { id: 103, name: "Keyboard", price: 3000 },
//   { id: 102, name: "Mouse", price: 1500 }
// ];


// let map = new Map()
// items.forEach((product)=>{
//     const {id,name,price} = product  
//   if (map.has(id)) {
//     let item = map.get(id)
//     item['quantity']+=1
//     map.set(id,item)     
//   }else{
//     let quantity = 1
//     map.set(product.id,{name,price,quantity})
//   }
// })

// console.log(map);

//////////////////////////////////////////////////CallBack Function//////////////////////////////////////////

// function sum(a,b){
//   return a+b
// }

// function sub(a,b){
//   return a-b
// }

// function res(a,b,cb){
//   return cb(a,b)
// }

// const ans = res(45,56,sum)
// console.log(ans);


/////////////////////////////////////////////////////Promise//////////////////////////////////////////

// console.log("Hello1");

// setTimeout(()=>{
//   console.log("Hell3");
// },1000)

// console.log("Hello2");

// const fs = require('fs')

// console.log("Hello1");

// function CallBack(err,data){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(data);
    
//   }
// }

// fs.readFile('a.txt','utf-8',CallBack)
// console.log("Hello2");

// const fs = require('fs')

// function ReadFilePromisified(file){
//   const p = new Promise(function(resolve,reject){
//     fs.readFile(file,'utf-8',(err,data)=>{
//       if (err) {
//         reject("Give me the file")
//       }else{
//         resolve(data)
//       }
//     })
//   })
//   return p
// }

// function done(data){
//   console.log(data);
// }

// function notdone(err){
//   console.log(err);
// }

// function work(){
//   console.log("Execution Completed");
// }

// ReadFilePromisified('a.txt').then(done).catch(notdone).finally(work)

// function timeout1(){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve("Function 1 Completed")
//     },2000)
//   })
// }

// function timeout2(){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve("Function 2 Completed")
//     },5000)
//   })
// }

// function timeout3(){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve("Function 3 Completed")
//     },6000)
//   })
// }

// Promise.all([timeout1(),timeout2(),timeout3()]).then(function(data){
//   console.log(data);
//   console.log("All Task Completed");
// })


function setTimeoutPromise(time){
  
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve()
    },time*1000)
  })

}

// Callback Hell

// setTimeoutPromise(1).then(()=>{
//   console.log("IDK1");
//   setTimeoutPromise(3).then(()=>{
//     console.log("IDK2");
//     setTimeoutPromise(5).then(()=>{
//       console.log("IDK3");                             
//     })
//   })
// })

// Callback Hell 

// setTimeoutPromise(1).then(()=>{
//   console.log("IDK1");
//   return setTimeoutPromise(3)
// }).then(()=>{
//   console.log("IDK2");
//   return setTimeoutPromise(5)
// }).then(()=>{
//   console.log("IDK3");
// })

// async function main() {
//   await setTimeoutPromise(1)
//   console.log("IDK1");
//   await setTimeoutPromise(3)
//   console.log("IDK2");
//   await setTimeoutPromise(5)
//   console.log("IDK3");
// }

// main()

// 1=> "IDK1"
// 3=> "IDK2"
// 5=> "IDK3"

// console.log("A");

// setTimeout(()=>{
//   console.log("B");
// },1000)

// Promise.resolve().then(()=>{
//   console.log("C");
// }).then(()=>{
//   console.log("D");
// })

// console.log("E");

////////////////////////////////////////////////////////////////////DOM///////////////////////////////////////////////////////////////////////
