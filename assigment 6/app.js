const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", " <js>", "<script>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: [ "the <head> section", "both the <head> section and the body section", "the <body> section"],
        answer: "Both the <head> section and the <body> section are correct "
    },
    {
        question: "Is JavaScript case-sensitive?",
        options: [ "yes","no"],
        answer: "false"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [, "function = myFunction()","function myFunction()","function:myFunction()"],
        answer: "function myFunction()  "
    },
    
];



let score = 0;

const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-button");
const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");

function startQuiz() {
    score = 0;
    questionContainer.innerHTML = '';
    questions.forEach((currentQuestion, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question-block");
        questionElement.innerHTML = `
            <h3>${index + 1}. ${currentQuestion.question}</h3>
            <div class="options" id="options-${index}"></div>
        `;
        questionContainer.appendChild(questionElement);

        const optionsElement = document.getElementById(`options-${index}`);
        currentQuestion.options.forEach(option => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question-${index}`; 
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            optionsElement.appendChild(label);
            optionsElement.appendChild(document.createElement("br"));
        });
    });
    submitButton.classList.remove("hide");
}

function calculateScore() {
    questions.forEach((currentQuestion, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === currentQuestion.answer) {
            score++;
        }
    });
    showScore();
}

function showScore() {
    const percentage = (score / questions.length) * 100;
    questionContainer.classList.add("hide");
    scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
    percentageElement.textContent = `Your Percentage: ${percentage.toFixed(2)}%`;
    scoreElement.classList.remove("hide");
    percentageElement.classList.remove("hide");
}

submitButton.addEventListener("click", calculateScore);

startQuiz();
// function calculateScore() {
//     score = 0; 
//     questions.forEach((currentQuestion, index) => {
//         const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
//         console.log(`Question ${index}: Selected Option - ${selectedOption ? selectedOption.value : 'None'}`);
//         if (selectedOption && selectedOption.value === currentQuestion.answer) {
//             score++;
//         }
//     });
//     showScore();
// }
