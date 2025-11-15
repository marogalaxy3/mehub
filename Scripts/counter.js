let table = document.getElementById('table')
const game = [["","",""],["","",""],["","",""]]
let isFinished = false
let availableButtons = 9
let announcer = document.getElementById('announcer')

let currentPlayer = "x"

function switchPlayer() {
    if (currentPlayer == "x") {
        currentPlayer = "o"
    } else if (currentPlayer == "o") {
        currentPlayer = "x"
    }

    console.log("NOW "+currentPlayer.toUpperCase()+" PLAYS")
    announcer.textContent = currentPlayer.toUpperCase()+"'S TURN"
}

function finishGame(tie) {
    isFinished = true
    if (tie) {
        console.log("tie")
        announcer.textContent = "TIE"
        return
    }
    console.log(currentPlayer+" won")
    announcer.textContent = currentPlayer.toUpperCase()+" WON"
}

function checkGame() {
    // HORIZONTAL
    if ((game[0][0] != "") && (game[0][0] == game[0][1]) &&  (game[0][1] == game[0][2])) {
        finishGame()
        return
    }

    if ((game[1][0] != "") && (game[1][0] == game[1][1]) &&  (game[1][1] == game[1][2])) {
        finishGame()
        return
    }

    if ((game[2][0] != "") && (game[2][0] == game[2][1]) &&  (game[2][1] == game[2][2])) {
        finishGame()
        return
    }

    // VERTICAL

    if ((game[0][0] != "") && (game[0][0] == game[1][0]) &&  (game[1][0] == game[2][0])) {
        finishGame()
        return
    }

    if ((game[0][1] != "") && (game[0][1] == game[1][1]) &&  (game[1][1] == game[2][1])) {
        finishGame()
        return
    }

    if ((game[0][2] != "") && (game[0][2] == game[1][2]) &&  (game[1][2] == game[2][2])) {
        finishGame()
        return
    }

    // DIAGINAL

    if ((game[0][0] != "") && (game[0][0] == game[1][1]) &&  (game[1][1] == game[2][2])) {
        finishGame()
        return
    }

    if ((game[0][2] != "") && (game[0][2] == game[1][1]) &&  (game[1][1] == game[2][0])) {
        finishGame()
        return
    }

    if (availableButtons <= 0) {
        finishGame(true)
        return
    }

    switchPlayer()
}

function play(button, row, col) {
    if (isFinished) {
        return
    }

    let space = game[row][col]
    if (space=="") {
        game[row][col] = currentPlayer
        
        console.log(button.innerText)
        button.innerHTML = currentPlayer
        availableButtons -= 1
        checkGame()
    } else {
        console.log("already filled")
    }

}
