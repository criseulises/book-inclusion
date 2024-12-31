export function updateContent(pages, currentIndex, bookOrder, imageElement, textElement, imageWrapper, createElement, responsiveVoice, currentFontSize) {
    // Detener cualquier lectura en curso antes de actualizar
    responsiveVoice.cancel()
    let isPaused = false // Reiniciar el estado de pausa

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

export function adjustTextPosition(pages, currentIndex, imageElement, textElement, currentFontSize) {
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

export function increaseTextSize(pages, currentIndex, textElement, currentFontSize, adjustTextPosition) {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize) // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize // Establecer el tamaño actual si no está configurado

    if (currentFontSize < baseFontSize * 2) {
        // Límite máximo basado en el tamaño inicial
        currentFontSize += 2 // Incremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition(pages, currentIndex, textElement, currentFontSize) // Ajustar posición y tamaño
    }
}

export function decreaseTextSize(pages, currentIndex, textElement, currentFontSize, adjustTextPosition) {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize) // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize // Establecer el tamaño actual si no está configurado

    if (currentFontSize > baseFontSize / 2) {
        // Límite mínimo basado en el tamaño inicial
        currentFontSize -= 2 // Decremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition(pages, currentIndex, textElement, currentFontSize) // Ajustar posición y tamaño
    }
}

export function playSignLanguageVideo(currentPage, videoSource, videoElement, videoModal) {
    if (currentPage.signLanguageVideo) {
        insertSignLanguageVideo(currentPage.signLanguageVideo, videoSource, videoElement, videoModal)
    } else {
        console.warn("No hay video de lenguaje de señas disponible para esta página.")
    }
}

export function insertSignLanguageVideo(signLanguageVideo, videoSource, videoElement, videoModal) {
    videoSource.src = signLanguageVideo
    videoElement.load() // Recargar el video
    videoModal.style.display = "flex" // Mostrar el modal
}

export function closeSignLanguageVideo(videoElement, videoModal) {
    videoElement.pause() // Pausar el video
    videoModal.style.display = "none" // Ocultar el modal
}
