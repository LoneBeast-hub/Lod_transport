// variables
let menuToggler = document.querySelector(".toggle-menu");
let navLinks = document.querySelector(".nav-links");
let navigationTab = document.querySelector(".nav");
let sticky = navigationTab.offsetTop;
let whatsappLink = document.querySelector(".footer .fa-whatsapp").parentElement;

// listeners
loadEvents();
function loadEvents() {
    // toggle menu
    menuToggler.addEventListener("click", toggleMenu);
}

// functions
generalFunctions();
function generalFunctions() {
    window.onscroll = () => {
        if(window.pageYOffset > sticky) {
            navigationTab.classList.add("sticky");
        } else {
            navigationTab.classList.remove("sticky");
        }
    }
    whatsappLink.href = `https://wa.me/+234707112578?`;
}
function toggleMenu() {
    if(navLinks.style.width === "40%") {
        navLinks.style.width = "0";
        menuToggler.style.right = "5px";
    } else {
        navLinks.style.width = "40%";
        menuToggler.style.right = "42%"
    }
}