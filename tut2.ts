//ARRAY
//ARRAY IS METHOD

//OBJECT

//TYPE IN 

// type Person = {

//     name: string,
//     age: number,
//     man: boolean,
//     func:Function


// }

// let human: Person = {

//     name: "bilal",
//     age: 18,
//     man: true,
//     func: function (one:string, two:string) {
//         console.log(` iam a ${one} and ${two} ` );

//     }

// }
// human.func("programmer", " designer")
// //console.log(human);

// const person:Person[]=[];
// person.push({
//     name: "Huzair",
//     age: 17,
//     man: true,
//     func:function (who:string) {
//         console.log(` iam a ${who}`);

//     }

// })
// person[0].func("hafiz")
// console.log(person);


// let f1=function (num1:number, num2:number, num3:(num:number)=> number) {
//     return num1+num2;
// }
// console.log(f1(3,4,));

// const f2=function (val1:number, val2:number, val3:(val:number)=>number) {
//     return val1-val2
// }

// if (f1==f2) {
//     console.log("true");

// }else{
//     console.log("false");

// }

type Friend = { fruit: string; name: string }

let fruit1: string[] = ["apple", "orange", "banana"];
let names: string[] = ["bilal", "huzair", "fawad"];
let friends: Friend[] = [];

for (let i = 0; i < fruit1.length; i++) {
    console.log("done");

    for (let j = 0; j < names.length; j++) {
        friends.push({ fruit: fruit1[i], name: names[j] });
    }
}

console.log(friends);







