"use strict";
const buttonMore = document.getElementById('buttonMore');
const sectionQualifying = document.getElementById('qualifying');
const scoreboardHidden = document.getElementById('scoreboardHidden');
function seeMore() {
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '35vh';
        sectionQualifying.style.transition = '1s';
        scoreboardHidden.style.display = 'block';
        buttonMore.innerHTML = 'Ver menos';
    }
}
function seeLess() {
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '25vh';
        sectionQualifying.style.transition = 'none';
        scoreboardHidden.style.display = 'none';
        buttonMore.innerHTML = 'Ver mais';
    }
}
buttonMore === null || buttonMore === void 0 ? void 0 : buttonMore.addEventListener('click', seeMore);
//# sourceMappingURL=brasil.js.map