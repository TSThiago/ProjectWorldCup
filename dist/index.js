"use strict";
const button = document.getElementById('matchButton');
const matchScores = document.getElementById('matchScores');
let showMore = false;
button.addEventListener('click', (e) => {
    if (showMore) {
        matchScores.style.cssText = "border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 48vh; margin:0 auto 2vh auto";
        button.textContent = 'Ver Mais';
        showMore = false;
    }
    else {
        matchScores.style.height = '60vh';
        button.textContent = 'Ver Menos';
        showMore = true;
    }
});
//# sourceMappingURL=index.js.map