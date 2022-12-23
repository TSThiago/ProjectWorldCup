"use strict";
// Show More Games Button
const button = document.getElementById('matchButton');
const matchScores = document.getElementById('matchScores');
let showMore = false;
button.addEventListener('click', (e) => {
    if (showMore) {
        matchScores.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 24vh; margin:0 auto 2vh auto;';
        button.textContent = 'Ver Mais';
        showMore = false;
    }
    else {
        matchScores.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 48vh; margin:0 auto 2vh auto;';
        button.textContent = 'Ver Menos';
        showMore = true;
    }
});
// Get API Datas
async function getAllMatches() {
    let arrayMatches = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos');
    arrayMatches = await arrayMatches.json();
    return arrayMatches;
}
//# sourceMappingURL=index.js.map