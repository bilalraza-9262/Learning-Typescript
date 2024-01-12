//DECORETORS

//decorator with class
function Log(name1: string) { // decorator factory
    return function (constructor: Function) { // decorator
        console.log(`${name1} is logging`);
    }
}

@Log("bilal")
class Dec {
    constructor() {

    }
}


//2nd example
function decoFac(test: string, id: string) {
    return function (constructor: any) {
        console.log("hey");
        const p = new constructor()
        console.log(p);

        let elem = document.createElement("div");

        elem.setAttribute('id', id);
        elem.innerText = test + p.name;

        document.body.appendChild(elem);
        elem.style.color = 'red';
    }
}

@decoFac("I am ", "first")
class myClass {
    name: string = "Bilal"
    constructor() {

    }
}