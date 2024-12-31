let isPaused = false // Estado para rastrear si la lectura está pausada

// Función para leer el texto usando ResponsiveVoice.js
export function speakText(text, language = "Spanish Latin American Female") {
    if (responsiveVoice) {
        responsiveVoice.speak(text, language)
    } else {
        console.error("ResponsiveVoice no está disponible.")
    }
}

// Función para insertar y leer texto de la página actual
export function insertTextToSpeak({ currentPage, responsiveVoice }) {
    if (currentPage.text) {
        responsiveVoice.cancel() // Asegurarse de detener cualquier lectura en curso
        speakText(currentPage.text)
        isPaused = false // Reiniciar el estado de pausa
    } else {
        console.warn("No hay texto para leer.")
    }
}

// Función para pausar o reanudar la lectura
export function togglePauseText() {
    if (isPaused) {
        responsiveVoice.resume()
        isPaused = false
    } else {
        responsiveVoice.pause()
        isPaused = true
    }
}

// Función para detener la lectura
export function stopReading() {
    responsiveVoice.cancel()
    isPaused = false
}

// Inicialización de botones relacionados con ResponsiveVoice
export function setupResponsiveVoiceButtons({ speakTextButton, pauseTextButton, insertTextCallback, togglePauseCallback }) {
    speakTextButton.addEventListener("click", insertTextCallback)
    pauseTextButton.addEventListener("click", togglePauseCallback)
}
