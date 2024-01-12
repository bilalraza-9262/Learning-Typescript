"use strict";
//GETTER & SETTER IN CLASS
class Product {
    constructor(_name, _id) {
        this._name = _name;
        this._id = _id;
    }
    get name() { return this._name; }
    ;
    set name(value) {
        if (!value) {
            throw new Error("inter correct alphabat");
        }
        else {
            this._name = value;
        }
    }
    ;
    get id() { return this._id; }
    ;
    set id(value) {
        if (typeof value !== "number") {
            throw new Error("please enter a number");
        }
        else {
            this._id = value;
        }
    }
    ;
}
const product = new Product("bilal", 1);
product.name = "bilal";
console.log(product.name);
console.log(product);
//INHERITENCE IN CLASS
class Shop {
    constructor(_name, _adress) {
        this._name = _name;
        this._adress = _adress;
    }
    //here get name
    get name() {
        return this._name;
    }
    // set name(v: string) {
    //     this._name = v;
    // }
    //here get address
    get address() {
        return this._adress;
    }
}
class ClothShop extends Shop {
    constructor(name, address, size, price) {
        super(name, address);
        this.size = size;
        this.price = price;
    }
}
;
const clothes = new ClothShop("Puma", "Landhi", "M", 2000);
console.log(clothes);
console.log(clothes.price);
//ABSTRACT METHOD IN CLASS
//main class
class School {
    constructor(name, id, price) {
        this._name = name;
        this.id = id;
        this.price = price;
    }
    ;
    get name() {
        return this._name.toUpperCase();
    }
    ;
}
;
//here extend class
class Student1 extends School {
    constructor(name, id, price, classes) {
        super(name, id, price);
        this.studentClass = classes;
    }
    ;
    getDiscountFees() {
        return `${this._name} discount fee is ${this.price * 0.9}`;
    }
    ;
}
;
const bilal = new Student1("bilal", 123, 2000, 11);
console.log(bilal);
const jami = new Student1("jami", 236, 3000, 12);
console.log(jami);
console.log(jami.getDiscountFees());
//STATIC METHOd IN CLASS
class Person {
    constructor(name) {
        this.name = Person.Capitalize(name);
    }
    static Capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substring(1, name.length);
    }
}
;
const bilal1 = new Person("fawad");
console.log(bilal1);
console.log(Person.Capitalize("man"));
