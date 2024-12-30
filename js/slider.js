import pages from "./data/pagesData.js"
import activities from "./data/activitiesData.js"

const bookOrder = []
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
let currentIndex = 0
let isPaused = false // Estado para rastrear si la lectura está pausada
let currentFontSize = 0 // Tamaño inicial del texto
let activityMode = false
let currentActivityIndex = 0

const imageElement = document.getElementById("current-page")
const imageWrapper = document.getElementById("image-wrapper")
const textElement = document.getElementById("page-text")
const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button")
const speakTextButton = document.getElementById("speak-text-button")
const pauseTextButton = document.getElementById("pause-text-button")
const increaseTextButton = document.getElementById("increase-text-button")
const decreaseTextButton = document.getElementById("decrease-text-button")
const signLanguageButton = document.getElementById("sign-language-button")
const videoSource = document.getElementById("video-source")
const videoModal = document.getElementById("sign-language-modal")
const videoElement = document.getElementById("sign-language-video")
const closeVideoButton = document.getElementById("close-video-button")
// Función para actualizar el contenido dinámico
function updateContent() {
    // Detener cualquier lectura en curso antes de actualizar
    responsiveVoice.cancel()
    isPaused = false // Reiniciar el estado de pausa

    if (bookOrder[currentIndex] == "page") {
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

// Función para leer el texto usando ResponsiveVoice.js
function speakText() {
    const currentPage = pages[currentIndex]
    if (currentPage.text) {
        responsiveVoice.cancel() // Asegurarse de detener cualquier lectura en curso
        responsiveVoice.speak(currentPage.text, "Spanish Latin American Female")
        isPaused = false // Reiniciar el estado de pausa
    } else {
        console.warn("No hay texto para leer.")
    }
}

// Función para pausar o reanudar la lectura
function togglePauseText() {
    if (isPaused) {
        responsiveVoice.resume()
        isPaused = false
    } else {
        responsiveVoice.pause()
        isPaused = true
    }
}

// Función para aumentar el tamaño del texto
// Función para aumentar el tamaño del texto

// Navegación entre páginas
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        activityMode = false
        currentIndex--
        currentActivityIndex = 0
        updateContent() // Detiene la lectura y actualiza contenido
    }
})

nextButton.addEventListener("click", () => {
    if (currentIndex < bookOrder.length - 1) {
        currentIndex++
        currentActivityIndex = 0
        updateContent() // Detiene la lectura y actualiza contenido
    }
})

// Manejo de botones
speakTextButton.addEventListener("click", speakText)
pauseTextButton.addEventListener("click", togglePauseText)
increaseTextButton.addEventListener("click", increaseTextSize)
decreaseTextButton.addEventListener("click", decreaseTextSize)

// Inicializar contenido al cargar
updateContent()

// Ajustar posición y tamaño del texto para que permanezca dentro de la imagen
function adjustTextPosition() {
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
function increaseTextSize() {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize) // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize // Establecer el tamaño actual si no está configurado
    if (currentFontSize < baseFontSize * 2) {
        // Límite máximo basado en el tamaño inicial
        currentFontSize += 2 // Incremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition() // Ajustar posición y tamaño
    }
}

// Función para disminuir el tamaño del texto
function decreaseTextSize() {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize) // Tamaño base inicial
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize // Establecer el tamaño actual si no está configurado
    if (currentFontSize > baseFontSize / 2) {
        // Límite mínimo basado en el tamaño inicial
        currentFontSize -= 2 // Decremento proporcional
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition() // Ajustar posición y tamaño
    }
}
let scaleLevel = 1 // Nivel inicial de escala
const zoomStep = 0.1 // Incremento/decremento por paso
const minScale = 0.5 // Zoom mínimo permitido
const maxScale = 2 // Zoom máximo permitido

// Elemento que será escalado (todo el contenido de la página)
const mainContainer = document.documentElement // Escalar el HTML completo

// Botones
const zoomInButton = document.getElementById("zoom-in-button")
const zoomOutButton = document.getElementById("zoom-out-button")

// Función para aumentar el zoom
function zoomIn() {
    if (scaleLevel < maxScale) {
        scaleLevel += zoomStep
        applyZoom()
    }
}

// Función para reducir el zoom
function zoomOut() {
    if (scaleLevel > minScale) {
        scaleLevel -= zoomStep
        applyZoom()
    }
}

// Función para aplicar el zoom
function applyZoom() {
    mainContainer.style.transform = `scale(${scaleLevel})`
    mainContainer.style.transformOrigin = "center top" // Establecer origen del escalado
}

// Eventos para los botones
zoomInButton.addEventListener("click", zoomIn)
zoomOutButton.addEventListener("click", zoomOut)

function playSignLanguageVideo() {
    const currentPage = pages[currentIndex]
    console.log(currentPage)

    if (currentPage.signLanguageVideo) {
        videoSource.src = currentPage.signLanguageVideo
        videoElement.load() // Recargar el video
        videoModal.style.display = "flex" // Mostrar el modal
    } else {
        console.warn("No hay video de lenguaje de señas disponible para esta página.")
    }
}

signLanguageButton.addEventListener("click", playSignLanguageVideo)
function closeSignLanguageVideo() {
    videoElement.pause() // Pausar el video
    videoModal.style.display = "none" // Ocultar el modal
}
closeVideoButton.addEventListener("click", closeSignLanguageVideo)

function activityModeFunction() {}

function createElement() {
    console.log(bookOrder[currentIndex])

    if (bookOrder[currentIndex] == "image_selection") {
        createImageSelectionActivity()
    }
}

function createImageSelectionActivity() {
    const imageSelection = activities
        .flat() // Flattens the array of arrays into a single-level array
        .filter((activity) => activity.type === "image_selection")

    if (currentActivityIndex < imageSelection.length) {
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        navigateActivity(imageSelection[currentActivityIndex])
        currentActivityIndex++
    }
}

function navigateActivity(activity) {
    // Create the main activity container
    const activityContainer = document.createElement("div")
    activityContainer.style.display = "flex"
    activityContainer.style.flexDirection = "column"
    activityContainer.style.alignItems = "center"
    activityContainer.style.padding = "20px"
    activityContainer.style.backgroundColor = "#ffffff"
    activityContainer.style.borderRadius = "10px"
    activityContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"
    activityContainer.style.width = "100%"
    activityContainer.style.maxWidth = "900px"
    activityContainer.style.margin = "auto"
    activityContainer.id = "activity-container"

    // Create the instruction text
    const instructionText = document.createElement("h2")
    instructionText.innerText = activity.text //'Selecciona la imagen que corresponda a la palabra "casa".'
    instructionText.style.fontSize = "24px"
    instructionText.style.color = "#333"
    instructionText.style.textAlign = "center"
    instructionText.style.marginBottom = "20px"
    activityContainer.appendChild(instructionText)

    // Create the word container
    const wordContainer = document.createElement("div")
    wordContainer.style.border = "2px solid orange"
    wordContainer.style.borderRadius = "8px"
    wordContainer.style.padding = "10px 20px"
    wordContainer.style.marginBottom = "20px"
    wordContainer.style.display = "inline-block"

    const wordText = document.createElement("span")
    wordText.innerText = activity.word
    wordText.style.fontSize = "28px"
    wordText.style.fontWeight = "bold"
    wordText.style.color = "#333"
    wordContainer.appendChild(wordText)

    activityContainer.appendChild(wordContainer)

    // Create the images container
    const imagesContainer = document.createElement("div")
    imagesContainer.style.display = "grid"
    imagesContainer.style.gridTemplateColumns = "repeat(3, 1fr)"
    imagesContainer.style.gap = "20px"
    imagesContainer.style.marginBottom = "20px"

    const correctAnswer = activity.word

    // Add images and radio buttons
    activity.images.forEach((img) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.style.display = "flex"
        imageWrapper.style.flexDirection = "column"
        imageWrapper.style.alignItems = "center"

        const image = document.createElement("img")
        image.src = img.src
        image.alt = img.alt
        image.style.width = "120px"
        image.style.height = "120px"
        image.style.borderRadius = "8px"
        image.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"
        image.style.cursor = "pointer"

        const radioButton = document.createElement("input")
        radioButton.type = "radio"
        radioButton.name = "activity"
        radioButton.value = img.alt
        radioButton.style.marginTop = "10px"
        radioButton.style.accentColor = "#4CAF50" // Style the radio button
        radioButton.style.width = "20px"
        radioButton.style.height = "20px"

        // Add click event to image to select the corresponding radio button
        image.addEventListener("click", () => {
            radioButton.checked = true

            if (radioButton.value === correctAnswer) {
                instructionText.innerText = "¡Muy bien!"
                instructionText.style.color = "green"
            } else {
                instructionText.innerText = "Intenta de nuevo"
                instructionText.style.color = "red"
            }
        })

        // Event listener to handle selection and feedback for the radio button
        radioButton.addEventListener("change", () => {
            if (radioButton.value === correctAnswer) {
                instructionText.innerText = "¡Muy bien!"
                instructionText.style.color = "green"
            } else {
                instructionText.innerText = "Intenta de nuevo"
                instructionText.style.color = "red"
            }
        })

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(radioButton)
        imagesContainer.appendChild(imageWrapper)
    })

    activityContainer.appendChild(imagesContainer)

    // Create the buttons container
    const buttonsContainer = document.createElement("div")
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.justifyContent = "space-between"
    buttonsContainer.style.marginTop = "20px"
    buttonsContainer.style.width = "100%"

    // Create the "Salir" button
    const exitButton = document.createElement("button")
    exitButton.innerText = "Salir"
    exitButton.style.backgroundColor = "#e74c3c"
    exitButton.style.color = "white"
    exitButton.style.border = "none"
    exitButton.style.borderRadius = "8px"
    exitButton.style.padding = "10px 20px"
    exitButton.style.fontSize = "16px"
    exitButton.style.cursor = "pointer"

    exitButton.addEventListener("click", () => {
        // Logic to go back to the start of the book
        currentIndex = 0
        updateContent()
    })

    buttonsContainer.appendChild(exitButton)

    // Create the "Reintentar" button
    const retryButton = document.createElement("button")
    retryButton.innerText = "Reintentar"
    retryButton.style.backgroundColor = "#f39c12"
    retryButton.style.color = "white"
    retryButton.style.border = "none"
    retryButton.style.borderRadius = "8px"
    retryButton.style.padding = "10px 20px"
    retryButton.style.fontSize = "16px"
    retryButton.style.cursor = "pointer"

    retryButton.addEventListener("click", () => {
        // Logic to recreate the activity
        imageWrapper.innerHTML = ""
        createActivity() // Assuming `createActivity` encapsulates this logic
    })

    buttonsContainer.appendChild(retryButton)

    // Create the "Continuar" button
    const continueButton = document.createElement("button")
    continueButton.innerText = "Continuar"
    continueButton.style.backgroundColor = "#27ae60"
    continueButton.style.color = "white"
    continueButton.style.border = "none"
    continueButton.style.borderRadius = "8px"
    continueButton.style.padding = "10px 20px"
    continueButton.style.fontSize = "16px"
    continueButton.style.cursor = "pointer"

    continueButton.addEventListener("click", () => {
        // Logic to go to the next activity
        // currentActivityIndex++
        loadNextActivity() // Assuming `loadNextActivity` handles loading the next activity
    })

    buttonsContainer.appendChild(continueButton)

    activityContainer.appendChild(buttonsContainer)

    // Append the activity container to the main wrapper
    imageWrapper.appendChild(activityContainer)
}

function loadNextActivity() {
    createImageSelectionActivity()
}
