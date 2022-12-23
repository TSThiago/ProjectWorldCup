const button = document.getElementById('groupButton');
const groupBox = document.getElementById('groupBox');
const lasts16 = document.getElementById('last16');
const quarter = document.getElementById('quarterFinals');
const semi = document.getElementById('semiFinals');
const final = document.getElementById('final');
// Show More Games Button
let showMore = false;
button.addEventListener('click', (e) => {
    if (showMore) {
        groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 30vh; margin:0 auto 2vh auto;';
        button.textContent = 'Ver Mais';
        showMore = false;
    }
    else {
        groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 57vh; margin:0 auto 2vh auto;';
        button.textContent = 'Ver Menos';
        showMore = true;
    }
});
// Get API Datas
class Match {
}
getAllMatches()
    .then(function (data) {
    console.log(data);
    return getNationalTeamMatches("Argentina", data);
})
    .then(function (matches) {
    renderMatches(matches);
});
async function getAllMatches() {
    let arrayMatches = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos');
    arrayMatches = await arrayMatches.json();
    return arrayMatches;
}
async function getNationalTeamMatches(nationalTeam, data) {
    let arrayNationalTeamMatches = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].timeA === nationalTeam || data[index].timeB === nationalTeam) {
            let match = new Match();
            match.timeA = data[index].timeA;
            match.timeB = data[index].timeB;
            match.data = data[index].data;
            match.gols.TimeA = data[index].gols.timeA;
            match.gols.TimeB = data[index].gols.TimeB;
            match.fase = data[index].fase;
            arrayNationalTeamMatches.push(match);
            console.log(arrayNationalTeamMatches);
        }
    }
    return arrayNationalTeamMatches;
}
function renderMatches(matches) {
    matches.forEach(match => {
        // if ((match.timeA === 'Argentina' && match.fase === 'Classificatória') || (match.timeB === 'Argentina' && match.fase === 'Classificatória')) {
        //     let last16Box
        // }
        if ((match.timeA === 'Argentina' && match.fase === 'Oitavas-Final') || (match.timeB === 'Argentina' && match.fase === 'Oitavas-Final')) {
            let last16Box = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            lasts16 === null || lasts16 === void 0 ? void 0 : lasts16.insertAdjacentHTML('beforeend', last16Box);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Quartas-Final') || (match.timeB === 'Argentina' && match.fase === 'Quartas-Final')) {
            let quarterBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            quarter === null || quarter === void 0 ? void 0 : quarter.insertAdjacentHTML('beforeend', quarterBox);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Semi-Final') || (match.timeB === 'Argentina' && match.fase === 'Semi-Final')) {
            let semiBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            semi === null || semi === void 0 ? void 0 : semi.insertAdjacentHTML('beforeend', semiBox);
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Final') || (match.timeB === 'Argentina' && match.fase === 'Final')) {
            let finalBox = `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`;
            final === null || final === void 0 ? void 0 : final.insertAdjacentHTML('beforeend', finalBox);
        }
    });
}
//# sourceMappingURL=index.js.map