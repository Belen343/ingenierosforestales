const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    sliderItems.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });
    sliderItems[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}

// Inicializa el slider
showSlide(currentIndex);

// Configura el intervalo para cambiar de slide automáticamente cada 8 segundos (8000 ms)
slideInterval = setInterval(nextSlide, 8000);

// Asigna eventos a los dots para que se pueda seleccionar un slide manualmente
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(currentIndex);
        
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 8000);
    });
});
