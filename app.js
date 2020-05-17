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