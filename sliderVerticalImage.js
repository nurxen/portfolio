document.addEventListener('DOMContentLoaded', function () {
    const sliderBar = document.getElementById('sliderBar');
    const imageA = document.getElementById('imageASliderVertical');
    const imageB = document.getElementById('imageBSliderVertical');
    const sliderContainer = document.querySelector('.slider-container');

    let isDragging = false;
    let startX;

    sliderBar.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX;
        document.body.style.userSelect = 'none';  // Deshabilitar selección de texto
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            const moveX = e.clientX - startX;
            let newLeft = sliderBar.offsetLeft + moveX;
            const containerWidth = sliderContainer.offsetWidth;

            // Restringir la barra dentro del contenedor
            if (newLeft >= 0 && newLeft <= containerWidth) {
                sliderBar.style.left = newLeft + 'px';
                // Actualizamos el clip-path de las imágenes
                imageA.style.clipPath = `inset(0 ${containerWidth - newLeft}px 0 0)`;
                imageB.style.clipPath = `inset(0 0 0 ${newLeft}px)`;
            }

            startX = e.clientX;
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
        document.body.style.userSelect = 'auto';  // Restaurar selección de texto
    });
});

/* <!-- Contenedor para la barra deslizante -->
<div class="image-slider">
    <div class="slider-container">
        <img src="IMAGENES/ARTWORK/Christmas/0750clay.png" alt="Project Image A" class="imageSliderVertical" id="imageASliderVertical">
        <img src="IMAGENES/ARTWORK/Christmas/0750.png" alt="Project Image B" class="imageSliderVertical" id="imageBSliderVertical">
        <div class="slider-bar" id="sliderBar"></div>
    </div>
</div> */