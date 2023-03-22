let optionSelected = 99;

while (optionSelected != 0) {
    optionSelected = menu();
    execute(optionSelected);

    // alert(optionSelected);
}

alert(`Fin del programa`);
