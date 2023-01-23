let startButton;
let stopButton;
let animationSelector;
let textArea;
let animationArray;
let interval;

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

    animationArray = textArea.value.split("=====\n");
    interval = setInterval(updateAnimation, 250);
}

function stopAnimation() {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(interval);
    loadAnimation();
}

function loadAnimation() {
    let animationName = animationSelector.value;
    textArea.value = ANIMATIONS[animationName];
}

function updateAnimation() {
    let firstAnimation = animationArray.shift();
    textArea.value = firstAnimation;
    animationArray.push(firstAnimation);
}