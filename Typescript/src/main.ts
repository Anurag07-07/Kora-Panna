type role = "admin" | "user" | "guest"
interface User{
  id:number
  name:string
  email?:string
  role:role
  isActive:boolean
}


function createUser(user:User):string{
  if (typeof user.email==='undefined') {
       return `Email missing`
  }
  return `User Created`
}

let user:User = {
  id:45,
  name:"Anurag",
  email:"onoaj@gmail.com",
  role:"admin",
  isActive:true
}

const ans = createUser(user)
console.log(ans);


function getUserRoleMessage<T extends role>(role:T):string{
  if (role==='admin') {
    return `Full Access`
  }else if (role==='user') {
    return `Limited Access`
  }
  return `Read Only`
}

const ans1 = getUserRoleMessage(user.role)
console.log(ans1);


//Assignment 2
function swapValues<T,U>(a:T,b:U):[U,T]{
  return [b,a]
}

console.log(swapValues("Hello",50));


//Assignment 3

const getFirstElement = <T>(arg:T[]):T=>{
  return arg[0]!
}

class Employee{
  constructor(public user:string, private salary:bigint, protected department:string){
    this.user = user
    this.salary = salary
    this.department = department
  }

  get getSalary(){
    return `The Salary ${this.salary}`
  }

  get getDepartment(){
    return `The Department ${this.department}`
  }
}

class Manager extends Employee{
  constructor(user:string,salary:bigint,department:string, public teamSize:number){
    super(user,salary,department)
    this.teamSize = teamSize
  }

  get getManager(){
    return `Manager Details ${this.user} ${this.getSalary}`
  }
}

const user3 = new Manager("Anurag",4565654565465n,"Software",45)
console.log(user3.getManager);



//Functional Component 
//Reconcilation and Virtual Dom
//Map conditional Rendering events