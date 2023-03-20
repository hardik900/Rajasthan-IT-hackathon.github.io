const quizDB = [
    {
        question: "Q1: I found myself getting upset by quite trivial things",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time.",
        c: "Applied to me a considerable degree, or a good part of the time.",
        d: "Applied to me very much, or most of the time.",
        ans: "ans4"
    },
    {
        question: "Q2: I was aware of dryness of my mouth",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time.",
        c: "Applied to me a considerable degree, or a good part of the time.",
        d: "Applied to me very much, or most of the time.",
        ans: "ans1"
    },
    {
        question: "Q3: I couldn't seem to experience any positive feeling at all",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time.",
        c: "Applied to me a considerable degree, or a good part of the time.",
        d: "Applied to me very much, or most of the time.",
        ans: "ans4"
    },
    {
        question: "Q4 : I just couldn't seem to get going",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time.",
        c: "Applied to me a considerable degree, or a good part of the time.",
        d: "Applied to me very much, or most of the time.",
        ans: "ans1"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer); 

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3>You Stress Test Score is ${score} out of ${quizDB.length}.</h3>
        `;

        showScore.classList.remove('scoreArea');
        document.getElementById('submit').style.display="none";
        document.getElementById('start-question').style.display="none";
    }
});

