function toggleBurger() {
    let burgerPopup = document.getElementById("burger-menu-popup");
    if (burgerPopup.style.visibility == "hidden") {
        burgerPopup.style.visibility = "visible"
    } else {
        burgerPopup.style.visibility = "hidden";
    }
};
