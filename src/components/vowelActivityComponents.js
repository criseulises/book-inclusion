export function createVowelSelectionActivity(activities, currentActivityIndex, imageWrapper, navigateVowelActivity) {
    const vowelSelection = activities
        .flat() // Flatten the array of arrays into a single-level array
        .filter((activity) => activity.type === "vowel_selection");

    if (currentActivityIndex < vowelSelection.length) {
        const element = document.getElementById("activity-container");
        if (element) imageWrapper.removeChild(element);
        navigateVowelActivity(vowelSelection[currentActivityIndex]);
    }
}

export function navigateVowelActivity(activity, imageWrapper) {
    // Create the main activity container
    const activityContainer = document.createElement("div");
    activityContainer.style.display = "flex";
    activityContainer.style.flexDirection = "column";
    activityContainer.style.alignItems = "center";
    activityContainer.style.padding = "20px";
    activityContainer.style.backgroundColor = "#ffffff";
    activityContainer.style.borderRadius = "10px";
    activityContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    activityContainer.style.width = "100%";
    activityContainer.style.maxWidth = "900px";
    activityContainer.style.margin = "auto";
    activityContainer.id = "activity-container";

    // Create the instruction text
    const instructionText = document.createElement("h2");
    instructionText.innerText = activity.text;
    instructionText.style.fontSize = "24px";
    instructionText.style.color = "#333";
    instructionText.style.textAlign = "center";
    instructionText.style.marginBottom = "20px";
    activityContainer.appendChild(instructionText);

    // Create the main layout container
    const layoutContainer = document.createElement("div");
    layoutContainer.style.display = "flex";
    layoutContainer.style.justifyContent = "space-between";
    layoutContainer.style.alignItems = "center";
    layoutContainer.style.width = "100%";
    layoutContainer.style.marginBottom = "20px";

    // Create the image and video container (left side)
    const mediaContainer = document.createElement("div");
    mediaContainer.style.display = "flex";
    mediaContainer.style.flexDirection = "column";
    mediaContainer.style.alignItems = "center";
    mediaContainer.style.width = "40%";

    // Add the image
    const imageElement = document.createElement("img");
    imageElement.src = activity.image; // Path to the image
    imageElement.alt = "Activity Image";
    imageElement.style.width = "100%";
    imageElement.style.maxWidth = "300px";
    imageElement.style.borderRadius = "10px";
    mediaContainer.appendChild(imageElement);

    // Add the video element below the image
    const videoElement = document.createElement("video");
    videoElement.src = "../assets/videos/palabra_hombre.mp4"; // Replace with the correct video path
    videoElement.controls = false;
    videoElement.style.width = "100%";
    videoElement.style.maxWidth = "300px";
    videoElement.style.borderRadius = "10px";
    videoElement.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    videoElement.style.marginTop = "20px";
    videoElement.style.display = "none";
    videoElement.muted = true;
    mediaContainer.appendChild(videoElement);

    layoutContainer.appendChild(mediaContainer);

    // Create the activity container (right side)
    const activityRightContainer = document.createElement("div");
    activityRightContainer.style.display = "flex";
    activityRightContainer.style.flexDirection = "column";
    activityRightContainer.style.alignItems = "center";
    activityRightContainer.style.width = "60%";
    activityRightContainer.style.backgroundColor = "#f39c12";
    activityRightContainer.style.borderRadius = "10px";
    activityRightContainer.style.padding = "20px";

    const wordText = document.createElement("span");
    wordText.innerHTML = activity.word; // Example: "Y_ca"
    wordText.style.fontSize = "36px";
    wordText.style.fontWeight = "bold";
    wordText.style.color = "#fff";
    wordText.style.marginBottom = "20px";
    activityRightContainer.appendChild(wordText);

    // Create the vowels container
    const vowelsContainer = document.createElement("div");
    vowelsContainer.style.display = "flex";
    vowelsContainer.style.justifyContent = "center";
    vowelsContainer.style.gap = "20px";

    activity.options.forEach((vowel) => {
        const vowelBox = document.createElement("div");
        vowelBox.style.display = "flex";
        vowelBox.style.alignItems = "center";
        vowelBox.style.justifyContent = "center";
        vowelBox.style.width = "60px";
        vowelBox.style.height = "60px";
        vowelBox.style.backgroundColor = "#fff";
        vowelBox.style.border = "2px solid #333";
        vowelBox.style.borderRadius = "10px";
        vowelBox.style.cursor = "pointer";
        vowelBox.style.fontSize = "24px";
        vowelBox.style.fontWeight = "bold";
        vowelBox.style.color = "#333";
        vowelBox.innerText = vowel;

        // Event listener for vowel selection
        vowelBox.addEventListener("click", () => {
            const audio = new Audio();
            switch (vowel) {
                case "a":
                    audio.src = "../assets/audios/Vocal A.wav";
                    break;
                case "e":
                    audio.src = "../assets/audios/Vocal E.wav";
                    break;
                case "i":
                    audio.src = "../assets/audios/Vocal I.wav";
                    break;
                case "o":
                    audio.src = "../assets/audios/Vocal O.wav";
                    break;
                case "u":
                    audio.src = "../assets/audios/Vocal U.wav";
                    break;
                default:
                    break;
            }
            audio.play();

            if (vowel === activity.correctAnswer) {
                wordText.innerHTML = activity.word.replace("_", vowel); // Replace the underscore with the correct vowel
                instructionText.innerText = "¡Muy bien!";
                instructionText.style.color = "green";
                setTimeout(() => {
                    const correctAudio = new Audio("../assets/audios/muy_bien.wav");
                    correctAudio.play();
                }, 1000);
            } else {
                instructionText.innerText = "Intenta de nuevo";
                instructionText.style.color = "red";
                setTimeout(() => {
                    const incorrectAudio = new Audio("../assets/audios/intenta_de_nuevo.wav");
                    incorrectAudio.play();
                }, 1000);
            }
        });

        vowelsContainer.appendChild(vowelBox);
    });

    activityRightContainer.appendChild(vowelsContainer);
    layoutContainer.appendChild(activityRightContainer);

    // Add the layout container to the activity container
    activityContainer.appendChild(layoutContainer);

    // Add the bottom container (buttons)
    const bottomContainer = createBottomContainer(videoElement, imageElement);
    activityContainer.appendChild(bottomContainer);

    // Append the activity container to the main wrapper
    imageWrapper.appendChild(activityContainer);
}

function createBottomContainer(videoElement, imageElement) {
    const bottomContainer = document.createElement("div");
    bottomContainer.style.display = "flex";
    bottomContainer.style.justifyContent = "space-between";
    bottomContainer.style.alignItems = "center";
    bottomContainer.style.marginTop = "20px";
    bottomContainer.style.width = "100%";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.style.display = "flex";
    buttonsContainer.style.gap = "10px";

    // Salir Button
    const exitButton = document.createElement("button");
    exitButton.innerText = "Salir";
    exitButton.style.backgroundColor = "#e74c3c";
    exitButton.style.color = "white";
    exitButton.style.borderRadius = "8px";
    exitButton.addEventListener("click", () => (window.location.href = "/")); // Adjust logic as needed

    buttonsContainer.appendChild(exitButton);

    // Reintentar Button
    const retryButton = document.createElement("button");
    retryButton.innerText = "Reintentar";
    retryButton.style.backgroundColor = "#f39c12";
    retryButton.style.color = "white";
    retryButton.style.borderRadius = "8px";
    retryButton.addEventListener("click", () => window.location.reload()); // Adjust logic as needed

    buttonsContainer.appendChild(retryButton);

    // Add buttonsContainer to bottomContainer
    bottomContainer.appendChild(buttonsContainer);

    // Lenguaje de Señas Button
    const videoControlContainer = createVideoControlContainer(videoElement, imageElement);
    bottomContainer.appendChild(videoControlContainer);

    return bottomContainer;
}

function createVideoControlContainer(videoElement, imageElement) {
    const videoControlContainer = document.createElement("div");
    videoControlContainer.style.display = "flex";
    videoControlContainer.style.flexDirection = "column";
    videoControlContainer.style.alignItems = "flex-end";
    videoControlContainer.style.gap = "10px";

    const signLanguageButton = document.createElement("button");
    signLanguageButton.innerText = "Lenguaje de Señas";
    signLanguageButton.style.backgroundColor = "#3498db";
    signLanguageButton.style.color = "white";
    signLanguageButton.style.borderRadius = "8px";
    signLanguageButton.addEventListener("click", () => {
        const isVideoVisible = videoElement.style.display === "block";
        videoElement.style.display = isVideoVisible ? "none" : "block";
        imageElement.style.display = isVideoVisible ? "block" : "none";
        if (!isVideoVisible) videoElement.play();
    });

    videoControlContainer.appendChild(signLanguageButton);

    return videoControlContainer;
}
