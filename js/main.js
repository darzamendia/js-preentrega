
window.onload = () => {
    let marketStorage = JSON.parse(localStorage.getItem("market"));
    let cartStorage = JSON.parse(localStorage.getItem("cart"));

    // console.log(kbSwitchMarket);
    fillMarketList();
    // switchDos();
    // console.log(kbSwitchMarket);
    emptyElement(mainContainer);
    setHomeContainer(mainContainer);
};
