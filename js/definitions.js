const logos = [];
const kbSwitchMarket = [];
const kbSwitchCart = [];

const mainContainer = document.getElementById("mainContainer");

const btnNavHome = document.getElementById("btnNavHome");
const btnNavMarket = document.getElementById("btnNavMarket");
const btnNavCart = document.getElementById("btnNavCart");

logos.push(new NewLogo(1, "btnLogoLavanda", "./img/logo-lavander.svg"));
logos.push(new NewLogo(2, "btnLogoRojo", "./img/logo-red.svg"));
logos.push(new NewLogo(3, "btnLogoVerde", "./img/logo-green.svg"));

let mainLogo = document.getElementById("mainLogo");
let navLogo = document.getElementById("navLogo");

const btnLogoLavanda = document.getElementById("btnLogoLavanda");
const btnLogoRojo = document.getElementById("btnLogoRojo");
const btnLogoVerde = document.getElementById("btnLogoVerde");

btnLogoLavanda.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    let logoName = target.id;
    let logoSel = logos.find((logo) => logo.name == logoName);
    changeLogoColor(mainLogo, logoSel.url);
    changeLogoColor(navLogo, logoSel.url);
    const objectFound = document.getElementById("divCardContainer");
    if (objectFound) {
        objectFound.style.background = "#B6A4FE";
    }
    btnAddSwitch.style.background = "#B6A4FE";
    btnAddSwitch.style.border = "#B6A4FE";
});

btnLogoRojo.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    let logoName = target.id;
    let logoSel = logos.find((logo) => logo.name == logoName);
    changeLogoColor(mainLogo, logoSel.url);
    changeLogoColor(navLogo, logoSel.url);
    const objectFound = document.getElementById("divCardContainer");
    if (objectFound) {
        objectFound.style.background = "#FF6262";
    }
    btnAddSwitch.style.background = "#FF6262";
    btnAddSwitch.style.border = "#FF6262";
});

btnLogoVerde.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    let logoName = target.id;
    let logoSel = logos.find((logo) => logo.name == logoName);
    changeLogoColor(mainLogo, logoSel.url);
    changeLogoColor(navLogo, logoSel.url);
    const objectFound = document.getElementById("divCardContainer");
    if (objectFound) {
        objectFound.style.background = "#7DBF91";
    }
    btnAddSwitch.style.background = "#7DBF91";
    btnAddSwitch.style.border = "#7DBF91";
});

// new
btnNavHome.addEventListener("click", (e) => {
    e.preventDefault();
    emptyElement(mainContainer);
});

btnNavMarket.addEventListener("click", (e) => {
    e.preventDefault();
    emptyElement(mainContainer);
    setMarketContainer(kbSwitchMarket, mainContainer);
});

btnNavCart.addEventListener("click", (e) => {
    e.preventDefault();
    emptyElement(mainContainer);
    setCartContainer(kbSwitchCart, mainContainer);
});

function emptyElement(element) {
    element.innerHTML = "";
}

function setMarketContainer(array, element) {
    createMarketCard(array, element);
}

function setCartContainer(array, element) {
    createCartCard(array, element);
}

function createMarketCard(arrayElement, containerHtml) {
    setMarketSearcher(containerHtml);
    setMarketItems(arrayElement, containerHtml);
}

function createCartCard(arrayElement, containerHtml) {
    // setMarketSearcher(containerHtml);
    setCartItems(arrayElement, containerHtml);
}

function setMarketSearcher(element) {
    let divSearch = document.createElement("div");
    divSearch.className = "container text-center";
    divSearch.innerHTML = `
    <div class="row">
        <div class="col">
        </div>
        <div class="col input-group input-group-sm mb-3">
            <select class="form-select" id="selectCriteria" aria-label="Example select with button addon">
                <option selected>Filtrar listado...</option>
                <option value="name">Nombre</option>
                <option value="type">Tipo</option>
            </select>
        </div>
        <div class="col-3">
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" id="inputSearch" placeholder="Ingresar búsqueda...">
            </div>
        </div>
        <div class="col">
        </div>
    </div>`;
    element.append(divSearch);
}

function setMarketItems(array, containerHtml) {
    let divCardContainer = document.createElement("div");
    let divCardLayout = document.createElement("div");
    let divUnitDetailContainer = document.createElement("div");
    divCardContainer.className = "container text-center";
    divCardLayout.className = "row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4";
    addMarketCard(array, divCardLayout);
    divCardContainer.append(divCardLayout);
    containerHtml.append(divCardContainer);
    addMarketCardBtnFn(array);
    addMarketCardbtnAddCart(array);
    // Meter Container detail en fn. addMarketDetailContainer
    divUnitDetailContainer.id = "cntMarketUnitDetail";
    divUnitDetailContainer.className = "p-3 position-relative overflow-hidden text-center bg-light";
    containerHtml.append(divUnitDetailContainer);
    //
}

function setCartItems(array, containerHtml) {
    let divCardContainer = document.createElement("div");
    // let divCardLayout = document.createElement("div");
    let divUnitDetailContainer = document.createElement("div");
    divCardContainer.className = "container";
    // divCardLayout.className = "row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4";
    addCartCard(array, divCardContainer);
    // divCardContainer.append(divCardLayout);
    containerHtml.append(divCardContainer);
    // addMarketCardBtnFn(array);
    // addMarketCardbtnAddCart(array);
    // Meter Container detail en fn. addMarketDetailContainer
    divUnitDetailContainer.id = "cntMarketUnitDetail";
    divUnitDetailContainer.className = "p-3 position-relative overflow-hidden text-center bg-light";
    containerHtml.append(divUnitDetailContainer);
    //
}

function addMarketCard(array, container) {
    for (const element of array) {
        let divCard = document.createElement("div");
        divCard.className = "col";
        divCard.innerHTML = `
        <div class="card h-100">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <h6>Precio: $${element.unitPrice}</h6>
                <p>Stock: ${element.unitStock}u.</p>
                <div class="d-grid gap-1 mx-auto">
                    <a href="#" class="btn btn-outline-dark btn-sm" id="${element.btnDetail}">Detalle</a>
                    <a href="#" class="btn btn-outline-dark btn-sm" id="${element.btnAddCart}">Agregar al carrito</a>
                </div>
            </div>
        </div>`;
        container.append(divCard);
    }
}
function addCartCard(array, container) {
    let divCard = document.createElement("ol");
    divCard.className = "list-group";
    for (const element of array) {
        divCard.innerHTML += `
            <ul class="list-group-item d-flex justify-content-between align-items-start">
                <img src="${element.image}" class="cartImage" alt="${element.name}">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${element.name}</div>
                    $${element.unitPrice} x ${element.quantity}u.
                </div>
                <h5>$${element.totalPrice}</h5>
            </ul>`;
        container.append(divCard);
    }
}

function addMarketCardBtnFn(array) {
    array.forEach((element) => {
        const btnDetail = document.getElementById(element.btnDetail);
        btnDetail.addEventListener("click", (e) => {
            e.preventDefault();
            let unitFound = buscarSwitch(kbSwitchMarket, "btnDetail", e.target.id);
            const cntchange = document.getElementById("cntMarketUnitDetail");
            createDetailContainer(unitFound, cntchange);
            document.getElementById("cntMarketUnitDetail").scrollIntoView();
        });
    });
}

function addMarketCardbtnAddCart(array) {
    console.log(array);
    array.forEach((element) => {
        const btnAddCart = document.getElementById(element.btnAddCart);
        btnAddCart.addEventListener("click", (e) => {
            e.preventDefault();
            let newUnit = buscarSwitch(kbSwitchMarket, "btnAddCart", e.target.id);
            let cartUnit = buscarSwitch(kbSwitchCart, "id", newUnit.id);
            console.log(cartUnit);
            // if (valido) {
            addUnitToCart(newUnit);

            // saveStorage(kbSwitchReviews);
            // }
        });
    });
}

function addMarketCardDetailbtn(element) {
    const btnDetail = document.getElementById(`btnDetail${element.id}`);
    console.log(`btnDetail${element.id}`);
    if (btnDetail) {
        btnDetail.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(e.target);
            let eTarget = e.target;
            // let switchFound = buscarSwitch(kbSwitchReviews, "btnId", eTarget.id);
            // createDetailContainer(switchFound, kbSwitchDetail);
            // document.getElementById("kbSwitchDetail").scrollIntoView();
        });
    }
}
