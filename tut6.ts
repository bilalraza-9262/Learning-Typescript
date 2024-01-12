//TYPE CASTING

// <>
let name1 = <string>"bilal";
console.log(name1);

const arr: Array<number> = [12];

// 'as' method 
let name2 = "fawad" as string;//string
const num2 = 123 as number;//number

//example of type casting
let promise = function () {

    return new Promise<string>((resolve, reject) => {

        setTimeout(() => {
            resolve("i am resolve")
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

    })


//GENERICS

function myObj<T extends object, U extends object>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 }
}

const merging = myObj({ name: "mustafa", hobbies: ["cricket", "football"] }, /* "bila" */ { prfession: "developer" })
console.log(merging.hobbies);
