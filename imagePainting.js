
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.querySelector('.image-slider2');
    const imageA = document.getElementById('imageAPaint');
    const imageB = document.getElementById('imageBPaint');
    const resetButton = document.createElement('button');
    
    // Configuración del botón de reset
    resetButton.textContent = 'Start painting';
    resetButton.style.display = 'block';
    resetButton.style.marginTop = '10px';
    container.appendChild(resetButton);
    
    // Asegurar que las imágenes están completamente cargadas antes de dibujar
    function initializeCanvas() {
        canvas.width = imageA.naturalWidth;
        canvas.height = imageA.naturalHeight;
        
        // Posicionar el canvas sobre imageA
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = imageA.clientWidth + 'px';
        canvas.style.height = imageA.clientHeight + 'px';
        
        container.appendChild(canvas);
        
        // Dibujar imageA en el canvas para cubrir imageB completamente
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(imageA, 0, 0, canvas.width, canvas.height);
    }
    
    imageA.onload = initializeCanvas;
    
    let isDrawing = false;
    
    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (canvas.width / rect.width),
            y: (e.clientY - rect.top) * (canvas.height / rect.height)
        };
    }
    
    function draw(e) {
        if (!isDrawing) return;
        const pos = getMousePos(e);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 30, 0, Math.PI * 2);
        ctx.fill();
    }
    
    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mousemove', draw);
    document.addEventListener('mouseup', () => isDrawing = false);
    
    resetButton.addEventListener('click', initializeCanvas);
});

/*<div class="image-slider2">
<img src="IMAGENES/ARTWORK/Christmas/0750.png" alt="Project Image B" id="imageBPaint" >
<img src="IMAGENES/ARTWORK/Christmas/0750clay.png" alt="Project Image A" id="imageAPaint">
</div>*/