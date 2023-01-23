let startButton;
let stopButton;
let animationSelector;
let textArea;

window.onload = function() {
    textArea = document.getElementById("text-area");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    animationSelector = document.getElementById("animation");

    startButton.onclick = startAnimation;
    stopButton.onclick = stopAnimation;
    animationSelector.onchange = loadAnimation;
}

function startAnimation() {
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopAnimation() {
    startButton.disabled = false;
    stopButton.disabled = true;
}

function loadAnimation() {
    let animationName = animationSelector.value;
    textArea.value = ANIMATIONS[animationName];
}
