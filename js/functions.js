// function menu() {
//     let text = `Seleccione una opción`;
//     menuList.forEach((item) => {
//         text += `\n${item.title}`;
//     });
//     return userInput(text, menuList);
// }

// function userInput(menuText, list) {
//     let userInput;
//     found = false;
//     while (!found) {
//         userInput = parseInt(prompt(`${menuText}`));
//         valInput(userInput, list);
//     }
//     return userInput;
// }

// function valInput(ingreso, list) {
//     for (const option of list) {
//         found = checkProcess(ingreso, option);
//         if (found) {
//             break;
//         }
//     }
// }

// function checkProcess(userInput, option) {
//     for (const prop in option) {
//         if (option[prop] == userInput) {
//             return true;
//         }
//     }
// }

// function execute(option) {
//     switch (option) {
//         case 1:
//             addItem();
//             break;
//         case 2:
//             showList();
//             break;
//         case 3:
//             buy();
//             break;
//     }
// }

// function addItem() {
//     let newSelected = selectItem();
//     let cantidad = parseInt(prompt(`Cantidad de unidades:`));
//     cartList.push(
//         new newCartList(newSelected.id, newSelected.name, newSelected.price, cantidad, newSelected.price * cantidad)
//     );
//     alert(`Se agregó el item al carrito`);
// }

// function selectItem() {
//     text = `Seleccione el switch:`;
//     itemList.forEach((item) => {
//         text += `\n${item.id} - ${item.name}: $${item.price}`;
//     });
//     let idSelected = userInput(text, itemList);
//     return itemList.find((object) => object.id === idSelected);
// }

// function userInputOp1(text) {
//     let userInput;
//     found = false;
//     while (!found) {
//         userInput = parseInt(prompt(`${text}`));
//         valInput(userInput, itemList);
//     }
//     return userInput;
// }

// function inputId() {
//     ingreso = parseInt(prompt(`Ingrese el ID del producto:`));
//     while (isNaN(ingreso)) {
//         ingreso = parseInt(prompt("El dato ingresado es incorrecto. Ingrese el ID del producto:"));
//     }
//     return ingreso;
// }

// function inputName() {
//     ingreso = prompt(`Ingrese el nombre del producto`);
//     return ingreso;
// }

// function inputPrice() {
//     ingreso = parseFloat(prompt(`Ingrese el ID del producto:`));
//     while (isNaN(ingreso)) {
//         ingreso = parseFloat(prompt("El dato ingresado es incorrecto. Ingrese el ID del producto:"));
//     }
//     return ingreso;
// }

// function showList() {
//     if (cartList.length > 0) {
//         let totalCart = 0;
//         let currentList = `Items del carrito:`;
//         cartList.forEach(function callback(value, index) {
//             value.totalItem();
//             currentList += `\n${index + 1} - ${value.name} x ${value.quantity} unidades: $${value.totalPrice}`;
//             totalCart += value.totalPrice;
//         });
//         currentList += `\n\nImporte total: $${totalCart}`;
//         prompt(currentList);
//     } else {
//         alert(emptyCart);
//     }
// }

// function buy() {
//     if (cartList.length > 0) {
//         let cuotas = selectCuotas();
//         let total = getTotalCart();
//         informImports(cuotas, total);
//         cartList = [];
//         reExecute();
//     } else {
//         alert(emptyCart);
//     }
// }

// function selectCuotas() {
//     let cuotaListItems = `Ingrese las cuotas`;
//     cuotas.forEach((cuotaItem) => {
//         cuotaListItems += `\n${cuotaItem.id} - Cuotas (Interes: ${cuotaItem.percent}%)`;
//     });
//     let idSelected = userInput(cuotaListItems, cuotas);
//     return cuotas.find((object) => object.id === idSelected);
// }

// function getTotalCart() {
//     let totalCart = 0;
//     cartList.forEach((cartItem) => {
//         cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
//         totalCart += cartItem.totalPrice;
//     });
//     return decimalsTwo(parseFloat(totalCart));
// }

// function informImports(cuotas, total) {
//     let localTotal = parseFloat(total);
//     let cuotaPercentImport = decimalsTwo(parseFloat(localTotal * cuotas.percent) / 100);
//     cuotaPercentImport = parseFloat(cuotaPercentImport);
//     let finalImport = cuotaPercentImport + localTotal;
//     let cuotaImport = finalImport / cuotas.id;
//     localTotal = decimalsTwo(localTotal);
//     cuotaPercentImport = decimalsTwo(cuotaPercentImport);
//     finalImport = decimalsTwo(finalImport);
//     cuotaImport = decimalsTwo(cuotaImport);

//     alert(
//         `Precio total del listado: $${localTotal}\n- Importe del interes por cuotas seleccionadas: $${cuotaPercentImport}\n- El importe final a pagar es de $${finalImport}\n- El pago se realizará en ${cuotas.id} cuotas de $${cuotaImport}\n- El porcentaje del interes es de ${cuotas.percent}%`
//     );
// }

// function decimalsTwo(input) {
//     return input.toFixed(2);
// }

// function reExecute() {
//     let response;
//     while (!yesNo.includes(response)) {
//         response = prompt(`Desea volver a ejecutar un nuevo proceso? [S/N]`);
//         response = response.toUpperCase();
//     }
//     if (response == "N") {
//         optionSelected = 0;
//     }
// }

// function changeLogoColor(element, source) {
//     element.src = source;
// }

// function registrarUsuario(storage) {
//     let username = document.getElementById("inputRegisterUsername").value;
//     let email = document.getElementById("inputRegisterEmail").value;
//     let password = document.getElementById("inputRegisterPassword").value;
//     // let rePassword = document.getElementById("inputRegisterRePassword");
//     const newUser = {
//         username: username,
//         email: email,
//         password: password,
//     };
//     // console.log(newUser);
//     storage.setItem("user", JSON.stringify(newUser));
//     username = email = password = "";
//     console.log(username);
// }

// function borrarTodosUsuarios(storage) {
//     storage.clear();
// }

// function borrarUsuario(storage, clave) {
//     storage.removeItem(clave);
// }

// const btnRegister = document.getElementById("btnRegister");
// btnRegister.addEventListener("click", (e) => {
//     // e.preventDefault();
//     registrarUsuario(sessionStorage);
// });

// const btnTienda = document.getElementById("btnTienda");

// btnTienda.addEventListener("click", (e) => {
//     console.log(e);
// });

// window.onload = () => {
//     let usuarioStorage = JSON.parse(sessionStorage.getItem("user"));
//     if (usuarioStorage) {
//         alert(usuarioStorage.username);
//     }
// };

// pre-entrega 3
let kbSwitchReviews = [];

// const btn = document.getElementById("inputSwitchName");
const switchName = document.getElementById("inputSwitchName");
const switchType = document.getElementById("selectType");
const switchTopHousing = document.getElementById("selectTopHousing");
const switchBottomHousing = document.getElementById("selectBottomHousing");
const switchStem = document.getElementById("selectStem");
const switchSpring = document.getElementById("inputSpring");
const switchUrlImage = document.getElementById("inputUrlImage");
const switchRating = document.getElementById("selectRating");
const textAreaReview = document.getElementById("textAreaReview");
const btnAddSwitch = document.getElementById("btnAddSwitch");
const cardContainer = document.getElementById("cardContainer");
const checkFactoryLubed = document.getElementById("checkFactoryLubed");
const btnUploadDefault = document.getElementById("btnUploadDefault");
const btnClearList = document.getElementById("btnClearList");
const kbSwitchDetail = document.getElementById("kbSwitchDetail");
const selectCriteria = document.getElementById("selectCriteria");
const inputSearch = document.getElementById("inputSearch");

class KbSwitch {
    constructor(
        name,
        type,
        topHousing,
        bottomHousing,
        stem,
        spring,
        factoryLubed,
        rating,
        review,
        image,
        id,
        unitPrice,
        cardId,
        btnId,
        btnDelId
    ) {
        this.name = name;
        this.type = type;
        this.topHousing = topHousing;
        this.bottomHousing = bottomHousing;
        this.stem = stem;
        this.spring = spring;
        this.factoryLubed = factoryLubed;
        this.review = review;
        this.rating = parseInt(rating);
        this.id = parseInt(id);
        this.unitPrice = parseFloat(unitPrice);
        this.image = image;
        // this.cardId = cardId;
        this.btnId = btnId;
        this.btnDelId = btnDelId;
    }
    assignId(array) {
        this.id = newId(kbSwitchReviews);
        this.btnId = `btnDetail${this.id}`;
        this.btnDelId = `btnDelete${this.id}`;
    }
    addReview(review) {
        this.review = review;
    }
    addRating() {
        this.rating = rating;
    }

    assignImage(url) {
        console.log(url);
        if (url == "") {
            this.image = "./img/no-image-svgrepo-com.svg";
        } else {
            this.image = url;
        }
    }
}

function newId(array) {
    let keep = true;
    let newIndex = 0;
    while (keep) {
        newIndex = Math.floor(Math.random() * 99999);
        let set = array.find((kbSwitch) => kbSwitch.id == newIndex);
        console.log(`ID generado: ${newIndex}`);
        if (!set) {
            console.log(`Valido!: ${newIndex}`);
            keep = false;
        }
    }
    return newIndex;
}
function registrarSwitch() {
    const kbSwitch = new KbSwitch(
        switchName.value,
        switchType.value,
        switchTopHousing.value,
        switchBottomHousing.value,
        switchStem.value,
        switchSpring.value,
        checkFactoryLubed.value,
        switchRating.value
    );

    if (textAreaReview != "") {
        kbSwitch.addReview(textAreaReview.value);
    } else {
        kbSwitch.addReview("No ingresó review");
    }

    kbSwitch.assignImage(switchUrlImage.value);

    kbSwitchReviews.push(kbSwitch);
    kbSwitch.assignId(kbSwitchReviews);
}

function saveStorage(kbSwitchReviews) {
    console.log(kbSwitchReviews);
    localStorage.setItem("reviewSwitches", JSON.stringify(kbSwitchReviews));
}

function clearStorage() {
    kbSwitchReviews = [];
    localStorage.clear();
}

function createCard(arrayElement, containerHtml) {
    containerHtml.innerHTML = "";
    for (const element of arrayElement) {
        let divCard = document.createElement("div");
        divCard.className = "col";
        divCard.innerHTML = `<div class="col mb-4">
                <div class="card">
                    <img src="${element.image}" class="card-img-top" alt="${element.name}">
                    <div class="card-body">
                        <h4 class="card-title">${element.name}</h4>
                        <div class="d-grid gap-1 col-5 mx-auto">
                            <a href="#kbSwitchDetail" class="btn btn-outline-dark btn-sm" id="btnDetail${element.id}">Detalle</a>
                            <a href="#" class="btn btn-outline-dark btn-sm" id="btnDelete${element.id}">Descartar</a>
                        </div>
                    </div>
                </div>
            </div>`;
        containerHtml.append(divCard);
        const btnDetail = document.getElementById(`btnDetail${element.id}`);
        btnDetail.addEventListener("click", (e) => {
            e.preventDefault();
            let eTarget = e.target;
            let switchFound = buscarSwitch(kbSwitchReviews, "btnId", eTarget.id);
            createDetailContainer(switchFound, kbSwitchDetail);
            document.getElementById("kbSwitchDetail").scrollIntoView();
        });
        const btnDelete = document.getElementById(`btnDelete${element.id}`);
        btnDelete.addEventListener("click", (e) => {
            e.preventDefault();
            let eTarget = e.target;
            // console.log(kbSwitchReviews);

            console.log(`Target seleccionado: ${eTarget.id}`);
            let switchFound = buscarSwitch(kbSwitchReviews, "btnDelId", eTarget.id);

            const newArray = kbSwitchReviews.filter((kbSwitch) => {
                return kbSwitch.btnDelId !== switchFound.btnDelId;
            });
            console.log(newArray);

            kbSwitchReviews = newArray;
            saveStorage(kbSwitchReviews);
            createCard(kbSwitchReviews, cardContainer);
        });
    }
}

function createDetailContainer(kbSwitch, containerHtml) {
    containerHtml.innerHTML = "";
    let divCard = document.createElement("div");
    divCard.innerHTML = `<div class="card h-100">
            <h4 class="card-header">${kbSwitch.name}</h4>
            <img src="${kbSwitch.image}"
                        class="rounded mx-auto d-block detailSwitchImage" alt="${kbSwitch.name}">
            <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Top housing</th>
                    <th scope="col">Bottom housing</th>
                    <th scope="col">Stem</th>
                    <th scope="col">Spring</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${kbSwitch.type}</td>
                    <td>${kbSwitch.topHousing}</td>
                    <td>${kbSwitch.bottomHousing}</td>
                    <td>${kbSwitch.stem}</td>
                    <td>${kbSwitch.spring}g.</td>
                    </tr>   
                </tbody>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Top housing</th>
                    <th scope="col">Bottom housing</th>
                    <th scope="col">Stem</th>
                    <th scope="col">Spring</th>
                    </tr>
                </thead>
            </table>
        </div>`;

    containerHtml.append(divCard);
}

// function setStorage() {
//     // saveStorage(kbSwitchReviews);
//     console.log(kbSwitchReviews);
//     const aux = localStorage.getItem("reviewSwitches", JSON.stringify(kbSwitchReviews));
//     console.log(aux);
// }

function clearCardContainer(containerHtml) {
    containerHtml.innerHTML = "";
}

btnAddSwitch.addEventListener("click", (e) => {
    e.preventDefault();
    registrarSwitch(kbSwitchReviews);
    saveStorage(kbSwitchReviews);
    createCard(kbSwitchReviews, cardContainer);
});

btnUploadDefault.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(kbSwitchReviews);
    registrarSwitchDefault(kbSwitchReviews);
    saveStorage(kbSwitchReviews);
    createCard(kbSwitchReviews, cardContainer);
});

btnClearList.addEventListener("click", (e) => {
    e.preventDefault();
    clearCardContainer(cardContainer);
    clearStorage();
});

inputSearch.addEventListener("input", () => {
    let criterio = selectCriteria.value;
    if (criterio == "Filtrar listado...") {
        selectCriteria.style.border = "solid indianred";
        inputSearch.value = "";
    } else {
        selectCriteria.style.border = "";
        let chain = inputSearch.value.toUpperCase();
        let kbSwitchesFiltered = filterList(kbSwitchReviews, criterio, chain);
        createCard(filterList(kbSwitchReviews, criterio, chain), cardContainer);
    }
});

const defaultSwitchList = [];

function registrarSwitchDefault() {
    for (const defSwitch of defaultSwitchList) {
        const kbSwitch = new KbSwitch(
            defSwitch.name,
            defSwitch.type,
            defSwitch.topHousing,
            defSwitch.bottomHousing,
            defSwitch.stem,
            defSwitch.spring,
            defSwitch.factoryLubed,
            defSwitch.rating,
            defSwitch.review,
            defSwitch.image
        );

        if (defSwitch.review != "") {
            kbSwitch.addReview(textAreaReview.value);
        } else {
            kbSwitch.addReview("No ingresó review");
        }

        kbSwitch.assignImage(defSwitch.image);

        kbSwitchReviews.push(kbSwitch);
        kbSwitch.assignId(kbSwitchReviews);
    }
}

function buscarSwitch(array, criterio, input) {
    return array.find((element) => element[criterio] == input);
}

function changeLogoColor(element, source) {
    element.src = source;
}

function filterList(array, criterio, input) {
    // return array.filter((item) => item[criterio].includes(input));

    return array.filter((item) => item[criterio].toUpperCase().includes(input));
}

window.onload = () => {
    let usuarioStorage = JSON.parse(localStorage.getItem("reviewSwitches"));
    // console.log(kbSwitchReviews);
    for (const element of usuarioStorage) {
        // console.log(`elemento: ${element.name}`);
        kbSwitchReviews.push(element);
    }
    // console.log(kbSwitchReviews);
    createCard(usuarioStorage, cardContainer);
};
