function ingresoDatos() {
    importe = ingresoImporte();
    cantidadCuotas = ingresoCuotas();
}

function consultarReejecucion() {
    let respuesta = prompt("Desea volver a ejecutar un nuevo proceso? [S/N]");
    return respuesta.toUpperCase();
}

function ingresoImporte() {
    ingreso = parseFloat(prompt(`Ingrese el importe del producto:`));
    while (isNaN(ingreso)) {
        ingreso = parseFloat(
            prompt(
                "El dato ingresado es incorrecto. Ingrese el importe del producto."
            )
        );
    }
    return ingreso;
}

function ingresoCuotas() {
    let ingreso;
    ingreso = parseInt(
        prompt(
            `Ingrese una opcion de pago:\n- [1] - Un pago\n- [3] - 3 cuotas (Interes ${interesTresCuotas}%)/\n- [6] - 6 cuotas (Interes ${interesSeisCuotas}%)\n- [10] - 10 cuotas (Interes ${interesDiezCuotas}%)\n- [12] - 12 cuotas (Interes ${interesDoceCuotas}%)\n- [0] - Cancelar proceso`
        )
    );
    while (
        ingreso != 0 &&
        ingreso != 1 &&
        ingreso != 3 &&
        ingreso != 6 &&
        ingreso != 10 &&
        ingreso != 12
    ) {
        ingreso = parseInt(
            prompt(
                `El dato ingresado es erroneo!\nIngrese una opcion de pago:\n- [1] - Un pago \n- [3] - 3 cuotas (Interes ${interesTresCuotas}%)\n- [6] - 6 cuotas (Interes ${interesSeisCuotas}%)\n- [10] - 10 cuotas (Interes ${interesDiezCuotas}%)\n- [12] - 12 cuotas (Interes ${interesDoceCuotas}%)\n- [0] - Cancelar proceso`
            )
        );
    }
    return ingreso;
}

function calcularImportes() {
    let porcentaje = 0;
    switch (cantidadCuotas) {
        case 1:
            porcentaje = 0;
            break;
        case 3:
            porcentaje = interesTresCuotas;
            break;
        case 6:
            porcentaje = interesSeisCuotas;
            break;
        case 10:
            porcentaje = interesDiezCuotas;
            break;
        case 12:
            porcentaje = interesDoceCuotas;
            break;
    }
    importeInteres = parseFloat((importe * porcentaje) / 100);
    importeTotal = importe + importeInteres;
    importeCuota = importeTotal / cantidadCuotas;

    importe = decimalsTwo(importe);
    importeTotal = decimalsTwo(importeTotal);
    importeCuota = decimalsTwo(importeCuota);
    importeInteres = decimalsTwo(importeInteres);
}

function decimalsTwo(input) {
    return input.toFixed(2);
}

function mostrarResultado() {
    alert(
        `Precio unitario ingresado: $${importe}\n- El importe final a pagar es de $${importeTotal}.\n- El pago se realizará en ${cantidadCuotas} cuotas de $${importeCuota}.\n- El interes es de $${importeInteres} `
    );
}

////////////////////////////////////////////////////////////////////////

function showList(list) {
    if (list.length > 0) {
        for (const item of list) {
            console.log(item.name);
        }
    } else {
        console.log(`La lista no contiene elementos`);
    }
}
