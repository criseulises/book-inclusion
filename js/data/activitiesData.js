const activityData = [
    [ 
        {
            activityName: "Select the correct image",
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
            activityName: "Select the correct image",
            type: "image_selection",
            text: 'Selecciona la imagen que corresponda a la palabra "perro".',
            word: "Perro",
            images: [
                { src: "../assets/images/activities/hombre.png", alt: "Hombre", correct: false },
                { src: "../assets/images/activities/perro.png", alt: "Perro", correct: false },
                { src: "../assets/images/activities/niña.png", alt: "Niña", correct: false },
                { src: "../assets/images/activities/casa.png", alt: "Casa", correct: true },
                { src: "../assets/images/activities/mujer.png", alt: "Mujer", correct: false },
                { src: "../assets/images/activities/yuca.png", alt: "Yuca", correct: false },
            ],
        },
    ],
    [
        {
            activityName: "Select the correct image",
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
            activityName: "Identify the correct word",
            type: "word selection",
            text: "Select the word that describes this image:",
            word: "dog",
            images: [
                { src: "assets/images/activities/dog.png", alt: "dog", correct: true },
                { src: "assets/images/activities/house.png", alt: "house", correct: false },
                { src: "assets/images/activities/woman.png", alt: "woman", correct: false },
                { src: "assets/images/activities/yuca.png", alt: "yuca", correct: false },
            ],
        },
        {
            activityName: "Find the object",
            type: "image selection",
            text: "Select the image that corresponds to the word:",
            word: "yuca",
            images: [
                { src: "assets/images/activities/woman.png", alt: "woman", correct: false },
                { src: "assets/images/activities/girl.png", alt: "girl", correct: false },
                { src: "assets/images/activities/yuca.png", alt: "yuca", correct: true },
                { src: "assets/images/activities/man.png", alt: "man", correct: false },
            ],
        },
    ],
]

export default activityData
