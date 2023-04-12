window.onload = () => {
    let usuarioStorage = JSON.parse(localStorage.getItem("reviewSwitches"));
    if (usuarioStorage) {
        for (const element of usuarioStorage) {
            kbSwitchReviews.push(element);
            createCard(usuarioStorage, cardContainer);
        }
    }
};
