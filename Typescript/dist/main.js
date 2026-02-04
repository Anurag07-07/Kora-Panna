"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable Decleration
let name = "Anurag";
console.log(name);
//Datatype
// number string boolean any 
let a = 7;
console.log(a);
let name1 = "Anurag";
console.log(name1);
let data = true;
console.log(data);
let value = true;
console.log(value);
//Functions
const sum = (a, b) => {
    return a + b;
};
const ans = sum(45, 56);
console.log(ans);
//Union Type
let song = 29;
//Regex Type 
let reg = /\d/;
console.log(typeof reg);
///////////////////////////////////Arrays and Tuples///////////////////////////////////////
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", 5150];
let mixedData = ["one", true, 1984];
let aj = {
    name: "Anurag",
    active: true,
    albums: ["Someone", 4546]
};
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up);
//# sourceMappingURL=main.js.map