/* nav */

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelecter("container");

hamburger_menu.addEventListener("click", () => {
        container.classList.toggle("active");
})