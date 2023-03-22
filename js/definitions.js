// let importe = 0;
// let importeInteres = 0;
// let importeCuota = 0;
// let importeTotal = 0;
// let cantidadCuotas = 0;
// let reEjecutar = "S";

// const interesTresCuotas = 10.1;
// const interesSeisCuotas = 20.78;
// const interesDiezCuotas = 26.69;
// const interesDoceCuotas = 45.06;

////////////////////////////////////////////////////////////////////////

const itemList = [];
const cartList = [];
const menuList = [];
const cuotas = [];

emptyCart = `El carrito está vacío`;

class menuOption {
    constructor(id, title) {
        this.id = parseInt(id);
        this.title = `[${this.id}] -` + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
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
    }
}

class newCuota {
    constructor(cuota, interes) {
        this.cuota = parseInt(cuota);
        this.interes = parseFloat(interes);
    }
}

// Se crea una nueva clase
menuList.push(new menuOption(1, "Agregar item"));
menuList.push(new menuOption(2, "Descartar item"));
menuList.push(new menuOption(3, "visualizar carrito"));
menuList.push(new menuOption(4, "Realizar compra"));
menuList.push(new menuOption(0, "salir"));

itemList.push(new newItemList(1, "Switches SP Meteor Whiites", 2588.89));
itemList.push(new newItemList(2, "Switches Gateron Oil King", 3344.44));
itemList.push(new newItemList(3, "Switches JWK T1", 1640.74));
itemList.push(new newItemList(4, "Switches Gateron CJ", 1829.93));
itemList.push(new newItemList(5, "Stitches Akko CS Lavender Purple", 1392.59));

cuotas.push(new newCuota(1, 0));
cuotas.push(new newCuota(3, 10.1));
cuotas.push(new newCuota(6, 20.78));
cuotas.push(new newCuota(10, 26.69));
cuotas.push(new newCuota(12, 45.06));
