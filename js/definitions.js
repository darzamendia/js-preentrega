const logos = [];
const itemList = [];
let cartList = [];
const menuList = [];
const cuotas = [];
const yesNo = ["S", "N"];

let emptyCart = `El carrito está vacío`;
let found = false;
let optionSelected;

class MenuOption {
    constructor(id, title) {
        this.id = parseInt(id);
        this.title = `${this.id} - ` + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    }
}

class NewItemList {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
    }
}

class NewCartList {
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

class NewCuota {
    constructor(id, percent) {
        this.id = parseInt(id);
        this.percent = parseFloat(percent);
    }
}

class NewLogo {
    constructor(id, name, url) {
        this.id = parseInt(id);
        this.name = name;
        this.url = url;
    }
}

inputName = document.getElementById("inputName");
inputName = document.getElementById("inputName");
inputName = document.getElementById("inputName");

function addSwitch(newKbSwitch) {
    const kbSwitch = new KbSwitch(inputName.value, inputType.value, inputForce.value);
    if (inputDetail != "") {
        kbSwitch.detail = inputDetail;
    } else {
        kbSwitch.detail = "sin reseña";
    }
}

menuList.push(new MenuOption(1, "Agregar item"));
menuList.push(new MenuOption(2, "visualizar carrito"));
menuList.push(new MenuOption(3, "Realizar compra"));
menuList.push(new MenuOption(0, "salir"));

itemList.push(new NewItemList(1, "SP Meteor Whiites", 2588.89));
itemList.push(new NewItemList(2, "Gateron Oil King", 3344.44));
itemList.push(new NewItemList(3, "JWK T1", 1640.74));
itemList.push(new NewItemList(4, "Gateron CJ", 1829.93));
itemList.push(new NewItemList(5, "Akko CS Lavender Purple", 1392.59));

cuotas.push(new NewCuota(1, 0));
cuotas.push(new NewCuota(3, 10.1));
cuotas.push(new NewCuota(6, 20.78));
cuotas.push(new NewCuota(10, 26.69));
cuotas.push(new NewCuota(12, 45.06));

logos.push(new NewLogo(1, "Base", "./img/kblogo.svg"));
logos.push(new NewLogo(2, "Creamy-blot", "./img/kblogo-creamy-blot.svg"));
