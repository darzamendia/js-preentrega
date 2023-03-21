// function ingresoDatos() {
//     importe = ingresoImporte();
//     cantidadCuotas = ingresoCuotas();
// }

// function consultarReejecucion() {
//     let respuesta = prompt("Desea volver a ejecutar un nuevo proceso? [S/N]");
//     return respuesta.toUpperCase();
// }

// function ingresoImporte() {
//     ingreso = parseFloat(prompt(`Ingrese el importe del producto:`));
//     while (isNaN(ingreso)) {
//         ingreso = parseFloat(prompt("El dato ingresado es incorrecto. Ingrese el importe del producto."));
//     }
//     return ingreso;
// }

// function ingresoCuotas() {
//     let ingreso;
//     ingreso = parseInt(
//         prompt(
//             `Ingrese una opcion de pago:\n- [1] - Un pago\n- [3] - 3 cuotas (Interes ${interesTresCuotas}%)/\n- [6] - 6 cuotas (Interes ${interesSeisCuotas}%)\n- [10] - 10 cuotas (Interes ${interesDiezCuotas}%)\n- [12] - 12 cuotas (Interes ${interesDoceCuotas}%)\n- [0] - Cancelar proceso`
//         )
//     );
//     while (ingreso != 0 && ingreso != 1 && ingreso != 3 && ingreso != 6 && ingreso != 10 && ingreso != 12) {
//         ingreso = parseInt(
//             prompt(
//                 `El dato ingresado es erroneo!\nIngrese una opcion de pago:\n- [1] - Un pago \n- [3] - 3 cuotas (Interes ${interesTresCuotas}%)\n- [6] - 6 cuotas (Interes ${interesSeisCuotas}%)\n- [10] - 10 cuotas (Interes ${interesDiezCuotas}%)\n- [12] - 12 cuotas (Interes ${interesDoceCuotas}%)\n- [0] - Cancelar proceso`
//             )
//         );
//     }
//     return ingreso;
// }

// function calcularImportes() {
//     let porcentaje = 0;
//     switch (cantidadCuotas) {
//         case 1:
//             porcentaje = 0;
//             break;
//         case 3:
//             porcentaje = interesTresCuotas;
//             break;
//         case 6:
//             porcentaje = interesSeisCuotas;
//             break;
//         case 10:
//             porcentaje = interesDiezCuotas;
//             break;
//         case 12:
//             porcentaje = interesDoceCuotas;
//             break;
//     }
//     importeInteres = parseFloat((importe * porcentaje) / 100);
//     importeTotal = importe + importeInteres;
//     importeCuota = importeTotal / cantidadCuotas;

//     importe = decimalsTwo(importe);
//     importeTotal = decimalsTwo(importeTotal);
//     importeCuota = decimalsTwo(importeCuota);
//     importeInteres = decimalsTwo(importeInteres);
// }

// function decimalsTwo(input) {
//     return input.toFixed(2);
// }

// function mostrarResultado() {
//     alert(
//         `Precio unitario ingresado: $${importe}\n- El importe final a pagar es de $${importeTotal}.\n- El pago se realizará en ${cantidadCuotas} cuotas de $${importeCuota}.\n- El interes es de $${importeInteres} `
//     );
// }

////////////////////////////////////////////////////////////////////////

let found = false;

function menu() {
    let text = "Seleccione una opción";
    for (const option of menuList) {
        text = text + `\n${option.title}`;
    }
    return userInput(text);
}

function userInput(menuText) {
    let userInput;
    while (!found) {
        userInput = parseInt(prompt(`${menuText}`));
        valInput(userInput);
    }
    return userInput;
}

function valInput(ingreso) {
    for (const option of menuList) {
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
            console.log(option);
            addItem();
            break;
        case 2:
            console.log();
            break;
        case 3:
            showList(listaCarrito);
            break;
        case 1:
            console.log();
            break;
    }
}

function addItem() {
    let newId = inputId();
    let newName = inputName();
    let newPrice = inputPrice();
    const item01 = { id: newId, name: newName, price: newPrice };

    alert(`El item se ha agregado exitosamente`);
    
    // Purgar una vez finalizada las pruebas
    console.log(item01);
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

function showList(list) {
    if (list.length > 0) {
        for (const item of list) {
            console.log(item.name);
        }
    } else {
        console.log(`La lista no contiene elementos`);
    }
}
