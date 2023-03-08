const quizbttn = document.getElementById('start')
const timerleft = document.getElementById('time')
const startquiz = document.getElementById("startquiz")
const quizSection = document.getElementById('quizsect')
const question = document.getElementById('question')
const anwserA = document.getElementById('answerA')
const anwserB = document.getElementById('answerB')
const anwserC = document.getElementById('answerC')
const anwserD = document.getElementById('answerD')
//1. create an array of questions
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
function pageload() {
    quizSection.style = "display: none";
}
pageload()

var questionCount = 0
function runQuiz() {
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
var sec = 3
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
//6. end quiz and input uzer intials
//8. save highscore in local stoarge
//9. redirect them to highscore

