"use strict";
//INTERFACE IN TYPESCRIPT
Object.defineProperty(exports, "__esModule", { value: true });
const tiger = {
    name: "Tiger",
    runingspeed: 100
};
const coackroach = {
    name: "Coackroach",
    runingspeed: 40,
    flyingSpeed: 80
};
class Player {
    constructor(name, age, team) {
        this.name = name;
        this.age = age;
        this.team = team;
    }
    bowler(isBowler) {
        return isBowler = true;
    }
}
let myBook = "Math";
function creature(creative) {
    console.log(creative.name);
    if ("design" in creative) {
        console.log(creative.design);
    }
    else {
        console.log(creative.language);
    }
}
// 'INSTANCE OF' GUARD
class Apple {
    IstTasty() {
        return true;
    }
}
;
class Banana {
    IsJuicy() {
        return true;
    }
}
function BuyFriut(fruit) {
    let price = 0;
    if (fruit instanceof Apple) {
        fruit.IstTasty() ? price = 100 : price;
    }
    return price;
}
const apple = new Apple();
let applePrice = BuyFriut(apple);
console.log(applePrice);
// 'IS' Guard
