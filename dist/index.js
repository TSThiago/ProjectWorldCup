"use strict";
const button = document.getElementById('matchButton');
const matchBox = document.getElementById('matchScores');
let showMore = false;
button.addEventListener('click', (e) => {
    if (showMore) {
        matchBox.style.height = '24vh';
        button.textContent = 'Ver Mais';
        showMore = false;
    }
    else {
        matchBox.style.height = '60vh';
        button.textContent = 'Ver Menos';
        showMore = true;
    }
});
//# sourceMappingURL=index.js.map