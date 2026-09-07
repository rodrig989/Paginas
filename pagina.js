const configurarDisenoBase = () => {
    const body = document.body;
    
    // Aplicamos estilos CSS directamente con JS para el modo claro por defecto
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#333333";
    body.style.transition = "background-color 0.4s ease, color 0.4s ease";
    body.style.fontFamily = "system-ui, sans-serif";
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.height = "100vh";
    body.style.margin = "0";
};

// 2. Función principal para alternar el tema de diseño
const alternarModoOscuro = () => {
    const body = document.body;
    const boton = document.querySelector("#btn-tema");

    // Validamos si la página está actualmente en modo claro o modo oscuro
    if (body.style.backgroundColor === "rgb(255, 255, 255)" || body.style.backgroundColor === "#ffffff") {
        // Cambiar a diseño Oscuro
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
        if (boton) {
            boton.textContent = "☀️ Modo Claro";
            boton.style.backgroundColor = "#ffffff";
            boton.style.color = "#121212";
        }
    } else {
        // Cambiar a diseño Claro
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#333333";
        if (boton) {
            boton.textContent = "🌙 Modo Oscuro";
            boton.style.backgroundColor = "#121212";
            boton.style.color = "#ffffff";
        }
    }
};

// 3. Inicializar el diseño cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
    configurarDisenoBase();

    // Buscamos el botón interactivo que el usuario creó en su interfaz
    const botonTema = document.querySelector("#btn-tema");
    
    if (botonTema) {
        // Estilizados el botón puramente desde JavaScript
        botonTema.style.padding = "12px 24px";
        botonTema.style.fontSize = "16px";
        botonTema.style.border = "none";
        botonTema.style.borderRadius = "25px";
        botonTema.style.cursor = "pointer";
        botonTema.style.fontWeight = "bold";
        botonTema.style.transition = "all 0.3s ease";
        botonTema.style.backgroundColor = "#121212";
        botonTema.style.color = "#ffffff";

        // Asignamos el evento de clic para activar el cambio estético
        botonTema.addEventListener("click", alternarModoOscuro);
    }