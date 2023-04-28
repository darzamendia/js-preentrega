function fillCartList() {
    kbSwitchCart = [];
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartStorage) {
        uploadCartStorage(cartStorage);
    }
}

function uploadCartStorage(array) {
    array.forEach((element) => {
        kbSwitchCart.push(
            new KbSwitchUnitCart(
                element.name,
                element.type,
                element.topHousing,
                element.bottomHousing,
                element.stem,
                element.spring,
                element.factoryLubed,
                element.unitPrice,
                element.quantity,
                element.rating,
                element.review,
                element.image,
                element.id,
                element.totalPrice,
                element.idDelete
            )
        );
    });
}

function setCartContainer(array, element) {
    createCartCard(array, element);
}

function createCartCard(arrayElement, containerHtml) {
    // setMarketSearcher(containerHtml);
    setCartItems(arrayElement, containerHtml);
}

function setCartItems(array, containerHtml) {
    let divCardContainer = document.createElement("div");
    divCardContainer.className = "container";
    divCardContainer.id = "cartList";
    addCartCard(array, divCardContainer);
    containerHtml.append(divCardContainer);
    addCartCardBtnDelete(array);
    //
}

function addCartCard(array, container) {
    let divCard = document.createElement("ol");
    divCard.className = "list-group";
    for (const element of array) {
        divCard.innerHTML += `
            <ul class="list-group-item d-flex justify-content-between align-items-start">
                <button type="button" class="btn btn-outline-danger btn-sm" id="${element.idDelete}">Eliminar</button>
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

function addInitBuyBtn(container) {
    let divBtn = document.createElement("div");
    divBtn.className = "py-3";
    divBtn.innerHTML = `
        <div class="d-grid gap-2 col-4 mx-auto">
            <button id="btnInitBuy" class="btn btn-outline-dark" type="button">Iniciar compra</button>
        </div>`;
    container.append(divBtn);
    addInitBuyFn(container);
}

function addInitBuyFn(container) {
    const buyBtn = document.getElementById("btnInitBuy");
    if (buyBtn) {
        buyBtn.addEventListener("click", (e) => {
            emptyElement(container);
            e.preventDefault();
            addCheckOut(container);
        });
    }
}

function addCartCardBtnDelete(array) {
    array.forEach((element) => {
        const btnDeleteCartItem = document.getElementById(element.idDelete);
        btnDeleteCartItem.addEventListener("click", (e) => {
            e.preventDefault();

            let selectedUnit = buscarSwitch(kbSwitchCart, "idDelete", e.target.id);
            let marketUnit = buscarSwitch(kbSwitchMarket, "id", selectedUnit.id);
            console.log(e.target.id);
            console.log(kbSwitchCart);
            console.log(kbSwitchMarket);

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger",
                },
                buttonsStyling: false,
            });
            // Swal.fire({
            swalWithBootstrapButtons
                .fire({
                    title: "Eliminar item",
                    text: `Está seguro que desea eliminar ${selectedUnit.name} del carrito?`,
                    // icon: "warning",
                    // icon: "warning",
                    showCancelButton: true,
                    // confirmButtonColor: "#3085d6",
                    // cancelButtonColor: "#d33",
                    cancelButtonText: "No, cancelar",
                    confirmButtonText: "Si, eliminar",
                    reverseButtons: true,
                })
                .then((result) => {
                    console.log("test");
                    if (result.isConfirmed) {
                        Swal.fire("Eliminado!", "El item seleccionado fué descartado del carrito", "success");
                        marketUnit.unitStock += selectedUnit.quantity;
                        const newArray = kbSwitchCart.filter((kbSwitch) => {
                            return kbSwitch.idDelete !== selectedUnit.idDelete;
                        });
                        kbSwitchCart = newArray;
                        if (kbSwitchCart.length != 0) {
                            let cartListCnt = document.getElementById("cartList");
                            emptyElement(cartList);
                            updateCartList(kbSwitchCart, cartList);
                        } else {
                            emptyElement(mainContainer);
                            emptyCartImg(mainContainer, "./img/emptycart.svg");
                        }
                        saveStorage("market", kbSwitchMarket);
                        saveStorage("cart", kbSwitchCart);
                    }
                });

            // marketUnit.unitStock += selectedUnit.quantity;
            // const newArray = kbSwitchCart.filter((kbSwitch) => {
            //     return kbSwitch.idDelete !== selectedUnit.idDelete;
            // });
            // kbSwitchCart = newArray;
            // if (kbSwitchCart.length != 0) {
            //     let cartListCnt = document.getElementById("cartList");
            //     emptyElement(cartList);
            //     updateCartList(kbSwitchCart, cartList);
            // } else {
            //     emptyElement(mainContainer);
            //     emptyCartImg(mainContainer, "./img/emptycart.svg");
            // }
            // saveStorage("market", kbSwitchMarket);
            // saveStorage("cart", kbSwitchCart);
        });
    });
}

function updateCartList(array, container) {
    addCartCard(array, container);
    addCartCardBtnDelete(array);
}

function addCheckOut(container) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="row g-5">
    <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Tu carrito</span>
            <span class="badge bg-primary rounded-pill" id="checkOutTotalItem"></span>
        </h4>
        <ul class="list-group mb-3" id="checkOutItemList">
        </ul>
    </div>
    <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Datos de facturación</h4>
        <form class="needs-validation" novalidate="">
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div class="col-sm-6">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
                <div class="col-12">
                    <label for="email" class="form-label">Email <span class="text-muted">(Opcional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="correo@dominio.com">
                    <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
                <div class="col-12">
                    <label for="domicilio" class="form-label">Domicilio</label>
                    <input type="text" class="form-control" id="domicilio" placeholder="Ingresar..." required="">
                    <div class="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="mb-3">
                        <fieldset disabled>
                            <label for="'pais'" class="form-label">País</label>
                            <select class="form-select" id="'pais'" required="">
                                <option value="">Argentina</option>
                            </select>
                        </fieldset>
                    </div>
                    <div class="invalid-feedback">
                        Please select a valid 'pais'.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="provincia" class="form-label">Provincia</label>
                    <select class="form-select" id="provincia" required="">
                        <option value="">Ingresar...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please provide a valid provincia.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="codigoPostal" class="form-label">Código Postal</label>
                    <input type="text" class="form-control" id="codigoPostal" placeholder="" required="">
                    <div class="invalid-feedback">
                        Zip code required.
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <h4 class="mb-3">Forma de pago</h4>
            <div class="my-3">
                <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked=""
                        required="">
                    <label class="form-check-label" for="credit">Tarjeta de crédito</label>
                </div>
                <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
                    <label class="form-check-label" for="debit">Tarjeta de débito</label>
                </div>
            </div>
            <div class="row gy-3">
                <div class="col-md-6">
                    <label for="cc-name" class="form-label">Nombre Tarjeta</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                    <small class="text-muted">Como aparece en la tarjeta</small>
                    <div class="invalid-feedback">
                        Name on card is required
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="cc-number" class="form-label">Numero de tarjeta</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                    <div class="invalid-feedback">
                        Credit card number is required
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">Vencimiento</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                    <div class="invalid-feedback">
                        Expiration date required
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">CCV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                    <div class="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <button class="w-100 btn btn-outline-dark btn-lg" id="btnPayment" type="submit">Confirmar pago</button>
        </form>
    </div>
</div>`;
    container.append(newDiv);
    addCheckOutTotal(kbSwitchCart);
    addProvincesDropdown("provincia");
    addCheckOutItems(kbSwitchCart);
    addCheckoutFn();
}

function addCheckOutTotal(array) {
    let totalItems = document.getElementById("checkOutTotalItem");
    totalItems ? (totalItems.innerHTML = `${array.length}`) : console.error("Error");
}

function addCheckOutItems(array) {
    let total = 0;
    let checkOutItemsCnt = document.getElementById("checkOutItemList");
    if (checkOutItemsCnt) {
        array.forEach((element) => {
            let liUnit = document.createElement("li");
            liUnit.className = "list-group-item d-flex justify-content-between lh-sm";
            liUnit.innerHTML = `
                <div>
                    <h6 class="my-0">${element.name}</h6>
                    <small class="text-muted">x ${element.quantity}</small>
                </div>
                <span class="text-muted">$${element.totalPrice}</span>`;
            checkOutItemsCnt.append(liUnit);
            total += element.totalPrice;
        });
        let liTotal = document.createElement("li");
        liTotal.className = "list-group-item d-flex justify-content-between";
        liTotal.innerHTML = `
            <span>Total a pagar</span>
            <strong>$${total}</strong>`;
        checkOutItemsCnt.append(liTotal);
    }
}

function addProvincesDropdown(containerId) {
    let provinceCnt = document.getElementById(containerId);
    
    // const provincesPromise = getProvinces();
    const provincesPromise = getJson("https://apis.datos.gob.ar/georef/api/provincias");;
    provincesPromise.then((promise) => {
        promise.provincias.sort((a, b) => a.id - b.id);
        promise.provincias.forEach((element) => {
            let option = document.createElement("option");
            option.value = element.nombre;
            option.innerHTML = element.nombre;
            provinceCnt.append(option);
        });
    });
}

function addCheckoutFn() {
    addPaymentBtn();
    addCheckInputNum("cc-number", 16);
    addCheckInputNum("cc-expiration", 4);
    addCheckInputNum("cc-cvv", 3);
    addCheckInputNum("codigoPostal", 5);
}

function addCheckInputNum(id, lengthLimit){
    const element = document.getElementById(id);
    element.addEventListener("input", (e) => {
        if (isNaN(e.data) || element.value.length > lengthLimit ){
            element.value = element.value.slice(0, element.value.length - 1);
        }

        element.value.length == lengthLimit ? (element.style.border = "solid #038857") : (element.style.border = "");

    })
}

function addPaymentBtn() {
    let btnPayment = document.getElementById("btnPayment");
    let checked = 0;
    btnPayment.addEventListener("click", (e) => {
        checked = 0;
        e.preventDefault();
        checked += checkInputContent("nombre", 0);
        checked += checkInputContent("apellido", 0);
        checked += checkInputContent("domicilio", 0);
        checked += checkInputContent("provincia", 0);
        checked += checkInputContent("codigoPostal", 0);
        checked += checkInputContent("cc-name", 0);
        checked += checkInputContent("cc-number", 16);
        checked += checkInputContent("cc-expiration", 4);
        checked += checkInputContent("cc-cvv", 3);
        checked == 0 ? finish() : console.error(`${checked} Faltan parámetros`);
    });
}

function finish() {
    localStorage.removeItem("market");
    localStorage.removeItem("cart");
    fillMarketList();
    endNotification();
    console.log("Fin del simulacro, se reinician los valores");
}

function endNotification() {
    let timerInterval;
    Swal.fire({
        title: "Tu compra ha sido realizada!",
        html: "El simulador se reiniciará en <b></b> segundos.",
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            b.textContent = 5;
            timerInterval = setInterval(() => {
                b.textContent--;
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
        emptyElement(mainContainer);
        setHomeContainer(mainContainer);
    });
}

function checkInputContent(id, lengthLimit) {
    let field = document.getElementById(id);
    if (field) {
        field.value.length == 0 ? (field.style.border = "solid indianred") : (field.style.border = "");
    }
    // if (lengthLimit != 0 && lengthLimit < field.value.length ){
    //     field.style.border = "solid indianred"
    // } elseif {
    //     (field.style.border = "")
    // } 

    if (lengthLimit != 0){
        field.value.length < lengthLimit ? (field.style.border = "solid indianred") : (field.style.border = "");
    }  

    if (field.style.border != "") {
        return 1;
    } else {
        return 0;
    }
}
