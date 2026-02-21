"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    if (typeof user.email === 'undefined') {
        return `Email missing`;
    }
    return `User Created`;
}
let user = {
    id: 45,
    name: "Anurag",
    email: "onoaj@gmail.com",
    role: "admin",
    isActive: true
};
const ans = createUser(user);
console.log(ans);
function getUserRoleMessage(role) {
    if (role === 'admin') {
        return `Full Access`;
    }
    else if (role === 'user') {
        return `Limited Access`;
    }
    return `Read Only`;
}
const ans1 = getUserRoleMessage(user.role);
console.log(ans1);
//Assignment 2
function swapValues(a, b) {
    return [b, a];
}
console.log(swapValues("Hello", 50));
//Assignment 3
const getFirstElement = (arg) => {
    return arg[0];
};
class Employee {
    user;
    salary;
    department;
    constructor(user, salary, department) {
        this.user = user;
        this.salary = salary;
        this.department = department;
        this.user = user;
        this.salary = salary;
        this.department = department;
    }
    get getSalary() {
        return `The Salary ${this.salary}`;
    }
    get getDepartment() {
        return `The Department ${this.department}`;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(user, salary, department, teamSize) {
        super(user, salary, department);
        this.teamSize = teamSize;
        this.teamSize = teamSize;
    }
    get getManager() {
        return `Manager Details ${this.user} ${this.getSalary}`;
    }
}
const user3 = new Manager("Anurag", 4565654565465n, "Software", 45);
console.log(user3.getManager);
//# sourceMappingURL=main.js.map