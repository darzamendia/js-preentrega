function fillCartList() {
    kbSwitchCart = [];
    console.log(kbSwitchCart);
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
        });
    });
}

function updateCartList(array, container) {
    addCartCard(array, container);
    addCartCardBtnDelete(array);
}

function addCheckOut(container) {
    console.log("Agregar checkout");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Tu carrito</span>
                        <span class="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Product name</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Second product</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$8</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Third item</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Billing address</h4>
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
                                <input type="text" class="form-control" id="apellido" placeholder="" value=""
                                    required="">
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="email" class="form-label">Email <span
                                        class="text-muted">(Opcional)</span></label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="domicilio" class="form-label">Domicilio</label>
                                <input type="text" class="form-control" id="domicilio" placeholder="1234 Main St"
                                    required="">
                                <div class="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>
                            <div class="col-md-5">
                                <label for="'pais'" class="form-label">País</label>
                                <select class="form-select" id="'pais'" required="">
                                    <option value="">Ingresar...</option>
                                    <option>United States</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid 'pais'.
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="provincia" class="form-label">Provincia</label>
                                <select class="form-select" id="provincia" required="">
                                    <option value="">Ingresar...</option>
                                    <option>California</option>
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
                                <input id="debit" name="paymentMethod" type="radio" class="form-check-input"
                                    required="">
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
                        <button class="w-100 btn btn-outline-dark btn-lg" type="submit">Confirmar pago</button>
                    </form>
                </div>
            </div>`;
    container.append(newDiv);
    addCheckoutFn();
}

function addCheckoutFn() {}
