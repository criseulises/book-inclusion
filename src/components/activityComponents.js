export function createImageSelectionActivity(activities, currentActivityIndex, imageWrapper, navigateActivity) {
    const imageSelection = activities.flat().filter((activity) => activity.type === "image_selection")

    if (currentActivityIndex < imageSelection.length) {
        const element = document.getElementById("activity-container")
        if (element) imageWrapper.removeChild(element)
        navigateActivity(imageSelection[currentActivityIndex])
    }
}

export function navigateActivity(activity, imageWrapper, speakText, loadNextActivity) {
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

    // Instruction text
    const instructionText = document.createElement("h2")
    instructionText.innerText = activity.text
    instructionText.style.fontSize = "24px"
    instructionText.style.color = "#333"
    instructionText.style.textAlign = "center"
    instructionText.style.marginBottom = "20px"
    activityContainer.appendChild(instructionText)

    // Layout container
    const layoutContainer = document.createElement("div")
    layoutContainer.style.display = "flex"
    layoutContainer.style.justifyContent = "space-between"
    layoutContainer.style.alignItems = "center"
    layoutContainer.style.width = "100%"
    layoutContainer.style.marginBottom = "20px"

    // Word container
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

    layoutContainer.appendChild(wordContainer)

    // Images container
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

    // Bottom buttons
    const bottomContainer = document.createElement("div")
    bottomContainer.style.display = "flex"
    bottomContainer.style.justifyContent = "space-between"
    bottomContainer.style.alignItems = "center"
    bottomContainer.style.marginTop = "20px"
    bottomContainer.style.width = "100%"

    const buttonsContainer = document.createElement("div")
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.gap = "10px"

    const exitButton = createButton("Salir", "#e74c3c", () => {
        location.reload()
    })
    const retryButton = createButton("Reintentar", "#f39c12", () => {
        imageWrapper.innerHTML = ""
        navigateActivity(activity)
    })
    const continueButton = createButton("Continuar", "#27ae60", loadNextActivity)

    buttonsContainer.appendChild(exitButton)
    buttonsContainer.appendChild(retryButton)
    buttonsContainer.appendChild(continueButton)

    bottomContainer.appendChild(buttonsContainer)
    activityContainer.appendChild(bottomContainer)
    imageWrapper.appendChild(activityContainer)
}

function createButton(text, color, onClick) {
    const button = document.createElement("button")
    button.innerText = text
    button.style.backgroundColor = color
    button.style.color = "white"
    button.style.border = "none"
    button.style.borderRadius = "8px"
    button.style.padding = "10px 20px"
    button.style.fontSize = "16px"
    button.style.cursor = "pointer"
    button.addEventListener("click", onClick)
    return button
}
