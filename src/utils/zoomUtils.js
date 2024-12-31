let scaleLevel = 1; // Nivel inicial de escala
const zoomStep = 0.1; // Incremento o decremento por paso
const minScale = 0.5; // Zoom mínimo permitido
const maxScale = 2; // Zoom máximo permitido

// Función para aumentar el zoom
export function zoomIn(mainContainer) {
    if (scaleLevel < maxScale) {
        scaleLevel += zoomStep;
        applyZoom(mainContainer);
    }
}

// Función para reducir el zoom
export function zoomOut(mainContainer) {
    if (scaleLevel > minScale) {
        scaleLevel -= zoomStep;
        applyZoom(mainContainer);
    }
}

// Función para aplicar el nivel de zoom actual
export function applyZoom(mainContainer) {
    mainContainer.style.transform = `scale(${scaleLevel})`;
    mainContainer.style.transformOrigin = "center top"; // Establecer el origen del escalado
}

// Configurar botones de ajuste de zoom
export function setupZoomButtons({ zoomInButton, zoomOutButton, mainContainer }) {
    zoomInButton.addEventListener("click", () => zoomIn(mainContainer));
    zoomOutButton.addEventListener("click", () => zoomOut(mainContainer));
}
