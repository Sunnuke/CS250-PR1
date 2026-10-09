// aslingo.js

// Testing ASL "library" – later you’ll load this from your backend/DB
// const aslSigns = [
//     { id: 1, word: "Hello", src: "https://www.youtube.com/embed/FVjpLa8GqeM?rel=0%3Bautoplay%3D1" },
//     { id: 2, word: "Thank you", src: "https://www.youtube.com/embed/IvRwNLNR4_w?rel=0%3Bautoplay%3D1" },
//     { id: 3, word: "Yes", src: "https://www.youtube.com/embed/0usayvOXzHo?rel=0%3Bautoplay%3D1" },
// ];

// Version 2
const ASLSignsLibrary = [
    // Objects covering ASL phases

    // Thank you!
    { 
        id: 1,
        word: "Hello",
        sources: [
            "https://www.youtube.com/watch?v=IvRwNLNR4_w"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Hello"]
    },
    // Nice to meet you
    { 
        id: 2,
        word: "Nice to meet you",
        sources: [
            "https://www.youtube.com/watch?v=F7Wjb_AIvMA"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Nice to meet you"]
    },
    // Hello
    { 
        id: 3,
        word: "Hello",
        sources: [
            "https://www.youtube.com/watch?v=FVjpLa8GqeM"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Hello"]
    },
    // I love you! (Version)
    { 
        id: 4,
        word: "I love you!",
        sources: [
            "https://www.youtube.com/watch?v=rwBDGMQmmXk"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["I love you!"]
    },
    // Good Morning (Compound version)
    { 
        id: 5,
        word: "Good Morning",
        sources: [
            "https://www.youtube.com/watch?v=HWTOUetDsOk"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Good Morning"]
    },
    // Happy (one-handed version)
    { 
        id: 6,
        word: "Happy",
        sources: [
            "https://www.youtube.com/watch?v=N5GLqFNS3Uo"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Happy"]
    },
    // Help you
    { 
        id: 7,
        word: "Help you",
        sources: [
            "https://www.youtube.com/watch?v=JBlD9-AsQtM"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Help you"]
    },
    // Yes
    { 
        id: 8,
        word: "Yes",
        sources: [
            "https://www.youtube.com/watch?v=0usayvOXzHo"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["Yes"]
    },
    // See you later
    { 
        id: 9,
        word: "See you later",
        sources: [
            "https://www.youtube.com/watch?v=3n81DT4NTOw"
        ],
        questions: ["Please watch the following video, then select the best answer that describes what is being signed?"],
        answers: ["See you later"]
    },
    //###################################################################################

    //  Objects covering ASL ABC's
    // A
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // B
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // C
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // D
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // E
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // F 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // G 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // H 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // I 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // J 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // K 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // L 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // M 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // N 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // O 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // P 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // Q 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // R 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // S 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // T 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // U 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // V 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // W 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // X 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // Y 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    // Z 
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    },
    //###################################################################################
    { 
        id: #,
        word: "",
        sources: [
            ""
        ],
        questions: [""],
        answers: []
    }
];