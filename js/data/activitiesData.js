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
            activityName: "Select the missing vowel",
            type: "vowel_selection",
            text: "Selecciona la vocal que falta en la palabra",
            word: "Y_ca", // Underscore represents the missing vowel
            options: ["a", "e", "i", "o", "u"], // Options to choose from
            correctAnswer: "u", // Correct vowel
        },
        {
            activityName: "Select the missing vowel",
            type: "vowel_selection",
            text: "Selecciona la vocal que falta en la palabra",
            word: "Platano", // Underscore represents the missing vowel
            options: ["a", "e", "i", "o", "u"], // Options to choose from
            correctAnswer: "u", // Correct vowel
        },
    ],
]

export default activityData
