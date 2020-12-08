const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(interval);
    }

    loadText.textContent = `${load}%`;
    loadText.style.opacity = 1 - load / 100;
    background.style.filter = `blur(${load * -30 / 70 + 30}px)`;
}