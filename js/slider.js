import pages from './pagesData.js';

let currentIndex = 0;
let isPaused = false; // Estado para rastrear si la lectura está pausada
let currentFontSize = 0; // Tamaño inicial del texto

const imageElement = document.getElementById('current-page');
const textElement = document.getElementById('page-text');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const speakTextButton = document.getElementById('speak-text-button');
const pauseTextButton = document.getElementById('pause-text-button');
const increaseTextButton = document.getElementById('increase-text-button');
const decreaseTextButton = document.getElementById('decrease-text-button');
const signLanguageButton = document.getElementById('sign-language-button');
const videoSource = document.getElementById('video-source');
const videoModal = document.getElementById('sign-language-modal');
const videoElement = document.getElementById('sign-language-video');
const closeVideoButton = document.getElementById('close-video-button');
// Función para actualizar el contenido dinámico
function updateContent() {
  // Detener cualquier lectura en curso antes de actualizar
  responsiveVoice.cancel();
  isPaused = false; // Reiniciar el estado de pausa

  const currentPage = pages[currentIndex];
  imageElement.src = currentPage.src;

  if (currentPage.text) {
    textElement.textContent = currentPage.text;
    textElement.style.display = 'block';

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      textElement.style.position = 'absolute';
      textElement.style.top = currentPage.position.top;
      textElement.style.left = currentPage.position.left;
      textElement.style.fontSize = currentFontSize === 0 ? `${currentPage.fontSize}px` : `${currentFontSize}px`;
      textElement.style.width = currentPage.width;
      textElement.style.fontFamily = currentPage.fontFamily;
      textElement.style.fontWeight = 'bold';
    } else {
      textElement.style.position = 'static';
      textElement.style.fontSize = '16px';
      textElement.style.width = '100%';
      textElement.style.textAlign = 'center';
    }

    textElement.style.fontFamily = currentPage.fontFamily;
  } else {
    textElement.style.display = 'none';
  }
}

// Función para leer el texto usando ResponsiveVoice.js
function speakText() {
  const currentPage = pages[currentIndex];
  if (currentPage.text) {
    responsiveVoice.cancel(); // Asegurarse de detener cualquier lectura en curso
    responsiveVoice.speak(currentPage.text, 'Spanish Latin American Female');
    isPaused = false; // Reiniciar el estado de pausa
  } else {
    console.warn('No hay texto para leer.');
  }
}

// Función para pausar o reanudar la lectura
function togglePauseText() {
  if (isPaused) {
    responsiveVoice.resume();
    isPaused = false;
  } else {
    responsiveVoice.pause();
    isPaused = true;
  }
}

// Función para aumentar el tamaño del texto
// Función para aumentar el tamaño del texto


// Navegación entre páginas
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateContent(); // Detiene la lectura y actualiza contenido
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < pages.length - 1) {
    currentIndex++;
    updateContent(); // Detiene la lectura y actualiza contenido
  }
});

// Manejo de botones
speakTextButton.addEventListener('click', speakText);
pauseTextButton.addEventListener('click', togglePauseText);
increaseTextButton.addEventListener('click', increaseTextSize);
decreaseTextButton.addEventListener('click', decreaseTextSize);

// Inicializar contenido al cargar
updateContent();



// Ajustar posición y tamaño del texto para que permanezca dentro de la imagen
function adjustTextPosition() {
  const currentPage = pages[currentIndex];
  const imageWidth = imageElement.clientWidth; // Ancho actual de la imagen
  const imageHeight = imageElement.clientHeight; // Altura actual de la imagen

  // Calcular posición relativa
  const baseLeft = parseInt(currentPage.position.left);
  const baseTop = parseInt(currentPage.position.top);
  const leftOffset = baseLeft - (currentFontSize / 10);
  const topOffset = baseTop - (currentFontSize / 20);

  // Limitar el ancho máximo del texto
  const maxWidth = imageWidth * 0.9; // Máximo 90% del ancho de la imagen
  const adjustedWidth = Math.min(parseInt(currentPage.width) + (currentFontSize / 5), maxWidth);

  // Asegurar que no salga de los bordes
  textElement.style.left = `${Math.max(leftOffset, 0)}px`;
  textElement.style.top = `${Math.max(topOffset, 0)}px`;
  textElement.style.width = `${adjustedWidth}px`;

  // Ajustar el alto dinámicamente (opcional)
  textElement.style.maxHeight = `${imageHeight * 0.8}px`; // Máximo 80% de la altura de la imagen
  textElement.style.overflowY = "auto"; // Agregar scroll si es necesario
}

// Función para aumentar el tamaño del texto
function increaseTextSize() {
  const currentPage = pages[currentIndex];
  const baseFontSize = parseInt(currentPage.fontSize); // Tamaño base inicial
  currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize; // Establecer el tamaño actual si no está configurado
  if (currentFontSize < baseFontSize * 2) { // Límite máximo basado en el tamaño inicial
    currentFontSize += 2; // Incremento proporcional
    textElement.style.fontSize = `${currentFontSize}px`;
    adjustTextPosition(); // Ajustar posición y tamaño
  }
}

// Función para disminuir el tamaño del texto
function decreaseTextSize() {
  const currentPage = pages[currentIndex];
  const baseFontSize = parseInt(currentPage.fontSize); // Tamaño base inicial
  currentFontSize = currentFontSize === 0 ? baseFontSize : currentFontSize; // Establecer el tamaño actual si no está configurado
  if (currentFontSize > baseFontSize / 2) { // Límite mínimo basado en el tamaño inicial
    currentFontSize -= 2; // Decremento proporcional
    textElement.style.fontSize = `${currentFontSize}px`;
    adjustTextPosition(); // Ajustar posición y tamaño
  }
}
let scaleLevel = 1; // Nivel inicial de escala
const zoomStep = 0.1; // Incremento/decremento por paso
const minScale = 0.5; // Zoom mínimo permitido
const maxScale = 2; // Zoom máximo permitido

// Elemento que será escalado (todo el contenido de la página)
const mainContainer = document.documentElement; // Escalar el HTML completo

// Botones
const zoomInButton = document.getElementById('zoom-in-button');
const zoomOutButton = document.getElementById('zoom-out-button');

// Función para aumentar el zoom
function zoomIn() {
  if (scaleLevel < maxScale) {
    scaleLevel += zoomStep;
    applyZoom();
  }
}

// Función para reducir el zoom
function zoomOut() {
  if (scaleLevel > minScale) {
    scaleLevel -= zoomStep;
    applyZoom();
  }
}

// Función para aplicar el zoom
function applyZoom() {
  mainContainer.style.transform = `scale(${scaleLevel})`;
  mainContainer.style.transformOrigin = 'center top'; // Establecer origen del escalado
}

// Eventos para los botones
zoomInButton.addEventListener('click', zoomIn);
zoomOutButton.addEventListener('click', zoomOut);


function playSignLanguageVideo() {
  const currentPage = pages[currentIndex];
  console.log(currentPage);
  
  if (currentPage.signLanguageVideo) {
    videoSource.src = currentPage.signLanguageVideo;
    videoElement.load(); // Recargar el video
    videoModal.style.display = 'flex'; // Mostrar el modal
  } else {
    console.warn('No hay video de lenguaje de señas disponible para esta página.');
  }
}

signLanguageButton.addEventListener('click', playSignLanguageVideo);
function closeSignLanguageVideo() {
  videoElement.pause(); // Pausar el video
  videoModal.style.display = 'none'; // Ocultar el modal
}
closeVideoButton.addEventListener('click', closeSignLanguageVideo);
