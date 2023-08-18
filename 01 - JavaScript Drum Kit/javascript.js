window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if(!audio) return;
    audio.currentTime = 0;//rewind to start
    audio.play();

    key.classList.add("playing");
})
function removeTransition(e) {
    console.log(e);
}

window.addEventListener("keyup", function(e){
    const key = document.querySelector(`.key[data-key = "${e.code}"]`);
    if(!key) return;
    key.classList.remove("playing");
})