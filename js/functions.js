function getJson(origin) {
    return fetch(origin)
        .then((response) => response.json())
        .then((json) => json);
}
function newId(array) {
    let keep = true;
    let newIndex = 0;
    while (keep) {
        newIndex = Math.floor(Math.random() * 100);
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
    kbSwitch.calcTotal();
    kbSwitch.assignId();
    kbSwitchCart.push(kbSwitch);
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
    containerHtml.append(divCard);
}

function backToContainer(container) {
    document.getElementById(container).scrollIntoView();
}
const defaultSwitchList = [];

function buscarSwitch(array, criterio, input) {
    return array.find((element) => element[criterio] == input);
}

function changeLogoColor(element, source) {
    element.src = source;
}

function filterList(array, criterio, input) {
    return array.filter((item) => item[criterio].toUpperCase().includes(input));
}
