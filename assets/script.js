const quizbttn = document.getElementById('#quizstart')
const timerleft = document.getElementById('#timestamp')

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

//3. create timer abd start quiz

function setTime () {
    var sec = 15
    setInterval(()=>{
timerleft.innerHTML = sec;
sec --;
    }, 1000)
        }


//4. display first question with 4 choices
//5. manage user decision
//6. end quiz and input uzer intials
//8. save highscore in local stoarge
//9. redirect them to highscore

quizbttn.addEventListener('click', setTime);