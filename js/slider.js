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
function speakText(text) {
    responsiveVoice.speak(text, "Spanish Latin American Female")
}

function insertTextToSpeak() {
    const currentPage = pages[currentIndex]
    if (currentPage.text) {
        responsiveVoice.cancel() // Asegurarse de detener cualquier lectura en curso
        speakText(currentPage.text)
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
speakTextButton.addEventListener("click", insertTextToSpeak)
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
        insertSignLanguageVideo(currentPage.signLanguageVideo)
    } else {
        console.warn("No hay video de lenguaje de señas disponible para esta página.")
    }
}

function insertSignLanguageVideo(signLanguageVideo) {
    videoSource.src = signLanguageVideo
    videoElement.load() // Recargar el video
    videoModal.style.display = "flex" // Mostrar el modal
}

signLanguageButton.addEventListener("click", playSignLanguageVideo)
function closeSignLanguageVideo() {
    videoElement.pause() // Pausar el video
    videoModal.style.display = "none" // Ocultar el modal
}
closeVideoButton.addEventListener("click", closeSignLanguageVideo)

function createElement() {
    console.log(bookOrder[currentIndex])

    if (bookOrder[currentIndex] == "image_selection") {
        createImageSelectionActivity()
    } else {
        createVowelSelectionActivity()
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

    // Create the main layout container
    const layoutContainer = document.createElement("div")
    layoutContainer.style.display = "flex"
    layoutContainer.style.justifyContent = "space-between"
    layoutContainer.style.alignItems = "center"
    layoutContainer.style.width = "100%"
    layoutContainer.style.marginBottom = "20px"

    // Create the word container (left side)
    const wordContainer = document.createElement("div")
    wordContainer.style.marginRight = "20px" // Spacing between word and images
    wordContainer.style.width = "40%"
    wordContainer.style.textAlign = "center"

    const wordText = document.createElement("span")
    wordText.style.border = "2px solid orange"
    wordText.style.padding = "10px 20px"
    wordText.style.borderRadius = "8px"
    wordText.innerText = activity.word
    wordText.style.fontSize = "28px"
    wordText.style.fontWeight = "bold"
    wordText.style.color = "#333"
    wordContainer.appendChild(wordText)

    // Add a video element below the wordText
    const videoContainer = document.createElement("div")
    videoContainer.style.marginTop = "20px"
    videoContainer.style.textAlign = "center"

    // Create the video element
    const videoElement = document.createElement("video")
    videoElement.controls = false
    videoElement.style.width = "100%"
    videoElement.style.maxWidth = "400px"
    videoElement.style.borderRadius = "10px"
    videoElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"
    videoElement.src = "../assets/videos/palabra_hombre.mp4" // Replace with the downloadable link from Google Drive
    videoElement.style.display = "none"
    videoElement.id = "sign-language-video-activity"
    videoElement.muted = true

    // Add the word container to the layout container
    layoutContainer.appendChild(wordContainer)
    videoContainer.appendChild(videoElement)
    wordContainer.appendChild(videoContainer)

    // Create the images container (right side)
    const imagesContainer = document.createElement("div")
    imagesContainer.style.display = "grid"
    imagesContainer.style.gridTemplateColumns = "repeat(3, 1fr)"
    imagesContainer.style.gap = "20px"
    imagesContainer.style.width = "60%"

    // Add images and radio buttons
    activity.images.forEach((img) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.style.display = "flex"
        imageWrapper.style.flexDirection = "column"
        imageWrapper.style.alignItems = "center"

        const image = document.createElement("img")
        image.src = img.src
        image.alt = img.alt
        image.style.width = "100px"
        image.style.height = "100px"
        image.style.borderRadius = "8px"
        image.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"
        image.style.cursor = "pointer"

        const radioButton = document.createElement("input")
        radioButton.type = "radio"
        radioButton.name = "activity"
        radioButton.value = img.alt
        radioButton.style.marginTop = "10px"

        // Add click event to image to select the corresponding radio button
        image.addEventListener("click", () => {
            radioButton.checked = true
            speakText(radioButton.value)
            // Set feedback text and audio
            setTimeout(() => {
                const audio = new Audio()
                if (radioButton.value === activity.word) {
                    instructionText.innerText = "¡Muy bien!"
                    instructionText.style.color = "green"
                    audio.src = "../assets/audios/muy_bien.wav" // Correct answer audio
                } else {
                    instructionText.innerText = "Intenta de nuevo"
                    instructionText.style.color = "red"
                    audio.src = "../assets/audios/intenta_de_nuevo.wav" // Incorrect answer audio
                }
                audio.play()
            }, 1000)
        })

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(radioButton)
        imagesContainer.appendChild(imageWrapper)
    })

    // Add the images container to the layout container
    layoutContainer.appendChild(imagesContainer)

    // Add the layout container to the activity container
    activityContainer.appendChild(layoutContainer)

    // Create a container for all the buttons and sign language video
    const bottomContainer = document.createElement("div")
    bottomContainer.style.display = "flex"
    bottomContainer.style.justifyContent = "space-between"
    bottomContainer.style.alignItems = "center"
    bottomContainer.style.marginTop = "20px"
    bottomContainer.style.width = "100%"

    // Left container for action buttons
    const buttonsContainer = document.createElement("div")
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"

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
        loadNextActivity() // Assuming `loadNextActivity` handles loading the next activity
    })
    buttonsContainer.appendChild(continueButton)

    // Add the buttons container to the left of the bottom container
    bottomContainer.appendChild(buttonsContainer)

    // Right container for the "Sign Language" button and video controls
    const signLanguageContainer = document.createElement("div")
    signLanguageContainer.style.display = "flex"
    signLanguageContainer.style.flexDirection = "column"
    signLanguageContainer.style.alignItems = "flex-end"
    signLanguageContainer.style.gap = "10px"

    // Create the "Sign Language" button
    const signLanguageButton = document.createElement("button")
    signLanguageButton.innerText = "Lenguaje de Señas"
    signLanguageButton.style.backgroundColor = "#3498db"
    signLanguageButton.style.color = "white"
    signLanguageButton.style.border = "none"
    signLanguageButton.style.borderRadius = "8px"
    signLanguageButton.style.padding = "10px 20px"
    signLanguageButton.style.fontSize = "16px"
    signLanguageButton.style.cursor = "pointer"

    let isVideoVisible = false // State to toggle video visibility
    // const signLanguageVideo = document.createElement("video");
    // signLanguageVideo.src = "../assets/videos/signLanguageVowelActivity.mp4"; // Replace with actual video path
    // signLanguageVideo.controls = true;
    // signLanguageVideo.style.display = "none"; // Initially hidden
    // signLanguageVideo.style.width = "300px";
    // signLanguageVideo.style.borderRadius = "10px";
    // signLanguageVideo.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

    const playPauseButton = document.createElement("button")
    playPauseButton.innerText = "Pausar"
    playPauseButton.style.backgroundColor = "#8e44ad"
    playPauseButton.style.color = "white"
    playPauseButton.style.border = "none"
    playPauseButton.style.borderRadius = "8px"
    playPauseButton.style.padding = "10px 20px"
    playPauseButton.style.fontSize = "16px"
    playPauseButton.style.cursor = "pointer"
    playPauseButton.style.display = "none" // Hidden initially

    playPauseButton.addEventListener("click", () => {
        console.log(videoElement.paused)

        if (videoElement.paused) {
            videoElement.play()
            playPauseButton.innerText = "Pausar"
        } else {
            videoElement.pause()
            playPauseButton.innerText = "Reanudar"
        }
    })

    signLanguageButton.addEventListener("click", () => {
        isVideoVisible = !isVideoVisible
        videoElement.style.display = isVideoVisible ? "block" : "none"
        playPauseButton.style.display = isVideoVisible ? "inline-block" : "none"

        if (isVideoVisible) {
            videoElement.play()
        } else {
            videoElement.pause()
        }
    })

    // Add the "Sign Language" button, video, and play/pause button to the right container
    signLanguageContainer.appendChild(signLanguageButton)
    signLanguageContainer.appendChild(playPauseButton)

    // Add the right container to the bottom container
    bottomContainer.appendChild(signLanguageContainer)

    // Add the bottom container to the activity container
    activityContainer.appendChild(bottomContainer)

    // Append the activity container to the main wrapper
    imageWrapper.appendChild(activityContainer)
}

function loadNextActivity() {
    createImageSelectionActivity()
}

function createVowelSelectionActivity() {
    const vowelSelection = activities
        .flat() // Flatten the array of arrays into a single-level array
        .filter((activity) => activity.type === "vowel_selection")
    console.log(vowelSelection)

    if (currentActivityIndex < vowelSelection.length) {
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        navigateVowelActivity(vowelSelection[currentActivityIndex])
        currentActivityIndex++
    }
}

function navigateVowelActivity(activity) {
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
    instructionText.innerText = activity.text
    instructionText.style.fontSize = "24px"
    instructionText.style.color = "#333"
    instructionText.style.textAlign = "center"
    instructionText.style.marginBottom = "20px"
    activityContainer.appendChild(instructionText)

    // Create the main layout container
    const layoutContainer = document.createElement("div")
    layoutContainer.style.display = "flex"
    layoutContainer.style.justifyContent = "space-between"
    layoutContainer.style.alignItems = "center"
    layoutContainer.style.width = "100%"
    layoutContainer.style.marginBottom = "20px"

    // Create the image and video container (left side)
    const mediaContainer = document.createElement("div")
    mediaContainer.style.display = "flex"
    mediaContainer.style.flexDirection = "column"
    mediaContainer.style.alignItems = "center"
    mediaContainer.style.width = "40%"

    // Add the image
    const imageElement = document.createElement("img")
    imageElement.src = activity.image // Path to the image
    imageElement.alt = "Activity Image"
    imageElement.style.width = "100%"
    imageElement.style.maxWidth = "300px"
    imageElement.style.borderRadius = "10px"
    // imageElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    mediaContainer.appendChild(imageElement)

    // Add the video element below the image
    const videoElement = document.createElement("video")
    videoElement.src = "../assets/videos/palabra_hombre.mp4" // Replace with the correct video path
    videoElement.controls = false
    videoElement.style.width = "100%"
    videoElement.style.maxWidth = "300px"
    videoElement.style.borderRadius = "10px"
    videoElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"
    videoElement.style.marginTop = "20px"
    videoElement.style.display = "none"
    videoElement.muted = true
    mediaContainer.appendChild(videoElement)

    // Add the media container to the layout container
    layoutContainer.appendChild(mediaContainer)

    // Create the activity container (right side)
    const activityRightContainer = document.createElement("div")
    activityRightContainer.style.display = "flex"
    activityRightContainer.style.flexDirection = "column"
    activityRightContainer.style.alignItems = "center"
    activityRightContainer.style.width = "60%"
    activityRightContainer.style.backgroundColor = "#f39c12"
    activityRightContainer.style.borderRadius = "10px"
    activityRightContainer.style.padding = "20px"

    const wordText = document.createElement("span")
    wordText.innerHTML = activity.word // Example: "Y_ca"
    wordText.style.fontSize = "36px"
    wordText.style.fontWeight = "bold"
    wordText.style.color = "#fff"
    wordText.style.marginBottom = "20px"
    activityRightContainer.appendChild(wordText)

    // Create the vowels container
    const vowelsContainer = document.createElement("div")
    vowelsContainer.style.display = "flex"
    vowelsContainer.style.justifyContent = "center"
    vowelsContainer.style.gap = "20px"

    activity.options.forEach((vowel) => {
        const vowelBox = document.createElement("div")
        vowelBox.style.display = "flex"
        vowelBox.style.alignItems = "center"
        vowelBox.style.justifyContent = "center"
        vowelBox.style.width = "60px"
        vowelBox.style.height = "60px"
        vowelBox.style.backgroundColor = "#fff"
        vowelBox.style.border = "2px solid #333"
        vowelBox.style.borderRadius = "10px"
        vowelBox.style.cursor = "pointer"
        vowelBox.style.fontSize = "24px"
        vowelBox.style.fontWeight = "bold"
        vowelBox.style.color = "#333"
        vowelBox.innerText = vowel

        // Event listener for vowel selection
        vowelBox.addEventListener("click", () => {
            let audio = "";
            switch (vowel) {
                case "a":
                    audio = new Audio("../assets/audios/Vocal A.wav")
                    audio.play()
                    break
                case "e":
                    audio = new Audio("../assets/audios/Vocal E.wav")
                    audio.play()
                    break
                case "i":
                    audio = new Audio("../assets/audios/Vocal I.wav")
                    audio.play()
                    break
                case "o":
                    audio = new Audio("../assets/audios/Vocal O.wav")
                    audio.play()
                    break
                case "u":
                    audio = new Audio("../assets/audios/Vocal U.wav")
                    audio.play()
                    break

                default:
                    break
            }
            if (vowel === activity.correctAnswer) {
                wordText.innerHTML = activity.word.replace("_", vowel) // Replace the underscore with the correct vowel
                instructionText.innerText = "¡Muy bien!"
                instructionText.style.color = "green"

                // Play correct sound after a delay
                setTimeout(() => {
                    const audio = new Audio("../assets/audios/muy_bien.wav")
                    audio.play()
                }, 1000)
            } else {
                instructionText.innerText = "Intenta de nuevo"
                instructionText.style.color = "red"

                // Play incorrect sound after a delay
                setTimeout(() => {
                    const audio = new Audio("../assets/audios/intenta_de_nuevo.wav")
                    audio.play()
                }, 1000)
            }
        })

        vowelsContainer.appendChild(vowelBox)
    })

    activityRightContainer.appendChild(vowelsContainer)
    layoutContainer.appendChild(activityRightContainer)

    // Add the layout container to the activity container
    activityContainer.appendChild(layoutContainer)

    // Create the bottom container
    const bottomContainer = document.createElement("div")
    bottomContainer.style.display = "flex"
    bottomContainer.style.justifyContent = "space-between"
    bottomContainer.style.alignItems = "center"
    bottomContainer.style.marginTop = "20px"
    bottomContainer.style.width = "100%"

    // Left container for action buttons
    const buttonsContainer = document.createElement("div")
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"

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
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        navigateVowelActivity(activity)
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
        loadNextActivityVowel()
    })

    buttonsContainer.appendChild(continueButton)

    // Add the buttons container to the left of the bottom container
    bottomContainer.appendChild(buttonsContainer)

    // Right container for the "Sign Language" button
    const signLanguageContainer = document.createElement("div")
    signLanguageContainer.style.display = "flex"
    signLanguageContainer.style.flexDirection = "column"
    signLanguageContainer.style.alignItems = "flex-end"
    signLanguageContainer.style.gap = "10px"

    const signLanguageButton = document.createElement("button")
    signLanguageButton.innerText = "Lenguaje de Señas"
    signLanguageButton.style.backgroundColor = "#3498db"
    signLanguageButton.style.color = "white"
    signLanguageButton.style.border = "none"
    signLanguageButton.style.borderRadius = "8px"
    signLanguageButton.style.padding = "10px 20px"
    signLanguageButton.style.fontSize = "16px"
    signLanguageButton.style.cursor = "pointer"

    let isVideoVisible = false

    const playPauseButton = document.createElement("button")
    playPauseButton.innerText = "Reanudar"
    playPauseButton.style.backgroundColor = "#8e44ad"
    playPauseButton.style.color = "white"
    playPauseButton.style.border = "none"
    playPauseButton.style.borderRadius = "8px"
    playPauseButton.style.padding = "10px 20px"
    playPauseButton.style.fontSize = "16px"
    playPauseButton.style.cursor = "pointer"
    playPauseButton.style.display = "none"

    playPauseButton.addEventListener("click", () => {
        if (videoElement.paused) {
            videoElement.play()
            playPauseButton.innerText = "Pausar"
        } else {
            videoElement.pause()
            playPauseButton.innerText = "Reanudar"
        }
    })

    signLanguageButton.addEventListener("click", () => {
        isVideoVisible = !isVideoVisible
        videoElement.style.display = isVideoVisible ? "block" : "none"
        playPauseButton.style.display = isVideoVisible ? "inline-block" : "none"

        if (isVideoVisible) {
            imageElement.style.display = "none"
            videoElement.play()
        } else {
            imageElement.style.display = "block"
            videoElement.pause()
        }
    })

    signLanguageContainer.appendChild(signLanguageButton)
    signLanguageContainer.appendChild(playPauseButton)

    // Add the right container to the bottom container
    bottomContainer.appendChild(signLanguageContainer)

    // Add the bottom container to the activity container
    activityContainer.appendChild(bottomContainer)

    // Append the activity container to the main wrapper
    imageWrapper.appendChild(activityContainer)
}

function loadNextActivityVowel() {
    createVowelSelectionActivity()
}

function signLanguageVowelActivity() {
    const videoElement = document.getElementById("sign-language-video-activity")
    if (videoElement.style.display === "none") {
        videoElement.style.display = "block"
    } else {
        videoElement.style.display = "none"
    }
}
