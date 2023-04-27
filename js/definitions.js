const logos = [];
let kbSwitchMarket = [];
let kbSwitchCart = [];

let mainContainer = document.getElementById("mainContainer");

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
    // btnAddSwitch.style.background = "#B6A4FE";
    // btnAddSwitch.style.border = "#B6A4FE";
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
    // btnAddSwitch.style.background = "#FF6262";
    // btnAddSwitch.style.border = "#FF6262";
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
    // btnAddSwitch.style.background = "#7DBF91";
    // btnAddSwitch.style.border = "#7DBF91";
});

// new
btnNavHome.addEventListener("click", (e) => {
    e.preventDefault();
    emptyElement(mainContainer);
    setHomeContainer(mainContainer);
});

btnNavMarket.addEventListener("click", (e) => {
    e.preventDefault();
    emptyElement(mainContainer);
    fillMarketList();
    setMarketContainer(kbSwitchMarket, mainContainer);
});

btnNavCart.addEventListener("click", (e) => {
    e.preventDefault();
    emptyElement(mainContainer);
    fillCartList();
    setCartContainer(kbSwitchCart, mainContainer);
    if (kbSwitchCart.length != 0) {
        addInitBuyBtn(mainContainer);
    } else {
        emptyCartImg(mainContainer, "./img/emptycart.svg");
    }
});

function setHomeContainer(container) {
    let homeContainer = document.createElement("div");
    homeContainer.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./img/logo-lavander.svg" class="rounded mx-auto d-block carruselImage" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/logo-red.svg" class="rounded mx-auto d-block carruselImage" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./img/logo-green.svg" class="rounded mx-auto d-block carruselImage" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`;
    container.append(homeContainer);
}

function emptyCartImg(container, imageUrl) {
    let divImgCnt = document.createElement("div");
    divImgCnt.className = "text-center";
    divImgCnt.innerHTML = `
        <img src="${imageUrl}" class="rounded mx-auto d-block emptyCartImg" alt="Carrito vacío">
        <h1 class="display-5 fw-bold">El carrito está vacío</h1>
        <p class="fs-5 mb-4">En nuestra tienda encontrarás los switches disponibles!</p>`;
    container.append(divImgCnt);
}

function emptyElement(element) {
    element.innerHTML = "";
}
