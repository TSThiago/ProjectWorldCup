let menu3button = document.querySelector('.icon');
let menu3Mobile = document.querySelector('.mobileMenu');
const button = document.getElementById('groupButton');
const groupStageBox = document.getElementById('groupStage');
const groupBox = document.getElementById('groupBox');
const lasts16 = document.getElementById('last16');
const quarter = document.getElementById('quarterFinals');
const semi = document.getElementById('semiFinals');
const final = document.getElementById('final');
// Menu Mobile
menu3button.addEventListener('click', (e) => {
    if (menu3Mobile.style.display === 'block') {
        menu3Mobile.style.display = 'none';
    }
    else {
        menu3Mobile.style.display = 'block';
    }
});
// Show More Games Button
let showMore = false;
function ShowMoreMatches() {
    button.addEventListener('click', (e) => {
        if (showMore) {
            groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.2s; transition-timing-function: linear; height: 40vh; margin:0 auto 2vh auto;';
            button.textContent = 'Ver Mais';
            showMore = false;
        }
        else {
            groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.2s; transition-timing-function: linear; height: 67vh; margin:0 auto 2vh auto;';
            button.textContent = 'Ver Menos';
            showMore = true;
        }
    });
}
// Get API Datas
getAllMatches()
    .then(function (data) {
    return getNationalTeamMatches("Argentina", data);
})
    .then(function (matches) {
    renderMatches(matches);
});
ShowMoreMatches();
async function getAllMatches() {
    let arrayMatches = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos');
    arrayMatches = await arrayMatches.json();
    return arrayMatches;
}
async function getNationalTeamMatches(nationalTeam, data) {
    let arrayNationalTeamMatches = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].timeA === nationalTeam || data[index].timeB === nationalTeam) {
            let match;
            match = data[index];
            arrayNationalTeamMatches.push(match);
        }
    }
    return arrayNationalTeamMatches;
}
function renderMatches(matches) {
    let divCreated = false;
    matches.forEach(match => {
        if ((match.timeA === 'Argentina' && match.fase === 'Classificatória') || (match.timeB === 'Argentina' && match.fase === 'Classificatória')) {
            let stageBox = `<div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>`;
            groupBox === null || groupBox === void 0 ? void 0 : groupBox.insertAdjacentHTML('beforeend', stageBox);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Oitavas-Final') || (match.timeB === 'Argentina' && match.fase === 'Oitavas-Final')) {
            let last16Box = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            lasts16 === null || lasts16 === void 0 ? void 0 : lasts16.insertAdjacentHTML('beforeend', last16Box);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Quartas-Final') || (match.timeB === 'Argentina' && match.fase === 'Quartas-Final')) {
            let quarterBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            quarter === null || quarter === void 0 ? void 0 : quarter.insertAdjacentHTML('beforeend', quarterBox);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Semi-Final') || (match.timeB === 'Argentina' && match.fase === 'Semi-Final')) {
            let semiBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            semi === null || semi === void 0 ? void 0 : semi.insertAdjacentHTML('beforeend', semiBox);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Final') || (match.timeB === 'Argentina' && match.fase === 'Final')) {
            let finalBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            final === null || final === void 0 ? void 0 : final.insertAdjacentHTML('beforeend', finalBox);
        }
    });
}
//# sourceMappingURL=index.js.map