const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winningScore = 6;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) { //if game over is false (still going)
        p1Score += 1; //add one to score
        if (p1Score === winningScore) { //if that score matches the winning score
            isGameOver = true; //set game over to true
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.innerText = p1Score; //change span innerText to p1Score
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) { //if game over is false (still going)
        p2Score += 1; //add one to score
        if (p2Score === winningScore) { //if that score matches the winning score
            isGameOver = true; //set game over to true
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.innerText = p2Score; //change span innerText to p1Score
    }
})

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value) //we have access to the select object in here by using this
    reset();
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p1Score;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

