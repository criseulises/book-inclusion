import pages from "./data/pagesData.js";
import activities from "./data/activitiesData.js";
import { updateContent, createElement } from "./pageComponents.js";
import { zoomIn, zoomOut, setupZoomButtons } from "./zoomUtils.js";
import { setupNavigationButtons } from "./navigationUtils.js";
import {
    setupResponsiveVoiceButtons,
    playSignLanguageVideo,
    closeSignLanguageVideo,
} from "./responsiveVoiceUtils.js";

let currentIndex = 0;
let currentActivityIndex = 0;

// Seleccionar elementos del DOM
const mainContainer = document.documentElement;
const imageElement = document.getElementById("current-page");
const imageWrapper = document.getElementById("image-wrapper");
const textElement = document.getElementById("page-text");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const speakTextButton = document.getElementById("speak-text-button");
const pauseTextButton = document.getElementById("pause-text-button");
const increaseTextButton = document.getElementById("increase-text-button");
const decreaseTextButton = document.getElementById("decrease-text-button");
const signLanguageButton = document.getElementById("sign-language-button");
const videoSource = document.getElementById("video-source");
const videoModal = document.getElementById("sign-language-modal");
const videoElement = document.getElementById("sign-language-video");
const closeVideoButton = document.getElementById("close-video-button");
const zoomInButton = document.getElementById("zoom-in-button");
const zoomOutButton = document.getElementById("zoom-out-button");

// Configurar botones de navegación
setupNavigationButtons({
    prevButton,
    nextButton,
    updateContent: () => updateContent(currentIndex, currentActivityIndex, imageWrapper),
    currentIndex,
    bookOrder: pages.map(() => "page").concat(
        activities.flat().map((activity) => activity.type)
    ),
});

// Configurar botones de lectura con voz
setupResponsiveVoiceButtons({
    speakTextButton,
    pauseTextButton,
    signLanguageButton,
    playSignLanguageVideo: () => playSignLanguageVideo(currentIndex, pages, videoSource, videoElement, videoModal),
    closeSignLanguageVideo: () => closeSignLanguageVideo(videoElement, videoModal),
    closeVideoButton,
    textElement,
    pages,
    currentIndex,
});

// Configurar botones de zoom
setupZoomButtons({
    zoomInButton,
    zoomOutButton,
    mainContainer,
});

// Inicializar contenido al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateContent(currentIndex, currentActivityIndex, imageWrapper);
});
