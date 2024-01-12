//INTERFACE IN TYPESCRIPT

import { networkInterfaces } from "os";



interface Animal {
    name: string,
    runingspeed: number
}
interface Bird {
    name: string,
    flyingSpeed: number
}
interface Creature extends Animal, Bird { }

const tiger: Animal = {
    name: "Tiger",
    runingspeed: 100
}
const coackroach: Creature = {
    name: "Coackroach",
    runingspeed: 40,
    flyingSpeed: 80
}

///INTERFACE IN CLASS

interface Players {
    name: string;
    age: number;
    team: string;
    bowler(isBowler: boolean): boolean
}

class Player implements Players {

    constructor(public name: string, public age: number, public team: string) {

    }

    bowler(isBowler: boolean) {
        return isBowler = true
    }
}

//TYPEALIASES IN TYPESCRIPT

type Book = string

let myBook: Book = "Math"


//TYPEGUARD IN TS

// 'IN' GUARD
type Programmer1 = {
    name: string,
    age: number,
    language: string
}
type Programmer2 = {
    name: string,
    age: number,
    design: string
}
type Senior = Programmer1 | Programmer2;

function creature(creative: Senior) {
    console.log(creative.name);

    if ("design" in creative) {
        console.log(creative.design);

    } else {
        console.log(creative.language);
    }
}

// 'INSTANCE OF' GUARD

class Apple {
    IstTasty() {
        return true
    }
};

class Banana {
    IsJuicy() {
        return true
    }
}

type Fruit = Apple | Banana

function BuyFriut(fruit: Fruit) {
    let price: number = 0;

    if (fruit instanceof Apple) {
        fruit.IstTasty() ? price = 100 : price;
    }
    return price;
}

const apple = new Apple();
let applePrice: number = BuyFriut(apple)
console.log(applePrice);

// 'IS' Guard
