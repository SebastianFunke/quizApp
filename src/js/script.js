/**
 * With this Function you are able to save Arrays in local Storage
 * The Array will be compiled to a JSON, which is saved to local Storage
 * @param {String} key - name of the local Key
 * @param {Array} array - Values to save
 */
function saveArrayToLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

/**
 * With this Function you are able to load an Array from local Storage
 * Reads the JSON from Loacalstorage and compile it to an Array
 * @param {String} key - name of the local Key
 * @returns an Array with the Values from Local Storage
 */
function loadArrayFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


let actualQuestion = 1;
let questions = {
    "1": {
        "question": "Wieviele Softwareentwickler braucht man um eine Glühbirne zu wechseln?",
        "answer1": "5. Einer hält die Glühbirne, 4 drehen die Leiter.",
        "answer2": "Keinen, es ist ein Hardwareproblem.",
        "answer3": "3",
        "answer4": "Keine Ahnung",
        "hint": "ToDo: Hinweis",
        "correct": "answer2"
    },
    "2": {
        "question": "Was bedeutet html ausgeschrieben?",
        "answer1": "Hello to Mankind Landscape",
        "answer2": "Heavy Table Mouse Lever",
        "answer3": "Highend total moderat Linguistik",
        "answer4": "Hypertext Markup Language",
        "hint": "ToDo: Hinweis",
        "correct": "answer4"
    },
    "3": {
        "question": "Mit welchem Befehl erstellt man eine waagerechte Linie in Html?",
        "answer1": "<HR>",
        "answer2": "<UL>",
        "answer3": "<LI>",
        "answer4": "<TABLE>",
        "hint": "ToDo: Hinweis",
        "correct": "answer1"
    },
    "4": {
        "question": "Wann begann die Einführung des Browsers?",
        "answer1": "1998",
        "answer2": "1988",
        "answer3": "1993",
        "answer4": "1983",
        "hint": "ToDo: Hinweis",
        "correct": "answer3"
    }


};

function init() {
    setQuestion(actualQuestion);
}

function setQuestion(id) {
    document.getElementById('questionText').innerText = questions[id].question;
    document.getElementById('answerOne').innerText = questions[id].answer1;
    document.getElementById('answerTwo').innerText = questions[id].answer2;
    document.getElementById('answerThree').innerText = questions[id].answer3;
    document.getElementById('answerFour').innerText = questions[id].answer4;
    actualQuestion = id;
}

function checkAnswer(answerNumber) {
    if (questions[actualQuestion].correct == 'answer' + answerNumber) {
        console.log('correct');
    } else {
        console.log('false');
    }
}

function sendAnswer(id) {
    console.log('test' + id);
}

function setStar(id, color) {
    let star = document.getElementById('star' + id);
    switch (color) {
        case 'red':
            star.src = "src/img/star_red.png";
            break;
        case 'green':
            star.src = "src/img/star_green.png";
            break;
        case 'yellow':
            star.src = "src/img/star_yellow.png";
            break;
        case 'blue':
            star.src = "src/img/star_raw.png";
            break;
    }

}