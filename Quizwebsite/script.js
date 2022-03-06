const quiz = document.getElementById('quizbox');
const answerOption = document.querySelectorAll('.answer');
const questionToAttempt = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const submitButton = document.getElementById('submit');

const questionList = [
    {
        question: "What is the full form of WWW?",
        a: "Wide World Web",
        b: "Web Wide World",
        c: "World Wide Web",
        d: "Web World Wide",
        correctanswer: "c",
    },
    {
        question: "What is the full form of HTTP?",
        a: "Hyper Text Transport Protocol",
        b: "Hyper Transfer Text Protocol",
        c: "Hyper Text Teleport Protocol",
        d: "Hyper Text Transfer Protocol",
        correctanswer: "d",
    },
    {
        question: "What is the full form of HTML?",
        a: "Hyper Text Markin Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Making Language",
        d: "Hyper Text Markup Literals",
        correctanswer: "b",
    },
    {
        question: "What is the full form of FTP?",
        a: "File Transfer Protocol",
        b: "File Text Protocol",
        c: "File Teleport Protocol",
        d: "File Transport Protocol",
        correctanswer: "a",
    },
    {
        question: "What is the full form of WiFi?",
        a: "Wireless Fiber",
        b: "Wireless Fidelity",
        c: "Wired Fixture",
        d: "Wired Fidelity",
        correctanswer: "b",
    },
    ];

let currentQuestion = 0;
let score = 0;


function getSelected() {
    let answer;

    answerOption.forEach(answers => {
        if(answers.checked) {
            answer = answers.id;
        }
    })

    return answer;
}

function showQuiz() {
    uncheckOptions();    
    const currentquestionList = questionList[currentQuestion];
    questionToAttempt.innerText = currentquestionList.question;
    answer1.innerText = currentquestionList.a;
    answer2.innerText = currentquestionList.b;
    answer3.innerText = currentquestionList.c;
    answer4.innerText = currentquestionList.d;
}

function uncheckOptions() {
    answerOption.forEach(answers => answers.checked = false);
}  

showQuiz();

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === questionList[currentQuestion].correctanswer) {
            score++;
        }

        currentQuestion++;
        if(currentQuestion < questionList.length) {
            showQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You give ${score} correct answers out of ${questionList.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
});