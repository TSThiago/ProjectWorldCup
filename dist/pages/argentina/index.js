"use strict";
const button = document.getElementById('matchButton');
const matchScores = document.getElementById('matchScores');
let showMore = false;
button.addEventListener('click', (e) => {
    if (showMore) {
        matchScores.style = 'heigth: 24vh';
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