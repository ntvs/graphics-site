//References
let header = document.getElementById("header");
let navMenu = document.getElementById("navMenu");
let navOpen = document.getElementById("navOpen");
let navClose = document.getElementById("navClose");

//State
let menuOpen = false;


//Event listeners

//Change navbar background
// document.addEventListener("scroll", (event) => {
//     if (window.scrollY > 0) {
//         header.classList.add("solidBG");
//     } else {
//         header.classList.remove("solidBG");
//     }
// });

//Show and hide navigation modal
navOpen.addEventListener("click", showNavMenu);
navClose.addEventListener("click", hideNavMenu);
//navOpen.addEventListener("touchend", showNavMenu);
//navClose.addEventListener("touchend", hideNavMenu);

function showNavMenu() {
    //console.log("clicked", menuOpen);
    if (menuOpen) {
        hideNavMenu();
    } else {
        navMenu.classList.remove("invisible");
        //navMenu.classList.remove("no-opacity");
        menuOpen = true;
    }
}

function hideNavMenu() {
    //navMenu.classList.add("no-opacity");
    navMenu.classList.add("invisible");
    menuOpen = false;
}