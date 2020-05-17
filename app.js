const play = document.querySelector('.material-icons');
const song = document.querySelector('#music');

play.addEventListener('click', function () {
    if (song.paused) {
        song.play();
        this.classList.add('black');
    } else {
        song.pause();
        this.classList.remove('black');
    }
});

const numShapes = 5
const maxSize = 50

let colors = []
function setup() {
    colors = [
        color(210, 202, 177),
        color(235, 231, 219),
        color(255, 130, 130),
        color(255, 0, 0),
    ]
    createCanvas(window.innerWidth, window.innerHeight)
    noStroke()
}

function randomNumber(size) {
    return Math.floor(Math.random() * size)
}

function randomChoice(choices) {
    let index = randomNumber(choices.length)
    return choices[index]
}

function mouseClicked() {
    let sideLength = randomNumber(maxSize)
    fill(randomChoice(colors))
    ellipse(mouseX, mouseY, sideLength, sideLength)
}


window.onresize = () => {
    resizeCanvas(window.innerWidth, window.innerHeight)
}