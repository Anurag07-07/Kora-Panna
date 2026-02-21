// function setTimeoutSync(callback,time){
//   let startTime = Date.now()
//   while (Date.now()-startTime<=time) {
//     if (currentTime-startTime>=time) {
//       callback()
//       return
//     }
//   }
// }

// function greet(){
//   console.log(`Hello Its Sync Timeout`);
// }

// setTimeoutSync(greet,5000)


// console.log("Hello");


// function Greet(){
//   console.log(this.name,this.age,this.gender);
// }


// let user = {
//   name:"Anurag",
//   age:"22",
//   gender:"Male"
// }


// Greet.call(user)


function Maths(){

}

Maths.prototype.sum = function(...value){
  return value.reduce((sum,value)=>sum+value,0)
}

const add = new Maths()
const ans = add.sum(1,2,1,3,5,4)
console.log(ans);
