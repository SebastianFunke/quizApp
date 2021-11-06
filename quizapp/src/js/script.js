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
let playerPoints = 0;
let questions = {
    "1": {
        "question": "Wieviele Softwareentwickler braucht man um eine Glühbirne zu wechseln?",
        "answer1": "5, einer hält die Glühbirne, 4 drehen die Leiter.",
        "answer2": "Keinen, es ist ein Hardwareproblem.",
        "answer3": "3",
        "answer4": "Keine Ahnung",
        "correct": "answer2",
        "hint1": "1",
        "hint2": "4"
    },
    "2": {
        "question": "Was bedeutet html ausgeschrieben?",
        "answer1": "Hello to Mankind Landscape",
        "answer2": "Heavy Table Mouse Lever",
        "answer3": "Highend total moderat Linguistik",
        "answer4": "Hypertext Markup Language",
        "correct": "answer4",
        "hint1": "1",
        "hint2": "2"
    },
    "3": {
        "question": "Mit welchem Befehl erstellt man eine waagerechte Linie in Html?",
        "answer1": "<HR>",
        "answer2": "<UL>",
        "answer3": "<LI>",
        "answer4": "<TABLE>",
        "correct": "answer1",
        "hint1": "3",
        "hint2": "4"
    },
    "4": {
        "question": "Wann begann die Einführung des Browsers?",
        "answer1": "1998",
        "answer2": "1988",
        "answer3": "1993",
        "answer4": "1983",
        "correct": "answer3",
        "hint1": "2",
        "hint2": "4"
    },
    "5": {
        "question": "Wie definiert man eine Variable von Typ String in Javascript?",
        "answer1": "text 'hello' => variable",
        "answer2": "let variable == 'hello'",
        "answer3": "String variable = 'hello'",
        "answer4": "let variable = 'hello'",
        "correct": "answer4",
        "hint1": "2",
        "hint2": "3"
    }
};

/**
 * initial Function, which is started at body onload
 */
function init() {
    setQuestion(actualQuestion);
}

/**
 * Displays the Question and the Answers from the requested id in JSON questions
 * Scales the actual Question Number under the Star
 * @param {integer} id - Position of the question in JSON questions
 */
function setQuestion(id) {
    document.getElementById('questionText').innerText = questions[id].question;
    document.getElementById('answerOne').innerText = questions[id].answer1;
    document.getElementById('answerTwo').innerText = questions[id].answer2;
    document.getElementById('answerThree').innerText = questions[id].answer3;
    document.getElementById('answerFour').innerText = questions[id].answer4;
    scaleQuestionNumber(id);
    actualQuestion = id;
}

/**
 * Scales the actual question Number to 200%
 * @param {integer} id - id of the requested Number under the star
 */
function scaleQuestionNumber(id) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('qNumber' + i).style.transform = "scale(1,1)";
    }
    document.getElementById('qNumber' + id).style.transform = "scale(2,2)";
}

/**
 * checks if the Answer is correct or wrong
 * if correct: call function correctAnswer
 * if wrong: call function falseAnswer
 * remove Hover classes from Answer Buttons
 * call function delay
 * @param {integer} answerNumber - position of the clicked answer 
 */
function checkAnswer(answerNumber) {
    console.log(answered);
    if (!answered) {
        if (questions[actualQuestion].correct == 'answer' + answerNumber) {
            correctAnswer(answerNumber);
        } else {
            falseAnswer(answerNumber);
        }
        usedHint = false;
        removeHoverClass();
        delay();
    }

}

/**
 * Is called, when the Answer is correct
 * Player gets 1 Point, if Hint is not used
 * and 0.5 point if hint is used
 * If hint is used call function setStar to set the Color of the Star to yellow
 * If hint is not used, call function setStar to set the Color of the Star to green
 * Call function setAnswerBackgroundColor to set the Background of the clicked answer to green
 * @param {integer} answerNumber - position of the clicked answer 
 */
function correctAnswer(answerNumber) {
    if (usedHint == false) {
        setStar(actualQuestion, 'green');
        playerPoints += 1;
    } else {
        setStar(actualQuestion, 'yellow');
        playerPoints += 0.5;
    }
    setAnswerBackgroundColor(answerNumber, 'green');
}

/**
 * Is called, when answer is wrong
 * call function setStar to set the Color of the Star to red
 * Call function setAnswerBackgroundColor to set the Background of the clicked answer to red
 * Call function setAnswerBackgroundColor to set the Background of the correct answer to green
 * @param {integer} answerNumber - position of the clicked answer 
 */
function falseAnswer(answerNumber) {
    setStar(actualQuestion, 'red');
    setAnswerBackgroundColor(answerNumber, 'red');
    setAnswerBackgroundColor(questions[actualQuestion].correct.slice(6, 7), 'green');
}

/**
 * Removes the Hover classes from the Answer containers
 */
function removeHoverClass() {
    document.getElementById('answerBlock1').classList.remove('cardBlock');
    document.getElementById('answerBlock2').classList.remove('cardBlock');
    document.getElementById('answerBlock3').classList.remove('cardBlock');
    document.getElementById('answerBlock4').classList.remove('cardBlock');
}

/**
 * checks if the Answer Container contains the hover class 'cardBlock'
 * if not, adding the Hover classes from the Answer containers
 * 
 */
function addHoverClass() {
    if (!document.getElementById('answerBlock1').classList.contains('cardBlock')) {
        document.getElementById('answerBlock1').classList.add('cardBlock');
        document.getElementById('answerBlock2').classList.add('cardBlock');
        document.getElementById('answerBlock3').classList.add('cardBlock');
        document.getElementById('answerBlock4').classList.add('cardBlock');
    }
}

/**
 * Removes all background color from the Answer Containers
 */
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

/**
 * Sets the backgroundColor of the requested AnswerBlock
 * @param {integer} id - id of the AnswerBlock to change color
 * @param {String} color - Color which the Answerblock should get
 */
function setAnswerBackgroundColor(id, color) {
    let answerBlock = document.getElementById('answerBlock' + id);
    switch (color) {
        case 'red':
            answerBlock.classList.add('falseBG');
            break;
        case 'green':
            answerBlock.classList.add('correctBG');
            break;
    }
}

/**
 * Shows the player two wrong Answers, which will get red Backgrounds
 * The Hint will be read from the JSON questions.
 */
function setHint() {
    if (!usedHint && !answered) {
        for (let i = 1; i <= 2; i++) {
            let id = questions[actualQuestion]['hint' + i]
            document.getElementById('answerBlock' + id).classList.add('falseBG');
        }
        usedHint = true;
    }
}

/**
 * removes the onclick Attribute from all answerBlocks to be sure, that no function is called while the delay time
 */
function disableAnswerButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('answerBlock' + i).removeAttribute('onclick');
    }
    document.getElementById('restart').removeAttribute('onclick');
    document.getElementById('hint').removeAttribute('onclick');
}

/**
 * Adding the onclick attribute to all answerBlocks
 */
function activateAnswerButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('answerBlock' + i).setAttribute('onclick', 'checkAnswer(' + i + ');')
    }
    document.getElementById('restart').setAttribute('onclick', 'restart()');
    document.getElementById('hint').setAttribute('onclick', 'setHint()');

}

/**
 * function to restart the quiz
 */
function restart() {
    restarted = true;
    actualQuestion = 1;
    setQuestion(actualQuestion);
    playerPoints = 0;
    addHoverClass();
    for (let i = 1; i <= 5; i++) {
        setStar(i, 'blue');
    }
    answered = false;
    removeBackgroundColors();
    hideResult();
    removeFlipClass();

}

/**
 * Changes the source from the requested Star, to get another color
 * possible colors: red, green, blue, yellow
 * Adding the flip class to the requested Star, so it will flip around
 * @param {integer} id - Position of the requested Star
 * @param {String} color - requested Color for the Star
 */
function setStar(id, color) {
    document.getElementById('star' + id).src = "src/img/star_" + color + ".png";
    document.getElementById('star' + id).classList.add('flip');
}

/**
 * removes flip class from all stars
 */
function removeFlipClass() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('star' + i).classList.remove('flip');
    }
}

/**
 * Function to wait 1.5 seconds
 * call function to load next question
 */
async function delay() {
    answered = true;
    disableAnswerButtons();
    //if (!restarted) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    loadNewQuestion();
    //}
    activateAnswerButtons();
    restarted = false;
    answered = false;
}

/**
 * call functions to display next question
 * if ther are no further questions show result
 */
function loadNewQuestion() {
    if (actualQuestion <= 4) {
        setQuestion(actualQuestion + 1);
        addHoverClass();
        removeBackgroundColors();
    } else {
        showResult();
    }
}

/**
 * add a class to blur the quiz
 * Display the Playerpoints and show the result screen
 */
function showResult() {
    document.getElementById('points').innerText = playerPoints + ' von 5 Punkten';
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('quiz').classList.add('blurred');
}

/**
 * Remove the blur class from quiz and hide the result class
 */
function hideResult() {
    document.getElementById('result').classList.add('d-none');
    document.getElementById('quiz').classList.remove('blurred');
}