function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
  
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);
}

window.addEventListener('keydown', playSound);


// Alternate way to remove transition by creating a function we can use it as set time out
  
// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }
  
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));