function ingresoDatos() {
    importe = ingresoImporte();
    cantidadCuotas = ingresoCuotas();
}

function consultarReejecucion() {
    let respuesta = prompt("Desea volver a ejecutar un nuevo proceso? [S/N]");
    return respuesta.toUpperCase();
}

function ingresoImporte() {
    let userInput;
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
        prompt(`Ingrese una opcion de pago: 
- [1] - Un pago 
- [3] - 3 cuotas (Interes ${interesTresCuotas}%)
- [6] - 6 cuotas (Interes ${interesSeisCuotas}%)
- [10] - 10 cuotas (Interes ${interesDiezCuotas}%)
- [12] - 12 cuotas (Interes ${interesDoceCuotas}%)
- [0] - Cancelar proceso`)
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
        prompt(`El dato ingresado es erroneo!
Ingrese una opcion de pago:
- [1] - Un pago 
- [3] - 3 cuotas (Interes ${interesTresCuotas}%)
- [6] - 6 cuotas (Interes ${interesSeisCuotas}%)
- [10] - 10 cuotas (Interes ${interesDiezCuotas}%)
- [12] - 12 cuotas (Interes ${interesDoceCuotas}%)
- [0] - Cancelar proceso`)
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
}

function mostrarResultado() {
    alert(`Precio unitario ingresado: $${importe.toFixed(2)}
- El importe final a pagar es de $${importeTotal.toFixed(2)}.
- El pago se realizará en ${cantidadCuotas} cuotas de $${importeCuota.toFixed(2)}.
- El interes es de $${importeInteres.toFixed(2)} `);
}
