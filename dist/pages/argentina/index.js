let menu3button = document.querySelector('.icon');
let menu3Mobile = document.querySelector('.mobileMenu');
const button = document.getElementById('groupButton');
const groupStageBox = document.getElementById('groupStage');
const groupBox = document.getElementById('groupBox');
const knockoutBox = document.getElementById('knockoutBox');
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
    renderMatches(matches, "Argentina");
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
function renderMatches(matches, nationalTeam) {
    let divCreated = false;
    matches.forEach(match => {
        if ((match.timeA === nationalTeam && match.fase === 'Classificatória') || (match.timeB === nationalTeam && match.fase === 'Classificatória')) {
            let stageBox = `<div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>`;
            groupBox === null || groupBox === void 0 ? void 0 : groupBox.insertAdjacentHTML('beforeend', stageBox);
        }
        if ((match.timeA === nationalTeam && match.fase != 'Classificatória') || (match.timeB === nationalTeam && match.fase != 'Classificatória')) {
            let gameBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            knockoutBox === null || knockoutBox === void 0 ? void 0 : knockoutBox.insertAdjacentHTML('beforeend', gameBox);
        }
    });
}
//# sourceMappingURL=index.js.map