const pages = [
    {
        src: "../assets/images/pages/page1.PNG",
        text: "",
        position: { top: "10px", left: "10px" },
        fontSize: "0",
        width: "0px",
        fontFamily: "",
        audio: "../assets/audio/page2.mp3",
        signLanguageVideo: "../assets/videos/page1.mp4",
    },
    {
        src: "../assets/images/pages/page2.PNG",
        text: "La Yuca, adaptación del cuento original:\n\nEl Nabo de León Tolstoi\n\n© 2023, UNICEF República Dominicana\nAdaptación texto: Sara Melgar\nIlustración: Desirée Gneco\nDiagramación: Lourdes Periche Agencia Creativa\nSanto Domingo, República Dominicana",
        position: { top: "50px", left: "10px" },
        fontSize: "12",
        width: "250px",
        fontFamily: "'Poppins', sans-serif",
        audio: "../assets/audio/page2.mp3",
        signLanguageVideo: "../assets/videos/page2.mp4",
    },
    {
        src: "../assets/images/pages/page3.PNG",
        text: "Había una vez un hombre viejo que plantó una yuca y después dijo: —¡Crece, crece pequeña yuca! ¡Crece y sé grande!",
        position: { top: "50px", left: "50px" },
        fontSize: "28",
        width: "450px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page3.mp3",
        signLanguageVideo: "../assets/videos/page3.mp4",
    },
    {
        src: "../assets/images/pages/page4.PNG",
        text: "Y la yuca creció y llegó a ser enorme.",
        position: { top: "60px", left: "600px" },
        fontSize: "28",
        width: "400px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page4.mp3",
        signLanguageVideo: "../assets/videos/page4.mp4",
    },
    {
        src: "../assets/images/pages/page5.PNG",
        text: "Un día el viejo fue a arrancarla.\nTiró y tiró, pero no pudo arrancarla.",
        position: { top: "30px", left: "60px" },
        fontSize: "28",
        width: "500px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page5.mp3",
        signLanguageVideo: "../assets/videos/page5.mp4",
    },
    {
        src: "../assets/images/pages/page6.PNG",
        text: "Entonces llamó a la mujer vieja.\nLa mujer tiró del hombre.\nEl hombre tiró de la yuca.\nY tiraron y tiraron, pero no la arrancaron.",
        position: { top: "50px", left: "300px" },
        fontSize: "24",
        width: "480px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page6.mp3",
        signLanguageVideo: "../assets/videos/page6.mp4",
    },
    {
        src: "../assets/images/pages/page7.PNG",
        text: "Entonces la mujer llamó a su nieta.\nLa nieta tiró de la mujer.\nLa mujer tiró del hombre.\nEl hombre tiró de la yuca.\nY tiraron y tiraron, pero no la arrancaron.",
        position: { top: "30px", left: "200px" },
        fontSize: "24",
        width: "480px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page7.mp3",
        signLanguageVideo: "../assets/videos/page7.mp4",
    },
    {
        src: "../assets/images/pages/page8.PNG",
        text: "Entonces la nieta llamó al perro.\nEl perro tiró de la nieta.\nLa nieta tiró de la mujer.\nLa mujer tiró del hombre.\nEl hombre tiró de la yuca.\nTiraron y tiraron, pero no la arrancaron.",
        position: { top: "10px", left: "650px" },
        fontSize: "22",
        width: "500px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page8.mp3",
        signLanguageVideo: "../assets/videos/page8.mp4",
    },
    {
        src: "../assets/images/pages/page9.PNG",
        text: "Entonces el perro llamó al gato.\nEl gato tiró del perro.\nEl perro tiró de la nieta.\nLa nieta tiró de la mujer.\nLa mujer tiró del hombre.\nEl hombre tiró de la yuca.\nY tiraron y tiraron…\n¡Y al final la arrancaron!",
        position: { top: "60px", left: "700px" },
        fontSize: "22",
        width: "350px",
        fontFamily: "'Fredoka One', cursive",
        audio: "../assets/audio/page9.mp3",
        signLanguageVideo: "../assets/videos/page9.mp4",
    },
    {
        src: "../assets/images/pages/page10.PNG",
        text: "",
        position: { top: "0px", left: "0px" },
        fontSize: "0",
        width: "0px",
        fontFamily: "",
        audio: "../assets/audio/page10.mp3",
        signLanguageVideo: "../assets/videos/page10.mp4",
    },
    {
        src: "../assets/images/pages/page11.PNG",
        text: "La iniciativa de libros digitales accesibles forma parte del Modelo de Educación Inclusiva del Ministerio de Educación de la República Dominicana. Este texto es parte de una serie de cuentos publicados en las guías didácticas de Lengua Española del Programa Nacional Construyendo la Base de los Aprendizajes (CON BASE).",
        position: { top: "50px", left: "50px" },
        fontSize: "16",
        width: "300px",
        fontFamily: "'Comic Neue', cursive",
        audio: "../assets/audio/page11.mp3",
        signLanguageVideo: "../assets/videos/page11.mp4",
    },
    {
        src: "../assets/images/pages/page12.PNG",
        text: "",
        position: { top: "0px", left: "0px" },
        fontSize: "0",
        width: "0px",
        fontFamily: "",
        audio: "../assets/audio/page12.mp3",
        signLanguageVideo: "../assets/videos/page12.mp4",
    },
]

const activities = [
    [
        {
            activityName: "Selecciona la imagen correcta",
            type: "image_selection",
            text: 'Selecciona la imagen que corresponda a la palabra "casa".',
            word: "Casa",
            images: [
                { src: "../assets/images/activities/hombre.png", alt: "Hombre", correct: false },
                { src: "../assets/images/activities/perro.png", alt: "Perro", correct: false },
                { src: "../assets/images/activities/niña.png", alt: "Niña", correct: false },
                { src: "../assets/images/activities/casa.png", alt: "Casa", correct: true },
                { src: "../assets/images/activities/mujer.png", alt: "Mujer", correct: false },
                { src: "../assets/images/activities/yuca.png", alt: "Yuca", correct: false },
            ],
        },
        {
            activityName: "Selecciona la imagen correcta",
            type: "image_selection",
            text: 'Selecciona la imagen que corresponda a la palabra "perro".',
            word: "Perro",
            images: [
                { src: "../assets/images/activities/hombre.png", alt: "Hombre", correct: false },
                { src: "../assets/images/activities/perro.png", alt: "Perro", correct: true },
                { src: "../assets/images/activities/niña.png", alt: "Niña", correct: false },
                { src: "../assets/images/activities/casa.png", alt: "Casa", correct: false },
                { src: "../assets/images/activities/mujer.png", alt: "Mujer", correct: false },
                { src: "../assets/images/activities/yuca.png", alt: "Yuca", correct: false },
            ],
        },
    ],
    [
        {
            activityName: "Selecciona la vocal faltante",
            type: "vowel_selection",
            text: "Selecciona la vocal que falta en la palabra",
            word: "Y_ca",
            options: ["a", "e", "i", "o", "u"],
            correctAnswer: "u",
            image: "../assets/images/activities/yuca.png",
        },
        {
            activityName: "Selecciona la vocal faltante",
            type: "vowel_selection",
            text: "Selecciona la vocal que falta en la palabra",
            word: "H_mbre",
            options: ["a", "e", "i", "o", "u"],
            correctAnswer: "o",
            image: "../assets/images/activities/hombre.png",
        },
    ],
]

let currentIndex = 0
let isPaused = false
let currentFontSize = 0
let currentActivityIndex = 0
let scaleLevel = 1

const mainContainer = document.documentElement
const zoomStep = 0.1
const minScale = 0.5
const maxScale = 2
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
const zoomInButton = document.getElementById("zoom-in-button")
const zoomOutButton = document.getElementById("zoom-out-button")

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

// Función para actualizar el contenido dinámico
function updateContent() {
    responsiveVoice.cancel()
    isPaused = false

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

function insertTextToSpeak() {
    const currentPage = pages[currentIndex]
    if (currentPage.text) {
        responsiveVoice.cancel()
        speakText(currentPage.text)
        isPaused = false
    } else {
        console.warn("No hay texto para leer.")
    }
}

// Función para leer el texto usando ResponsiveVoice.js
function speakText(text) {
    responsiveVoice.speak(text, "Spanish Latin American Female")
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

// Navegación entre páginas

// Ajustar posición y tamaño del texto para que permanezca dentro de la imagen
function adjustTextPosition() {
    const currentPage = pages[currentIndex]
    const imageWidth = imageElement.clientWidth
    const imageHeight = imageElement.clientHeight

    const baseLeft = parseInt(currentPage.position.left)
    const baseTop = parseInt(currentPage.position.top)
    const leftOffset = baseLeft - currentFontSize / 10
    const topOffset = baseTop - currentFontSize / 20

    const maxWidth = imageWidth * 0.9
    const adjustedWidth = Math.min(parseInt(currentPage.width) + currentFontSize / 5, maxWidth)

    textElement.style.left = `${Math.max(leftOffset, 0)}px`
    textElement.style.top = `${Math.max(topOffset, 0)}px`
    textElement.style.width = `${adjustedWidth}px`

    textElement.style.maxHeight = `${imageHeight * 0.8}px`
    textElement.style.overflowY = "auto"
}

function increaseTextSize() {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize)
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize
    if (currentFontSize < baseFontSize * 2) {
        currentFontSize += 2
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition()
    }
}

function decreaseTextSize() {
    const currentPage = pages[currentIndex]
    const baseFontSize = parseInt(currentPage.fontSize)
    currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize
    if (currentFontSize > baseFontSize / 2) {
        currentFontSize -= 2
        textElement.style.fontSize = `${currentFontSize}px`
        adjustTextPosition()
    }
}

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
    videoElement.load()
    videoModal.style.display = "flex"
}

function closeSignLanguageVideo() {
    videoElement.pause()
    videoModal.style.display = "none"
}

function createElement() {
    console.log(bookOrder[currentIndex])

    if (bookOrder[currentIndex] == "image_selection") {
        createImageSelectionActivity()
    } else {
        createVowelSelectionActivity()
    }
}

function createImageSelectionActivity() {
    const imageSelection = activities.flat().filter((activity) => activity.type === "image_selection")

    if (currentActivityIndex < imageSelection.length) {
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        navigateActivity(imageSelection[currentActivityIndex])
        currentActivityIndex++
    }
}

function navigateActivity(activity) {
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

    // Create the word container (left side)
    const wordContainer = document.createElement("div")
    wordContainer.style.marginRight = "20px"
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

    const videoContainer = document.createElement("div")
    videoContainer.style.marginTop = "20px"
    videoContainer.style.textAlign = "center"

    const videoElement = document.createElement("video")
    videoElement.controls = false
    videoElement.style.width = "100%"
    videoElement.style.maxWidth = "400px"
    videoElement.style.borderRadius = "10px"
    videoElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"
    videoElement.src = "../assets/videos/palabra_hombre.mp4"
    videoElement.style.display = "none"
    videoElement.id = "sign-language-video-activity"
    videoElement.muted = true

    layoutContainer.appendChild(wordContainer)
    videoContainer.appendChild(videoElement)
    wordContainer.appendChild(videoContainer)

    const imagesContainer = document.createElement("div")
    imagesContainer.style.display = "grid"
    imagesContainer.style.gridTemplateColumns = "repeat(3, 1fr)"
    imagesContainer.style.gap = "20px"
    imagesContainer.style.width = "60%"

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

        image.addEventListener("click", () => {
            radioButton.checked = true
            speakText(radioButton.value)
            setTimeout(() => {
                const audio = new Audio()
                if (radioButton.value === activity.word) {
                    instructionText.innerText = "¡Muy bien!"
                    instructionText.style.color = "green"
                    audio.src = "../assets/audios/muy_bien.wav"
                } else {
                    instructionText.innerText = "Intenta de nuevo"
                    instructionText.style.color = "red"
                    audio.src = "../assets/audios/intenta_de_nuevo.wav"
                }
                audio.play()
            }, 1000)
        })

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(radioButton)
        imagesContainer.appendChild(imageWrapper)
    })

    layoutContainer.appendChild(imagesContainer)

    activityContainer.appendChild(layoutContainer)

    const bottomContainer = document.createElement("div")
    bottomContainer.style.display = "flex"
    bottomContainer.style.justifyContent = "space-between"
    bottomContainer.style.alignItems = "center"
    bottomContainer.style.marginTop = "20px"
    bottomContainer.style.width = "100%"

    const buttonsContainer = document.createElement("div")
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"

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
        imageWrapper.innerHTML = ""
        createActivity()
    })
    buttonsContainer.appendChild(retryButton)

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
        loadNextActivity()
    })
    buttonsContainer.appendChild(continueButton)
    bottomContainer.appendChild(buttonsContainer)

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
    playPauseButton.innerText = "Pausar"
    playPauseButton.style.backgroundColor = "#8e44ad"
    playPauseButton.style.color = "white"
    playPauseButton.style.border = "none"
    playPauseButton.style.borderRadius = "8px"
    playPauseButton.style.padding = "10px 20px"
    playPauseButton.style.fontSize = "16px"
    playPauseButton.style.cursor = "pointer"
    playPauseButton.style.display = "none"

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

    signLanguageContainer.appendChild(signLanguageButton)
    signLanguageContainer.appendChild(playPauseButton)
    bottomContainer.appendChild(signLanguageContainer)
    activityContainer.appendChild(bottomContainer)
    imageWrapper.appendChild(activityContainer)
}

function loadNextActivity() {
    createImageSelectionActivity()
}

function createVowelSelectionActivity() {
    const vowelSelection = activities.flat().filter((activity) => activity.type === "vowel_selection")
    console.log(vowelSelection)

    if (currentActivityIndex < vowelSelection.length) {
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        navigateVowelActivity(vowelSelection[currentActivityIndex])
        currentActivityIndex++
    }
}

function navigateVowelActivity(activity) {
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

    const instructionText = document.createElement("h2")
    instructionText.innerText = activity.text
    instructionText.style.fontSize = "24px"
    instructionText.style.color = "#333"
    instructionText.style.textAlign = "center"
    instructionText.style.marginBottom = "20px"
    activityContainer.appendChild(instructionText)

    const layoutContainer = document.createElement("div")
    layoutContainer.style.display = "flex"
    layoutContainer.style.justifyContent = "space-between"
    layoutContainer.style.alignItems = "center"
    layoutContainer.style.width = "100%"
    layoutContainer.style.marginBottom = "20px"

    const mediaContainer = document.createElement("div")
    mediaContainer.style.display = "flex"
    mediaContainer.style.flexDirection = "column"
    mediaContainer.style.alignItems = "center"
    mediaContainer.style.width = "40%"

    const imageElement = document.createElement("img")
    imageElement.src = activity.image
    imageElement.alt = "Activity Image"
    imageElement.style.width = "100%"
    imageElement.style.maxWidth = "300px"
    imageElement.style.borderRadius = "10px"
    mediaContainer.appendChild(imageElement)

    const videoElement = document.createElement("video")
    videoElement.src = "../assets/videos/palabra_hombre.mp4"
    videoElement.controls = false
    videoElement.style.width = "100%"
    videoElement.style.maxWidth = "300px"
    videoElement.style.borderRadius = "10px"
    videoElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)"
    videoElement.style.marginTop = "20px"
    videoElement.style.display = "none"
    videoElement.muted = true
    mediaContainer.appendChild(videoElement)

    layoutContainer.appendChild(mediaContainer)

    const activityRightContainer = document.createElement("div")
    activityRightContainer.style.display = "flex"
    activityRightContainer.style.flexDirection = "column"
    activityRightContainer.style.alignItems = "center"
    activityRightContainer.style.width = "60%"
    activityRightContainer.style.backgroundColor = "#f39c12"
    activityRightContainer.style.borderRadius = "10px"
    activityRightContainer.style.padding = "20px"

    const wordText = document.createElement("span")
    wordText.innerHTML = activity.word
    wordText.style.fontSize = "36px"
    wordText.style.fontWeight = "bold"
    wordText.style.color = "#fff"
    wordText.style.marginBottom = "20px"
    activityRightContainer.appendChild(wordText)

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

        vowelBox.addEventListener("click", () => {
            let audio = ""
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
                wordText.innerHTML = activity.word.replace("_", vowel)
                instructionText.innerText = "¡Muy bien!"
                instructionText.style.color = "green"

                setTimeout(() => {
                    const audio = new Audio("../assets/audios/muy_bien.wav")
                    audio.play()
                }, 1000)
            } else {
                instructionText.innerText = "Intenta de nuevo"
                instructionText.style.color = "red"

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

    activityContainer.appendChild(layoutContainer)

    const bottomContainer = document.createElement("div")
    bottomContainer.style.display = "flex"
    bottomContainer.style.justifyContent = "space-between"
    bottomContainer.style.alignItems = "center"
    bottomContainer.style.marginTop = "20px"
    bottomContainer.style.width = "100%"

    const buttonsContainer = document.createElement("div")
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"

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

    bottomContainer.appendChild(buttonsContainer)

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
    bottomContainer.appendChild(signLanguageContainer)
    activityContainer.appendChild(bottomContainer)
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

// Manejo de botones
speakTextButton.addEventListener("click", insertTextToSpeak)
pauseTextButton.addEventListener("click", togglePauseText)
increaseTextButton.addEventListener("click", increaseTextSize)
decreaseTextButton.addEventListener("click", decreaseTextSize)
zoomInButton.addEventListener("click", zoomIn)
zoomOutButton.addEventListener("click", zoomOut)
signLanguageButton.addEventListener("click", playSignLanguageVideo)
closeVideoButton.addEventListener("click", closeSignLanguageVideo)

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--
        currentActivityIndex = 0
        updateContent()
    }
})

nextButton.addEventListener("click", () => {
    if (currentIndex < bookOrder.length - 1) {
        currentIndex++
        currentActivityIndex = 0
        updateContent()
    }
})

updateContent()
