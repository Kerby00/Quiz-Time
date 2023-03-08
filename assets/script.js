const quizbttn = document.getElementById('start')
const timerleft = document.getElementById('time')
const startquiz = document.getElementById("startquiz")
const quizSection = document.getElementById('quizsect')
const question = document.getElementById('question')
const anwserA = document.getElementById('answerA')
const anwserB = document.getElementById('answerB')
const anwserC = document.getElementById('answerC')
const anwserD = document.getElementById('answerD')
const endpage = document.getElementById('end')
const Form = document.getElementById('userForm')
const userInit = document.getElementById('inits')
//1. create an array of questionsS
var questions = [
    {
        q: "Commonlly used data types DO NOT include:",
        a: 'strings',
        b: 'boolean',
        c: 'alerts',
        d: 'numbers',
        anwser: 'c'
    },
    {
        q: 'Arrays in JavaScript can be used to store:',
        a: 'numbers and strings',
        b: 'other arrays',
        c: 'booleans',
        d: 'all of the above',
        anwser: 'd'
    }, {
        q: 'The condition in an if/else statement is enclosed within:',
        a: 'quotes',
        b: 'perantheses',
        c: 'square bracets',
        d: 'curly bracets',
        anwser: 'b'
    }
]
//2. start button to begin quiz
let storedUsers;
function pageload() {
    quizSection.style = "display: none";
    endpage.style = "display:none";
    if(JSON.parse(localStorage.getItem('highscore')) === null) {
        storedUsers = []
    } else {
        storedUsers = JSON.parse(localStorage.getItem('highscore'))
    }
    console.log(storedUsers)
}
pageload()
var score = 0
var questionCount = 0
function runQuiz() {
    if (questionCount === 3) {
        return endQuiz();
    }
    timerleft.innerHTML = 'TIME: ' + sec;
    question.innerHTML = questions[questionCount].q;
    anwserA.innerHTML = questions[questionCount].a;
    anwserB.innerHTML = questions[questionCount].b;
    anwserC.innerHTML = questions[questionCount].c;
    anwserD.innerHTML = questions[questionCount].d
}

quizbttn.addEventListener('click', function () {
    setTime();
    startquiz.style = "display: none";
    quizSection.style = "display: block";
    runQuiz()

});
//3. create timer abd start quiz
var sec = 12
function setTime() {
    var Intervali = setInterval(function () {
        timerleft.innerHTML = 'TIME: ' + sec;
        sec--;
        if (sec === 0) {
            clearInterval(Intervali)
        }
    }, 1000)
}


//4. display first question with 4 choices

//5. manage user decision
function SelectionA() {
    if (questions[questionCount].anwser === 'a') {
        questionCount++;
        score += 10;
        console.log('correct')
    } else {
        questionCount++;
        sec -= 5;
        console.log('wrong')
    } runQuiz()
}
function SelectionB() {
    if (questions[questionCount].anwser === 'b') {
        questionCount++;
        score += 10;
        console.log('correct')
    } else {
        questionCount++;
        sec -= 5;
        console.log('wrong')
    } runQuiz()
}
function SelectionC() {
    if (questions[questionCount].anwser === 'c') {
        questionCount++;
        score += 10;
        console.log('correct')
    } else {
        questionCount++;
        sec -= 5;
        console.log('wrong')
    } runQuiz()
}
function SelectionD() {
    if (questions[questionCount].anwser === 'd') {
        questionCount++;
        score += 10;
        console.log('correct')
    } else {
        questionCount++;
        sec -= 5;
        console.log('wrong')
    } runQuiz()
}
anwserA.addEventListener('click', SelectionA);
anwserB.addEventListener('click', SelectionB);
anwserC.addEventListener('click', SelectionC);
anwserD.addEventListener('click', SelectionD);
//6. end quiz and input uzer intials
function endQuiz() {
    quizSection.style = 'display: none';
    endpage.style = 'display: flex'
}
//8. save highscore in local stoarge
Form.addEventListener('submit', saveScore);

function saveScore(e) {
    e.preventDefault()
    newScore = {
        User: userInit.value,
        userScore: score
    };
    storedUsers.push(newScore)
    localStorage.setItem('highscore', JSON.stringify(storedUsers))
}
//9. redirect them to highscore

