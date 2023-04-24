let kbSwitchReviews = [];

// const switchName = document.getElementById("inputSwitchName");
// const switchType = document.getElementById("selectType");
// const switchTopHousing = document.getElementById("selectTopHousing");
// const switchBottomHousing = document.getElementById("selectBottomHousing");
// const switchStem = document.getElementById("selectStem");
// const switchSpring = document.getElementById("inputSpring");
// const switchUrlImage = document.getElementById("inputUrlImage");
// const switchRating = document.getElementById("selectRating");
// const textAreaReview = document.getElementById("textAreaReview");
// const btnAddSwitch = document.getElementById("btnAddSwitch");
// const cardContainer = document.getElementById("cardContainer");
// const checkFactoryLubed = document.getElementById("checkFactoryLubed");
// const btnUploadDefault = document.getElementById("btnUploadDefault");
// const btnClearList = document.getElementById("btnClearList");
// const kbSwitchDetail = document.getElementById("kbSwitchDetail");
// const selectCriteria = document.getElementById("selectCriteria");
// const inputSearch = document.getElementById("inputSearch");

function newId(array) {
    let keep = true;
    let newIndex = 0;
    while (keep) {
        newIndex = Math.floor(Math.random() * 9);
        let set = array.find((kbSwitch) => kbSwitch.id == newIndex);
        if (!set) {
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
        checkFactoryLubed.checked,
        switchRating.value,
        textAreaReview.value,
        switchUrlImage.value
    );

    if (textAreaReview.value.length != 0) {
        kbSwitch.addReview(textAreaReview.value);
    } else {
        kbSwitch.addReview("No ingresó review");
    }

    kbSwitch.assignImage(switchUrlImage.value);

    kbSwitchReviews.push(kbSwitch);
    kbSwitch.assignId(kbSwitchReviews);
}

function addUnitToCart(newUnit, quantity) {
    const kbSwitch = new KbSwitchUnitCart(
        newUnit.name,
        newUnit.type,
        newUnit.topHousing,
        newUnit.bottomHousing,
        newUnit.stem,
        newUnit.spring,
        newUnit.factoryLubed,
        newUnit.unitPrice,
        quantity,
        "",
        "",
        newUnit.image,
        newUnit.id
    );

    // if (textAreaReview.value.length != 0) {
    //     kbSwitch.addReview(textAreaReview.value);
    // } else {
    //     kbSwitch.addReview("No ingresó review");
    // }
    // console.log(`${kbSwitch.unitPrice} ${kbSwitch.quantity}`);
    kbSwitch.calcTotal();
    kbSwitch.assignId();
    // console.log(kbSwitch.totalPrice);
    // kbSwitch.assignImage(switchUrlImage.value);

    kbSwitchCart.push(kbSwitch);
    // console.log()
    // kbSwitch.assignId(kbSwitchReviews);
}

function saveStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function clearStorage() {
    kbSwitchReviews = [];
    localStorage.clear();
}

function clearDetailContainer(id) {
    const containerFound = document.getElementById(id);
    if (containerFound) {
        containerFound.innerHTML = "";
    }
}

function createDetailContainer(kbSwitch, containerHtml) {
    containerHtml.innerHTML = "";
    let divCard = document.createElement("div");
    let lubed;
    if (kbSwitch.factoryLubed) {
        lubed = "Si";
    } else {
        lubed = "No";
    }
    divCard.id = kbSwitch.id;
    divCard.innerHTML = `<div class="card h-100"">
            <h4 class="card-header">${kbSwitch.name}</h4>
            <img src="${kbSwitch.image}"
                        class="rounded mx-auto d-block detailSwitchImage" alt="${kbSwitch.name}">
            <h2 class="fs-1 fst-italic mb-5">"...${kbSwitch.review}..."</h2>
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
                    <th scope="col">Factory Lubed</th>
                    <th scope="col">Puntaje</th>
                    <th scope="col">ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${lubed}</td>
                    <td>${kbSwitch.rating}</td>
                    <td>${kbSwitch.id}</td>
                    </tr>   
                </tbody>
            </table>
            <div class="d-grid col-4 mx-auto">
                <a href="#mainContainer" class="btn btn-outline-dark btn-sm my-2">Volver</a>
            </div>
        </div>`;
    // <div class="d-grid col-4 mx-auto">
    //     <a href="#cardContainer" class="btn btn-outline-dark btn-sm my-2" id="btnBackToCardContainer">
    //         Volver
    //     </a>
    // </div>;
    containerHtml.append(divCard);
}

function clearCardContainer(containerHtml) {
    containerHtml.innerHTML = "";
}

// btnAddSwitch.addEventListener("click", (e) => {
//     e.preventDefault();
//     let valido = valInputs();
//     if (valido) {
//         registrarSwitch(kbSwitchReviews);
//         saveStorage(kbSwitchReviews);
//         createCard(kbSwitchReviews, cardContainer);
//         clearInputs();
//     }
// });

// function clearInputs() {
//     switchName.value = "";
//     switchType.value = "Seleccionar tipo...";
//     switchTopHousing.value = "Seleccionar material...";
//     switchBottomHousing.value = "Seleccionar material...";
//     switchStem.value = "Seleccionar material...";
//     switchSpring.value = "";
//     checkFactoryLubed.checked = false;
//     switchUrlImage.value = "";
//     textAreaReview.value = "";
//     switchRating.value = "Puntuación...";
// }

// function valInputs() {
//     let inputsOk = true;
//     if (switchName.value == "") {
//         switchName.style.border = "solid indianred";
//         inputsOk = false;
//         backToContainer("cardContainer");
//     } else {
//         switchName.style.border = "";
//     }
//     if (switchType.value == "Seleccionar tipo...") {
//         switchType.style.border = "solid indianred";
//         inputsOk = false;
//         backToContainer("cardContainer");
//     } else {
//         switchType.style.border = "";
//     }
//     if (switchTopHousing.value == "Seleccionar material...") {
//         switchTopHousing.style.border = "solid indianred";
//         inputsOk = false;
//         backToContainer("cardContainer");
//     } else {
//         switchTopHousing.style.border = "";
//     }
//     if (switchBottomHousing.value == "Seleccionar material...") {
//         switchBottomHousing.style.border = "solid indianred";
//         inputsOk = false;
//         backToContainer("cardContainer");
//     } else {
//         switchBottomHousing.style.border = "";
//     }
//     if (switchStem.value == "Seleccionar material...") {
//         switchStem.style.border = "solid indianred";
//         inputsOk = false;
//         backToContainer("cardContainer");
//     } else {
//         switchStem.style.border = "";
//     }
//     if (switchSpring.value == "" || isNaN(switchSpring.value)) {
//         switchSpring.style.border = "solid indianred";
//         inputsOk = false;
//         backToContainer("cardContainer");
//     } else {
//         switchSpring.style.border = "";
//     }
//     return inputsOk;
// }

function backToContainer(container) {
    document.getElementById(container).scrollIntoView();
}
// "cardContainer"

// btnUploadDefault.addEventListener("click", (e) => {
//     e.preventDefault();
//     registrarSwitchDefault(kbSwitchReviews);
//     saveStorage(kbSwitchReviews);
//     createCard(kbSwitchReviews, cardContainer);
// });

// btnClearList.addEventListener("click", (e) => {
//     e.preventDefault();
//     clearCardContainer(cardContainer);
//     clearStorage();
//     const containerFound = document.getElementById("kbSwitchDetail");
//     if (containerFound) {
//         containerFound.innerHTML = "";
//     }
// });

// inputSearch.addEventListener("input", () => {
//     let criterio = selectCriteria.value;
//     if (criterio == "Filtrar listado...") {
//         selectCriteria.style.border = "solid indianred";
//         inputSearch.value = "";
//     } else {
//         selectCriteria.style.border = "";
//         let chain = inputSearch.value.toUpperCase();
//         let kbSwitchesFiltered = filterList(kbSwitchReviews, criterio, chain);
//         createCard(filterList(kbSwitchReviews, criterio, chain), cardContainer);
//     }
// });

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
        if (defSwitch.review.length != 0) {
            kbSwitch.addReview(defSwitch.review);
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
    return array.filter((item) => item[criterio].toUpperCase().includes(input));
}
