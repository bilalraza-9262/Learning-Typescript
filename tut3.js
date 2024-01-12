"use strict";
let person = {
    name: "bilal",
    age: 17,
    skills: ["matric", "web developer"]
};
console.log(person.skills[0]);
//let ali: bilal[] = [name:"musa"; age: 17; skills: ["matric", "web developer"] ]
// name: "huzair",
// age: 17,
// skills: ["designer"]
//console.log(ali);
// ali.push({name: "bilal",
//     age: 17,
//     skills: ["matric", "web developer"]})
let num = (x) => x * x;
console.log(num(7));
// CALLBACK FUNCTION;
// type Num3 = string
// let add = function (num1: number, num2: number, num3: Num3) {
//     if (num3 === "bilal") {
//         return num1 + num2
//     } else if (num3 === "rafay") {
//         return num1 - num2
//     }
// }
// let result=add(3,2,"bilal");
// console.log(result);
// // TUPLES:
// let information:[number,string,number]=[1,"Bilal",17];
// console.log(information);
// let people:[number,string][];
// people=[[1,"bilal"],[2,"Huzair"],[3,"Mustafa"]];
// console.log(people[0],[1]);
// CLASS:
class persons {
    constructor(name, hobbies) {
        this.hobbies = hobbies;
        this.skill = [];
    }
    ;
    //method
    addskills(skill) {
        this.skill.push(skill);
        //this.skill=["programmer"] //throw error
    }
    ;
}
;
let student = new persons("bilal", "web developer");
//student.hobbies = "desighning" //show error
student.addskills("developer");
console.log(student);
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
for (var i = 0; i <= 4; i++) {
    console.log(i);
    if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        break;
    }
    ;
}
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string, callback:(text:string)=>void)
// {
//     callback(initialText);
// }
// callingFunction("myText", myCallBack);
