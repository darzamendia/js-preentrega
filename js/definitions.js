const itemList = [];
let cartList = [];
const menuList = [];
const cuotas = [];
const yesNo = ["S", "N"];

let emptyCart = `El carrito está vacío`;
let found = false;
let optionSelected;

class menuOption {
    constructor(id, title) {
        this.id = parseInt(id);
        this.title = `${this.id} - ` + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    }
}

class newItemList {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
    }
}

class newCartList {
    constructor(id, name, unitPrice, quantity, totalPrice) {
        this.id = id;
        this.name = name;
        this.unitPrice = parseFloat(unitPrice);
        this.quantity = parseInt(quantity);
        this.totalPrice = parseFloat(totalPrice);
    }
    totalItem() {
        this.totalPrice = this.unitPrice * this.quantity;
        console.log(this.totalPrice);
    }
}

class newCuota {
    constructor(id, percent) {
        this.id = parseInt(id);
        this.percent = parseFloat(percent);
    }
}

menuList.push(new menuOption(1, "Agregar item"));
menuList.push(new menuOption(2, "visualizar carrito"));
menuList.push(new menuOption(3, "Realizar compra"));
menuList.push(new menuOption(0, "salir"));

itemList.push(new newItemList(1, "SP Meteor Whiites", 2588.89));
itemList.push(new newItemList(2, "Gateron Oil King", 3344.44));
itemList.push(new newItemList(3, "JWK T1", 1640.74));
itemList.push(new newItemList(4, "Gateron CJ", 1829.93));
itemList.push(new newItemList(5, "Akko CS Lavender Purple", 1392.59));

cuotas.push(new newCuota(1, 0));
cuotas.push(new newCuota(3, 10.1));
cuotas.push(new newCuota(6, 20.78));
cuotas.push(new newCuota(10, 26.69));
cuotas.push(new newCuota(12, 45.06));
