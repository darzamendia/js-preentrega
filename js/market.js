function setMarketContainer(array, element) {
    createMarketCard(array, element);
}

function createMarketCard(arrayElement, containerHtml) {
    setMarketSearcher(containerHtml);
    setMarketItems(arrayElement, containerHtml);
    setMarketDetail(containerHtml);
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
                <input type="text" class="form-control" id="inputSearchMarket" placeholder="Ingresar búsqueda...">
            </div>
        </div>
        <div class="col">
        </div>
    </div>`;
    element.append(divSearch);
    addMarketSearchInput(element);
}

function setMarketItems(array, containerHtml) {
    let divCardContainer = document.createElement("div");
    let divCardLayout = document.createElement("div");
    divCardContainer.className = "container text-center";
    divCardContainer.id = "marketCardContainer";
    divCardLayout.className = "row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4";
    addMarketCard(array, divCardLayout);
    divCardContainer.append(divCardLayout);
    containerHtml.append(divCardContainer);
    addMarketCardBtnDetail(array);
    addMarketCardbtnAddCart(array);
    addMarketQuantityInput(array);
}

function setMarketDetail(containerHtml) {
    let divUnitDetailContainer = document.createElement("div");
    divUnitDetailContainer.id = "cntMarketUnitDetail";
    divUnitDetailContainer.className = "p-3 position-relative overflow-hidden text-center bg-light";
    containerHtml.append(divUnitDetailContainer);
}

function addMarketCardBtnDetail(array) {
    array.forEach((element) => {
        const btnDetail = document.getElementById(element.btnDetail);
        if (btnDetail) {
            btnDetail.addEventListener("click", (e) => {
                e.preventDefault();
                let unitFound = buscarSwitch(kbSwitchMarket, "btnDetail", e.target.id);
                let cntchange = document.getElementById("cntMarketUnitDetail");
                createDetailContainer(unitFound, cntchange);
                document.getElementById("cntMarketUnitDetail").scrollIntoView();
            });
        }
    });
}

function addMarketCardbtnAddCart(array) {
    array.forEach((element) => {
        const btnAddCart = document.getElementById(element.btnAddCart);
        btnAddCart.addEventListener("click", (e) => {
            e.preventDefault();
            let newUnit = buscarSwitch(kbSwitchMarket, "btnAddCart", e.target.id);
            let cartUnit = buscarSwitch(kbSwitchCart, "id", newUnit.id);
            let quantityInput = document.getElementById(`quantity${newUnit.id}`);
        
            if (cartUnit) {
                cartUnit.quantity += parseInt(quantityInput.value);
                cartUnit.calcTotal();
            } else {
                addUnitToCart(newUnit, quantityInput.value);
            }
            newUnit.unitStock -= quantityInput.value;
            updateMarketItems(newUnit);
            saveStorage("market", kbSwitchMarket);
            saveStorage("cart", kbSwitchCart);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Se agregó ${newUnit.name}`,
                showConfirmButton: false,
                timer: 1500,
            });

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: `${newUnit.name} añadido al carrito`,
            });
        });
    });
}

function addMarketCardDetailbtn(element) {
    const btnDetail = document.getElementById(`btnDetail${element.id}`);
    if (btnDetail) {
        btnDetail.addEventListener("click", (e) => {
            e.preventDefault();
            let eTarget = e.target;
        });
    }
}

function addMarketCard(array, container) {
    for (const element of array) {
        let divCard = document.createElement("div");
        divCard.className = "col";
        divCard.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <img src="${element.image}" class="card-img-top" alt="...">
                <h5 class="card-title">${element.name}</h5>
                <h6>Precio: $${element.unitPrice}</h6>
                <p id="stockId${element.id}">Stock: ${element.unitStock}u.</p>
                <a href="#" class="btn btn-link" data-mdb-ripple-color="dark" id="${element.btnDetail}">Detalle</a>
                <div class="form-outline col-4 mx-auto">
                    <input min="0" max="${element.unitStock}" type="number" id="quantity${element.id}" class="form-control" value="0"/>
                    <label class="form-label" for="quantity${element.id}">Cantidad</label>
                </div>
                
                <div class="d-grid gap-2 col-9 mx-auto py-2">
                    <a href="#" class="btn btn-outline-dark btn-sm" id="${element.btnAddCart}">Agregar al carrito</a>
                </div>
            </div>
        </div>`;
        container.append(divCard);
    }
}

function updateMarketItems(unit) {
    let unitStock = document.getElementById(`stockId${unit.id}`);
    unitStock.innerHTML = `Stock: ${unit.unitStock}u.`;
}

function addMarketQuantityInput(array) {
    array.forEach((element) => {
        const inputQuantity = document.getElementById(`quantity${element.id}`);
        if (inputQuantity) {
            inputQuantity.addEventListener("click", (e) => {
                e.preventDefault();
                if (inputQuantity.value > element.unitStock) {
                    inputQuantity.value = element.unitStock;
                } else if (inputQuantity.value < 0) {
                    inputQuantity.value = 0;
                }
            });
        }
    });
}

function addMarketSearchInput(element) {
    const selectCriteria1 = document.getElementById("selectCriteria");
    const inputSearch1 = document.getElementById("inputSearchMarket");

    inputSearch1.addEventListener("input", () => {
        let unitDetailContainer = document.getElementById("cntMarketUnitDetail");
        let criterio = selectCriteria1.value;
        if (criterio == "Filtrar listado...") {
            selectCriteria1.style.border = "solid indianred";
            inputSearch1.value = "";
        } else {
            unitDetailContainer.innerHTML = "";
            selectCriteria1.style.border = "";
            let stringChain = inputSearch1.value.toUpperCase();
            let kbSwitchesFiltered = filterList(kbSwitchMarket, criterio, stringChain);
            const marketCardtContainer = document.getElementById("marketCardContainer");
            emptyElement(marketCardtContainer);
            setMarketItems(filterList(kbSwitchMarket, criterio, stringChain), marketCardtContainer);
        }
    });
}

function fillMarketList() {
    kbSwitchMarket = [];
    let marketStorage = JSON.parse(localStorage.getItem("market"));
    if (marketStorage) {
        uploadMarketStorage(marketStorage);
    } else {
        defaultMarket();
    }
}

function uploadMarketStorage(array) {
    array.forEach((element) => {
        kbSwitchMarket.push(
            new KbSwitchUnit(
                element.name,
                element.type,
                element.topHousing,
                element.bottomHousing,
                element.stem,
                element.spring,
                element.factoryLubed,
                element.unitPrice,
                element.unitStock,
                element.rating,
                element.review,
                element.image,
                element.id,
                element.btnDetail,
                element.btnAddCart
            )
        );
    });
}

function defaultMarket() {
    kbSwitchMarket.push(
        new KbSwitchUnit(
            "SP-Star Meteor White",
            "Linear",
            "Nylon",
            "Nylon",
            "POM",
            "57",
            true,
            100.0,
            30,
            5,
            "Su buen lubeado de fábrica hace que pueda usarse In-Stock sin necesidad de abrirlos",
            "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/sp-star-meteor-white-linear-switches-414631.jpg?v=1640142269"
        )
    );

    kbSwitchMarket.push(
        new KbSwitchUnit(
            "Novelkeys Cream Linear",
            "Linear",
            "POM",
            "POM",
            "POM",
            "55",
            false,
            220.0,
            25,
            5,
            "Nuevo",
            "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/novelkeys-cream-linear-switches-709492.jpg?v=1671203961"
        )
    );
    kbSwitchMarket.push(
        new KbSwitchUnit(
            "C³Equalz X TKC Tangerine",
            "Linear",
            "UHMWPE",
            "UHMWPE",
            "POM",
            "62",
            true,
            240.0,
            20,
            5,
            "Acidos como mandarina",
            "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/c3equalz-x-tkc-tangerine-linear-switches-145416.jpg?v=1634691412"
        )
    );
    kbSwitchMarket.push(
        new KbSwitchUnit(
            "Geon Clear Tactile",
            "Tactile",
            "Policarbonato",
            "Nylon",
            "POM",
            "60",
            true,
            260.0,
            10,
            5,
            "",
            "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/geon-clear-tactile-switches-409943.webp?v=1676534404"
        )
    );
    kbSwitchMarket.push(
        new KbSwitchUnit(
            "Gateron Yellow",
            "Linear",
            "PC/Nylon mix",
            "Nylon",
            "POM",
            "55",
            false,
            280.0,
            5,
            5,
            "",
            "https://cdn.shopify.com/s/files/1/0275/3649/0561/products/gateron-yellow-linear-switches-951422.jpg?v=1636767870"
        )
    );

    kbSwitchMarket.forEach((element) => {
        element.assignId(kbSwitchMarket);
    });
}
