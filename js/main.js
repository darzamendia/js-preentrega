window.onload = () => {
    let marketStorage = JSON.parse(localStorage.getItem("market"));
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    fillMarketList();
    emptyElement(mainContainer);
    setHomeContainer(mainContainer);
};
