document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".accordion-icon");

            // Verificar si el contenido está activo
            if (content.style.maxHeight) {
                // Cerrar el acordeón
                content.style.maxHeight = null;
                icon.textContent = "+"; // Cambia el ícono a '+'
            } else {
                // Abrir el acordeón
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = "-"; // Cambia el ícono a '-'
            }
        });
    });
});