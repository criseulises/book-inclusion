let currentFontSize = 0; // Tamaño inicial del texto

// Función para ajustar la posición y el tamaño del texto dinámicamente dentro de una imagen
export function adjustTextPosition({ currentPage, textElement, imageElement }) {
    const imageWidth = imageElement.clientWidth; // Ancho actual de la imagen
    const imageHeight = imageElement.clientHeight; // Altura actual de la imagen

    // Calcular posición relativa
    const baseLeft = parseInt(currentPage.position.left);
    const baseTop = parseInt(currentPage.position.top);
    const leftOffset = baseLeft - currentFontSize / 10;
    const topOffset = baseTop - currentFontSize / 20;

    // Limitar el ancho máximo del texto
    const maxWidth = imageWidth * 0.9; // Máximo 90% del ancho de la imagen
    const adjustedWidth = Math.min(parseInt(currentPage.width) + currentFontSize / 5, maxWidth);

    // Asegurar que no salga de los bordes
    textElement.style.left = `${Math.max(leftOffset, 0)}px`;
    textElement.style.top = `${Math.max(topOffset, 0)}px`;
    textElement.style.width = `${adjustedWidth}px`;

    // Ajustar el alto dinámicamente (opcional)
    textElement.style.maxHeight = `${imageHeight * 0.8}px`; // Máximo 80% de la altura de la imagen
    textElement.style.overflowY = "auto"; // Agregar scroll si es necesario
}

// Función para aumentar el tamaño del texto
export function increaseTextSize({ currentPage, textElement }) {
    const baseFontSize = parseInt(currentPage.fontSize); // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize; // Establecer el tamaño actual si no está configurado
    if (currentFontSize < baseFontSize * 2) {
        // Límite máximo basado en el tamaño inicial
        currentFontSize += 2; // Incremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`;
        adjustTextPosition({ currentPage, textElement, imageElement: textElement.parentElement }); // Ajustar posición y tamaño
    }
}

// Función para disminuir el tamaño del texto
export function decreaseTextSize({ currentPage, textElement }) {
    const baseFontSize = parseInt(currentPage.fontSize); // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize; // Establecer el tamaño actual si no está configurado
    if (currentFontSize > baseFontSize / 2) {
        // Límite mínimo basado en el tamaño inicial
        currentFontSize -= 2; // Decremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`;
        adjustTextPosition({ currentPage, textElement, imageElement: textElement.parentElement }); // Ajustar posición y tamaño
    }
}

// Configurar botones de ajuste de texto
export function setupTextAdjustmentButtons({
    increaseTextButton,
    decreaseTextButton,
    currentPage,
    textElement,
}) {
    increaseTextButton.addEventListener("click", () => increaseTextSize({ currentPage, textElement }));
    decreaseTextButton.addEventListener("click", () => decreaseTextSize({ currentPage, textElement }));
}
