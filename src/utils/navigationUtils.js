import pages from "./data/pagesData.js"
import activities from "./data/activitiesData.js"

export const bookOrder = []
for (let i = 0; i < pages.length; i++) {
    bookOrder.push("page")
}
for (let i = 0; i < activities.length; i++) {
    for (let j = 0; j < activities[i].length; j++) {
        if (!bookOrder.includes(activities[i][j].type)) {
            bookOrder.push(activities[i][j].type)
        }
    }
}

export let currentIndex = 0
export let currentActivityIndex = 0
export let activityMode = false
let isPaused = false // Estado para rastrear si la lectura está pausada
let currentFontSize = 0 // Tamaño inicial del texto

// Función para actualizar contenido dinámico
export function updateContent({ imageElement, imageWrapper, textElement, createElement, responsiveVoice }) {
    // Detener cualquier lectura en curso antes de actualizar
    responsiveVoice.cancel()
    isPaused = false // Reiniciar el estado de pausa

    if (bookOrder[currentIndex] === "page") {
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        imageElement.style.display = "block"
        const currentPage = pages[currentIndex]
        imageElement.src = currentPage.src

        if (currentPage.text) {
            textElement.textContent = currentPage.text
            textElement.style.display = "block"

            const isMobile = window.matchMedia("(max-width: 768px)").matches
            if (!isMobile) {
                textElement.style.position = "absolute"
                textElement.style.top = currentPage.position.top
                textElement.style.left = currentPage.position.left
                textElement.style.fontSize = currentFontSize === 0 ? `${currentPage.fontSize}px` : `${currentFontSize}px`
                textElement.style.width = currentPage.width
                textElement.style.fontFamily = currentPage.fontFamily
                textElement.style.fontWeight = "bold"
            } else {
                textElement.style.position = "static"
                textElement.style.fontSize = "16px"
                textElement.style.width = "100%"
                textElement.style.textAlign = "center"
            }

            textElement.style.fontFamily = currentPage.fontFamily
        } else {
            textElement.style.display = "none"
        }
    } else {
        textElement.style.display = "none"
        imageElement.style.display = "none"
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        createElement()
    }
}

// Navegación entre páginas
export function goToPreviousPage({ updateContentCallback }) {
    if (currentIndex > 0) {
        activityMode = false
        currentIndex--
        currentActivityIndex = 0
        updateContentCallback() // Actualiza el contenido y detiene la lectura
    }
}

export function goToNextPage({ updateContentCallback }) {
    if (currentIndex < bookOrder.length - 1) {
        currentIndex++
        currentActivityIndex = 0
        updateContentCallback() // Actualiza el contenido y detiene la lectura
    }
}

// Ajustar posición y tamaño del texto para que permanezca dentro de la imagen
export function adjustTextPosition({ imageElement, textElement, currentFontSize }) {
    const currentPage = pages[currentIndex]
    const imageWidth = imageElement.clientWidth // Ancho actual de la imagen
    const imageHeight = imageElement.clientHeight // Altura actual de la imagen

    // Calcular posición relativa
    const baseLeft = parseInt(currentPage.position.left)
    const baseTop = parseInt(currentPage.position.top)
    const leftOffset = baseLeft - currentFontSize / 10
    const topOffset = baseTop - currentFontSize / 20

    // Limitar el ancho máximo del texto
    const maxWidth = imageWidth * 0.9 // Máximo 90% del ancho de la imagen
    const adjustedWidth = Math.min(parseInt(currentPage.width) + currentFontSize / 5, maxWidth)

    // Asegurar que no salga de los bordes
    textElement.style.left = `${Math.max(leftOffset, 0)}px`
    textElement.style.top = `${Math.max(topOffset, 0)}px`
    textElement.style.width = `${adjustedWidth}px`

    // Ajustar el alto dinámicamente (opcional)
    textElement.style.maxHeight = `${imageHeight * 0.8}px` // Máximo 80% de la altura de la imagen
    textElement.style.overflowY = "auto" // Agregar scroll si es necesario
}

// Función para aumentar el tamaño del texto
export function increaseTextSize({ textElement }) {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize) // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize // Establecer el tamaño actual si no está configurado
    if (currentFontSize < baseFontSize * 2) {
        // Límite máximo basado en el tamaño inicial
        currentFontSize += 2 // Incremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition({ imageElement, textElement, currentFontSize }) // Ajustar posición y tamaño
    }
}

// Función para disminuir el tamaño del texto
export function decreaseTextSize({ textElement }) {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize) // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize // Establecer el tamaño actual si no está configurado
    if (currentFontSize > baseFontSize / 2) {
        // Límite mínimo basado en el tamaño inicial
        currentFontSize -= 2 // Decremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition({ imageElement, textElement, currentFontSize }) // Ajustar posición y tamaño
    }
}
