console.dir(document);
console.dir(document.head);

let div = document.getElementById("table");
let parrafo = document.getElementById("parrafo");

console.log(div.innerHTML);
console.log(parrafo.innerHTML);

let kbSwitches = document.getElementsByClassName("switches");
console.log(kbSwitches[0].innerHTML);
console.log(kbSwitches[1].innerHTML);
console.log(kbSwitches[2].innerHTML);
console.log(kbSwitches[3].innerHTML);

for (i = 0; i < kbSwitches.length; i++) {
    console.log(kbSwitches[i].innerHTML);
}

let test = document.getElementsByTagName("p");
console.log(test);

for (const kbSwitch of kbSwitches) {
    console.log(kbSwitch.innerHTML);
}

let title = document.getElementById("mainTitle");

title.innerText = "Cambio de texto";

// itemList.forEach((item) => {
//     text += `\n${item.id} - ${item.name}: $${item.price}`;
// });

let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = "<p><h1>Nuevo contenido para contenedor</h1></p>";

let div2 = document.createElement("div");

div2.innerHTML = "<h1>Nodo hijo</h1>";

contenedor.append(div2);

let contenedor2 = document.getElementById("contenedor2");

contenedor2.remove();

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

firstName.value = "Testing Name";
lastName.value = "Testing Last";

console.log(firstName.value);
console.log(lastName.value);

let switchList = document.getElementById("switchList");
const arraySwitches = ["Switch01", "Switch02", "Switch03", "Switch04"];
for (const kbSwitch of arraySwitches) {
    let li = document.createElement("li");
    li.innerHTML = kbSwitch;
    switchList.appendChild(li);
}

// let switchListDos = document.getElementyById("switchListDos");
// let switchListDos = document.createElement("div");

// itemList.forEach((listLine) => {
//     console.log(listLine);
//     switchListDos.innerHTML = `<h3>ID: ${listLine.id}</h3>`;
//     document.body.appendChild(switchListDos);
// });
// document.body.appendChild(switchListDos);

for (const listLine of itemList) {
    let switchListDos = document.createElement("div");
    switchListDos.innerHTML = `<h3><p>ID: ${listLine.id}</p></h3>`;
    document.body.appendChild(switchListDos);
}

let cont = document.querySelector("#contenedor3 p");
console.log(cont.innerHTML);
// let contenedorJS = document.querySelector;

const btnSearch = document.getElementById("btnSearch");
const btnTienda = document.getElementById("btnTienda");

function tienda() {
    alert("Tienda");
}

function search() {
    alert("Búsqueda");
}

btnSearch.addEventListener("click", search);
btnTienda.addEventListener("click", tienda);

// for (const radio of radios) {
//     radio.addEventListener("click", () => {
//         console.log(`Radio seleccionado: ${radio.value}`);
//     });
// }

let radios = document.querySelectorAll('input[type="radio"]');
console.log(radios);

let radioColor = document.getElementsByClassName("radioColor");
console.log(radioColor);

let mainLogo = document.getElementById("mainLogo");
let navLogo = document.getElementById("navLogo");

for (const radioTest of radioColor) {
    radioTest.addEventListener("click", () => {
        let logoName = radioTest.value;
        let logoSel = logos.find((logo) => logo.name == logoName);
        changeLogoColor(mainLogo, logoSel.url);
        changeLogoColor(navLogo, logoSel.url);
    });
}

// radios.forEach((item) => {
//     //     item.addEventListener("click", () => {
//     //         let logoName = item.value;
//     //         let logoSel = logos.find((logo) => logo.name == logoName);
//     //         changeLogoColor(mainLogo, logoSel.url);
//     //         changeLogoColor(navLogo, logoSel.url);
//     //     });
//     console.log(item);
// });

let password = document.getElementById("inputPassword");

password.onchange = () => {
    console.log(password.value);
};

// password.addEventListener("keypress", (evento) => {
//     console.log(evento.code);
// });

password.onkeyup = (evento) => {
    // console.log(evento);
    const key2 = evento.key;
    const isLowerCaseLetter = /[a-z]/.test(key2);
    const isUpperCaseLetter = /[A-Z]/.test(key2);
    const isNumber = /[0-9]/.test(key2);

    console.log();
    // if (isLowerCaseLetter && !isUpperCaseLetter ) {

    // };
    console.log(isLowerCaseLetter);
    console.log(isUpperCaseLetter);
    console.log(isNumber);

    // let key = evento.key;
    // if (key >= "a" && key <= "z") {
    //     console.log(`Minúscula: ${key}`);
    // } else if (key >= "A" && key <= "Z") {
    //     console.log(`Mayúscula: ${key}`);
    // }
    // console.log(evento);
    // console.log(`Tecla presionada ${password.value}`);
};

// //Informacion del evento
// password.addEventListener("keypress", (evento) => {
//     let codCaracter = evento.charCode;
//     if (codCaracter != 0) {
//         //chequeo si el caracter no es nulo
//         if (codCaracter < 97 || codCaracter > 122) {
//             // verificar si el codigo ascci no corresponde a una minuscula
//             evento.preventDefault();
//             alert("Solo podes ingresar una minuscula");
//         }
//     }
// });
