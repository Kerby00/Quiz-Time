const highscores = document.getElementById('scores')

function retreivescores () {
     let storedUsers = JSON.parse(localStorage.getItem('highscore'));

     for (let i=0; i < storedUsers.length; i++) {
        let div = document.createElement('div')
        div.innerHTML =
        "User:" + storedUsers[i].User + "Score: " + storedUsers[i].userScore;
        highscores.append(div)
     }
}

retreivescores()