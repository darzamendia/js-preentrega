window.onload = () => {
    let usuarioStorage = JSON.parse(localStorage.getItem("reviewSwitches"));
    let marketStorage = JSON.parse(localStorage.getItem("market"));
    let cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (usuarioStorage) {
        for (const element of usuarioStorage) {
            kbSwitchReviews.push(element);
            // createCard(usuarioStorage, cardContainer);
        }
    }
    emptyElement(mainContainer);
    setHomeContainer(mainContainer);

    // // put this right in your main.js file:
    // var toast = new Toasty();

    // // this show an informational message:
    // toast.info("Here is some information!");

    // Swal.fire({
    //     title: "Genial!",
    // });
};
