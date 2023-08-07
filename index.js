const elements = document.querySelector(".elements");
const element = document.querySelector(".elements li");
const arrows = document.querySelectorAll(".arrows i");

arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const width = element.clientWidth;
        const scrollLeft = elements.scrollLeft; // Obtener la posición actual del scroll

        if (arrow.id === "right") {
            elements.scrollTo({
                left: scrollLeft + width + 25,
                behavior: "smooth"
            });
        } else {
            elements.scrollTo({
                left: scrollLeft - width - 25,
                behavior: "smooth"
            });
        }
    });
});








