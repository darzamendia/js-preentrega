function menu() {
    let text = `Seleccione una opción`;
    menuList.forEach((item) => {
        text += `\n${item.title}`;
    });
    return userInput(text, menuList);
}

function userInput(menuText, list) {
    let userInput;
    found = false;
    while (!found) {
        userInput = parseInt(prompt(`${menuText}`));
        valInput(userInput, list);
    }
    return userInput;
}

function valInput(ingreso, list) {
    console.log(ingreso);
    for (const option of list) {
        found = checkProcess(ingreso, option);
        if (found) {
            break;
        }
    }
}

function checkProcess(userInput, option) {
    for (const prop in option) {
        if (option[prop] == userInput) {
            return true;
        }
    }
}

function execute(option) {
    switch (option) {
        case 1:
            addItem();
            break;
        case 2:
            showList();
            break;
        case 3:
            buy();
            break;
    }
}

function addItem() {
    let newSelected = selectItem();
    let cantidad = parseInt(prompt(`Cantidad de unidades:`));
    cartList.push(
        new newCartList(newSelected.id, newSelected.name, newSelected.price, cantidad, newSelected.price * cantidad)
    );
    alert(`Se agregó el item al carrito`);
}

function selectItem() {
    text = `Seleccione el switch:`;
    itemList.forEach((item) => {
        text += `\n${item.id} - ${item.name}: $${item.price}`;
    });
    let idSelected = userInput(text, itemList);
    return itemList.find((object) => object.id === idSelected);
}

function userInputOp1(text) {
    let userInput;
    found = false;
    while (!found) {
        userInput = parseInt(prompt(`${text}`));
        valInput(userInput, itemList);
    }
    return userInput;
}

function inputId() {
    ingreso = parseInt(prompt(`Ingrese el ID del producto:`));
    while (isNaN(ingreso)) {
        ingreso = parseInt(prompt("El dato ingresado es incorrecto. Ingrese el ID del producto:"));
    }
    return ingreso;
}

function inputName() {
    ingreso = prompt(`Ingrese el nombre del producto`);
    return ingreso;
}

function inputPrice() {
    ingreso = parseFloat(prompt(`Ingrese el ID del producto:`));
    while (isNaN(ingreso)) {
        ingreso = parseFloat(prompt("El dato ingresado es incorrecto. Ingrese el ID del producto:"));
    }
    return ingreso;
}

function showList() {
    if (cartList.length > 0) {
        let totalCart = 0;
        let currentList = `Items del carrito:`;
        cartList.forEach(function callback(value, index) {
            value.totalItem();
            currentList += `\n${index + 1} - ${value.name} x ${value.quantity} unidades: $${value.totalPrice}`;
            totalCart += value.totalPrice;
        });
        currentList += `\n\nImporte total: $${totalCart}`;
        prompt(currentList);
    } else {
        alert(emptyCart);
    }
}

function buy() {
    if (cartList.length > 0) {
        let cuotas = selectCuotas();
        let total = getTotalCart();
        informImports(cuotas, total);
        cartList = [];
        reExecute();
    } else {
        alert(emptyCart);
    }
}

function selectCuotas() {
    let cuotaListItems = `Ingrese las cuotas`;
    cuotas.forEach((cuotaItem) => {
        cuotaListItems += `\n${cuotaItem.id} - Cuotas (Interes: ${cuotaItem.percent}%)`;
    });
    let idSelected = userInput(cuotaListItems, cuotas);
    return cuotas.find((object) => object.id === idSelected);
}

function getTotalCart() {
    let totalCart = 0;
    cartList.forEach((cartItem) => {
        cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
        totalCart += cartItem.totalPrice;
    });
    return decimalsTwo(parseFloat(totalCart));
}

function informImports(cuotas, total) {
    let localTotal = parseFloat(total);
    let cuotaPercentImport = decimalsTwo(parseFloat(localTotal * cuotas.percent) / 100);
    cuotaPercentImport = parseFloat(cuotaPercentImport);
    let finalImport = cuotaPercentImport + localTotal;
    let cuotaImport = finalImport / cuotas.id;
    localTotal = decimalsTwo(localTotal);
    cuotaPercentImport = decimalsTwo(cuotaPercentImport);
    finalImport = decimalsTwo(finalImport);
    cuotaImport = decimalsTwo(cuotaImport);

    alert(
        `Precio total del listado: $${localTotal}\n- Importe del interes por cuotas seleccionadas: $${cuotaPercentImport}\n- El importe final a pagar es de $${finalImport}\n- El pago se realizará en ${cuotas.id} cuotas de $${cuotaImport}\n- El porcentaje del interes es de ${cuotas.percent}%`
    );
}

function decimalsTwo(input) {
    return input.toFixed(2);
}

function reExecute() {
    let response;
    while (!yesNo.includes(response)) {
        response = prompt(`Desea volver a ejecutar un nuevo proceso? [S/N]`);
        response = response.toUpperCase();
    }
    if (response == "N") {
        optionSelected = 0;
    }
}
