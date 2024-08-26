window.onscroll = function() {
    const navbar = document.querySelector(".navcont"); // Seleciona a navbar pela classe
    if (window.scrollY > 100) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
};
