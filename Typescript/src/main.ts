// Variable Decleration
let name:string = "Anurag"
console.log(name);

//Datatype
// number string boolean any 
let a:number = 7
console.log(a);

let name1:string = "Anurag"
console.log(name1);

let data:boolean = true
console.log(data);

let value:any = true
console.log(value);

//Functions

const sum = (a:number,b:number):number=>{
  return a+b
}

const ans = sum(45,56)
console.log(ans);

//Union Type
let song:number | string = 29

//Regex Type 
let reg:RegExp = /\d/
console.log(typeof reg);


///////////////////////////////////Arrays and Tuples///////////////////////////////////////

let stringArr = ["one","two","three"]
let guitars = ["Strat",5150]
let mixedData  = ["one",true,1984]

// stringArr[0] = "John"
// guitars = stringArr //Possible
// stringArr = guitars Not possible
// guitars.push("a")
// guitars.unshift(45)
// mixedData = guitars

//Create and Empty Array
// let user:string[] = ["Anurag","Chitranshi","Manoj","Osheen"]
// console.log(user);

// let data1:[string,number,boolean] =  ["Javascript",1980,true]
// let data2:(string | number | boolean)[] =  ["Javascript",1980,true]
// data2 = data1
// data1 = data2

//How To Create Object
// let obj:object
// obj = []
// obj = {}
// const obj = {
//   name:"typescript",
//   prop2:true
// }

// obj.name = 45  //Not Possible 


// let obj = {
//   name:"Anurag",
//   age:()=>{
//     console.log("Hello");
//   }
// }


// type interface

// interface User{
//   name:string,
//   email?:string,
//   albums:(string |number)[]
//   active:boolean
// }

// type User = {
//   name:string,
//   email?:string,
//   albums:(string |number)[]
//   active:boolean
// }

// let aj:User = {
//   name:"Anurag",
//   active:true,
//   albums:["Someone",4546]
// }

// enum Direction{
//   up,down,left,right
// }
// console.log(Direction.up);

//Type Alises 
type UniqueArray =  string| number | boolean

let arr:UniqueArray[] = new Array()

let name2:"Anurag" | "Manoj" | "Chitranshi" | "Osheen"
// name2 = "Someone" Not Defined
// name2 = 'Chitranshi' //Defined


//Functions

// type mathFunction = (a:number,b:number)=>number

// const diff:mathFunction =  (a,b)=>{
//   return a-b
// }

//Optinal Parameters

// const ans2 = (a:number,b:number,c?:number):number=>{
//   if (typeof c==='undefined') {
//     return a+b
//   }
//   return a+b+c
// }
// //Default Value
// const ans3 = (a:number,b:number,c:number=3):number=>{
//   if (typeof c==='undefined') {
//     return a+b
//   }
//   return a+b+c
// }

//Rest Parameters

// const sum2 = (a:number,b:number,...c:number[]):number=>{
//   return c.reduce((prev:number,curr:number)=>prev+curr,0)
// }

//Error and Infinte Loop has Never Return Type

// const Er = ()=> {
//   throw new Error()
// }
// Er()

// const infinte = ()=>{
//   while (true) {
    
//   }
// }