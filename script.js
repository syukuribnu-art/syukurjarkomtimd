// ================================
// MOBILE NAVIGATION
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Menutup menu setelah memilih menu
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// ================================
// TAHUN FOOTER OTOMATIS
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});