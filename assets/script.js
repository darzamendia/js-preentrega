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

while (reEjecutar == "S") {
    ingresoDatos();
    if (cantidadCuotas != 0) {
        calcularImportes();
        mostrarResultado();
    } else {
        alert(`Proceso cancelado`);
    }
    reEjecutar = consultarReejecucion();
    console.log(reEjecutar);
}
