"use strict";
//TYPE CASTING
// <>
let name1 = "bilal";
console.log(name1);
const arr = [12];
// 'as' method 
let name2 = "fawad"; //string
const num2 = 123; //number
//example of type casting
let promise = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am resolve");
        }, 1000);
        // reject(new Error("i am reject"));
    });
};
promise()
    .then((data) => {
    console.log(data.split(" "));
})
    .catch((value) => {
    console.log(value);
});
//GENERICS
function myObj(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const merging = myObj({ name: "mustafa", hobbies: ["cricket", "football"] }, /* "bila" */ { prfession: "developer" });
console.log(merging.hobbies);
