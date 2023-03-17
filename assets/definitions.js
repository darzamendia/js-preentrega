let importe = 0;
let importeInteres = 0;
let importeCuota = 0;
let importeTotal = 0;
let cantidadCuotas = 0;
let reEjecutar = "S";

const interesTresCuotas = 10.1;
const interesSeisCuotas = 20.78;
const interesDiezCuotas = 26.69;
const interesDoceCuotas = 45.06;

const item01 = { id: 1, name: "Mogul 01", price: 100 };
const item02 = { id: 2, name: "Mogul 02", price: 200 };
const item03 = { id: 3, name: "Mogul 03", price: 300 };
const item04 = { id: 4, name: "Mogul 04", price: 400 };
const item05 = { id: 5, name: "Mogul 05", price: 500 };

const items = [item01, item02, item03, item04, item05];
const listaCarrito = [];

class menuOptions {
    constructor(id, desc) {
        this.id = id;
        this.desc = desc;
    }
}

class listItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
    }
}

class cartList {
    constructor(id, name, unit_price, quantity, total_price) {
        this.id = id;
        this.name = name;
        this.unit_price = parseFloat(unit_price);
        this.quantity = parseInt(quantity);
        this.total_price = parseFloat(total_price);
    }
    totalCartItem(){
        this.total_price = this.unit_price * this.quantity;
    }
}