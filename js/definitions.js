const logos = [];
const kbSwitchMarket = [];

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
    emptyElement(mainContainer);
});
btnNavMarket.addEventListener("click", (e) => {
    emptyElement(mainContainer);
    setMarketContainer(kbSwitchMarket, mainContainer);
});

function emptyElement(element) {
    element.innerHTML = "";
}

function setMarketContainer(array, element) {
    createMarketCard(array, element);
}

function createMarketCard(arrayElement, containerHtml) {
    setMarketSearcher(containerHtml);
    setMarketItems(arrayElement, containerHtml);
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
    divUnitDetailContainer.id = "cntMarketUnitDetail";
    containerHtml.append(divUnitDetailContainer);

    // const btn = document.getElementById("btnDetail3");
    // console.log(btn);
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
                    <a href="#kbSwitchDetail" class="btn btn-outline-dark btn-sm" id="btnDetail${element.id}">Detalle</a>
                    <a href="#" class="btn btn-outline-dark btn-sm" id="btnDelete${element.id}">Agregar al carrito</a>
                </div>
            </div>
        </div>`;
        container.append(divCard);
        console.log(element.btnId);
        // addMarketCardDetailbtn(element);
        // console.log(container.innerHTML);

        // btnDetail.addEventListener("click", (e) => {
        //     e.preventDefault();
        //     // let eTarget = e.target;
        //     // let switchFound = buscarSwitch(kbSwitchReviews, "btnId", eTarget.id);
        //     // createDetailContainer(switchFound, kbSwitchDetail);
        //     // document.getElementById("kbSwitchDetail").scrollIntoView();
        // });
    }
    // const btnDetail = document.getElementById(`${element.btnId}`);

    // array.forEach((element) => {
    //     console.log(element.btnDetail);
    // });
}

function addMarketCardBtnFn(array) {
    array.forEach((element) => {
        const btnDetail = document.getElementById(element.btnId);
        btnDetail.addEventListener("click", (e) => {
            e.preventDefault();
            let eTarget = e.target;
            let unitFound = buscarSwitch(kbSwitchMarket, "btnId", eTarget.id);
            const cntchange = document.getElementById("cntMarketUnitDetail");
            createDetailContainer(unitFound, cntchange);
            document.getElementById("cntMarketUnitDetail").scrollIntoView();
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

// function createDetailContainer(unit, containerHtml) {
//     containerHtml.innerHTML = "";
//     let divCard = document.createElement("div");
//     let lubed;
//     if (kbSwitch.factoryLubed) {
//         lubed = "Si";
//     } else {
//         lubed = "No";
//     }
//     divCard.id = kbSwitch.id;
//     divCard.innerHTML = `<div class="card h-100"">
//             <h4 class="card-header">${unit.name}</h4>
//             <img src="${unit.image}"
//                         class="rounded mx-auto d-block detailSwitchImage" alt="${unit.name}">
//             <h2 class="fs-1 fst-italic mb-5">"...${unit.review}..."</h2>
//             <table class="table table-borderless">
//                 <thead>
//                     <tr>
//                     <th scope="col">Tipo</th>
//                     <th scope="col">Top housing</th>
//                     <th scope="col">Bottom housing</th>
//                     <th scope="col">Stem</th>
//                     <th scope="col">Spring</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     <td>${unit.type}</td>
//                     <td>${unit.topHousing}</td>
//                     <td>${unit.bottomHousing}</td>
//                     <td>${unit.stem}</td>
//                     <td>${unit.spring}g.</td>
//                     </tr>
//                 </tbody>
//                 <thead>
//                     <tr>
//                     <th scope="col">Factory Lubed</th>
//                     <th scope="col">Puntaje</th>
//                     <th scope="col">ID</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     <td>${lubed}</td>
//                     <td>${unit.rating}</td>
//                     <td>${unit.id}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             <div class="d-grid col-4 mx-auto">
//                 <a href="#cardContainer" class="btn btn-outline-dark btn-sm my-2" id="btnBackToCardContainer">Volver</a>
//             </div>
//         </div>`;
//     containerHtml.append(divCard);
// }
