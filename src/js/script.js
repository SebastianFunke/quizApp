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
let usedHint = false;
let restarted = false;
let answered = false;
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
    },
    "5": {
        "question": "question",
        "answer1": "false",
        "answer2": "false",
        "answer3": "false",
        "answer4": "true",
        "hint": "ToDo: Hinweis",
        "correct": "answer4"
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
    scaleQuestionNumber(id);
    actualQuestion = id;

}

function scaleQuestionNumber(id) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('qNumber' + i).style.transform = "scale(1,1)";
    }
    document.getElementById('qNumber' + id).style.transform = "scale(2,2)";
}

function checkAnswer(answerNumber) {
    if (!answered) {
        if (questions[actualQuestion].correct == 'answer' + answerNumber) {
            console.log('correct');
            if (usedHint == false) {
                setStar(actualQuestion, 'green');
            } else {
                setStar(actualQuestion, 'yellow');
            }
            setAnswerBackgroundColor(answerNumber, 'green');

        } else {
            console.log('false');
            setStar(actualQuestion, 'red');
            setAnswerBackgroundColor(answerNumber, 'red');
            setAnswerBackgroundColor(questions[actualQuestion].correct.slice(6, 7), 'green');
        }



    }
    removeHoverClass();
    delay();
}


function removeHoverClass() {
    document.getElementById('answerBlock1').classList.remove('cardBlock');
    document.getElementById('answerBlock2').classList.remove('cardBlock');
    document.getElementById('answerBlock3').classList.remove('cardBlock');
    document.getElementById('answerBlock4').classList.remove('cardBlock');
}

function addHoverClass() {
    if (!document.getElementById('answerBlock1').classList.contains('cardBlock')) {
        document.getElementById('answerBlock1').classList.add('cardBlock');
        document.getElementById('answerBlock2').classList.add('cardBlock');
        document.getElementById('answerBlock3').classList.add('cardBlock');
        document.getElementById('answerBlock4').classList.add('cardBlock');
    }
}

function removeBackgroundColors() {
    document.getElementById('answerBlock1').classList.remove('falseBG');
    document.getElementById('answerBlock2').classList.remove('falseBG');
    document.getElementById('answerBlock3').classList.remove('falseBG');
    document.getElementById('answerBlock4').classList.remove('falseBG');
    document.getElementById('answerBlock1').classList.remove('correctBG');
    document.getElementById('answerBlock2').classList.remove('correctBG');
    document.getElementById('answerBlock3').classList.remove('correctBG');
    document.getElementById('answerBlock4').classList.remove('correctBG');
}

function setAnswerBackgroundColor(id, color) {
    let answerBlock = document.getElementById('answerBlock' + id);
    console.log('test: ' + id + ' ' + color);
    switch (color) {
        case 'red':
            answerBlock.classList.add('falseBG');
            break;
        case 'green':
            answerBlock.classList.add('correctBG');
            break;
    }
}

function hideHint() {
    usedHint = false;
    let hint = document.getElementById('hint');
    if (!hint.classList.contains('d-none')) {
        hint.classList.add('d-none');
    };

}

function setHint() {
    usedHint = true;
    let hint = document.getElementById('hint');
    hint.innerText = questions[actualQuestion].hint;
    hint.classList.remove('d-none');
}

function restart() {
    restarted = true;
    actualQuestion = 1;
    setQuestion(actualQuestion);
    hideHint();
    addHoverClass();
    for (let i = 1; i <= 5; i++) {
        setStar(i, 'blue');
    }
    answered = false;
    removeBackgroundColors();
    delay();

}

function setStar(id, color) {
    let star = document.getElementById('star' + id);
    star.src = "src/img/star_" + color + ".png";
}

async function delay() {
    answered = true;

    if (!restarted) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setQuestion(actualQuestion + 1);
        hideHint();
        addHoverClass();
        removeBackgroundColors();
    }
    restarted = false;
    answered = false;
}