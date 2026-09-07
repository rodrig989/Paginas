
document.addEventListener("DOMContentLoaded", () => {
    
    const miCarruselElemento = document.querySelector('#carouselExampleCaptions');

    if (miCarruselElemento) {
       
        const carrusel = new bootstrap.Carousel(miCarruselElemento, {
            interval: 4000,   
            wrap: true,        
            pause: 'hover'    

        
        
            console.log(`Cambiando a la sección de diseño index: ${evento.to}`);
        });
    }
});