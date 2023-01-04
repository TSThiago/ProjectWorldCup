// BOTÃO DE VER MAIS E VER MENOS
const buttonMore = document.getElementById('buttonMore');
const sectionQualifying = document.getElementById('qualifying');
const scoreboardHidden = document.getElementById('scoreboardHidden');
let isOpenMoreDetails = true;
function seeMoreDetails() {
    console.log('teste');
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '40vh';
        sectionQualifying.style.transition = '1s';
        scoreboardHidden.style.display = 'block';
        buttonMore.innerText = 'Ver menos';
        isOpenMoreDetails = false;
    }
}
function seeLessDetails() {
    console.log('teste');
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '25vh';
        sectionQualifying.style.transition = '1s';
        scoreboardHidden.style.display = 'none';
        buttonMore.innerHTML = 'Ver mais';
        isOpenMoreDetails = true;
    }
}
function openMoreDetails() {
    if (isOpenMoreDetails === true) {
        seeMoreDetails();
    }
    else {
        seeLessDetails();
    }
}
buttonMore === null || buttonMore === void 0 ? void 0 : buttonMore.addEventListener('click', openMoreDetails);
async function getQualifyingGames(country) {
    fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        const teamFirstClassification = document.getElementById('teamFirstClassification');
        const scoreFirstClassification = document.getElementById('scoreFirstClassification');
        const teamSecondClassification = document.getElementById('teamSecondClassification');
        const scoreSecondClassification = document.getElementById('scoreSecondClassification');
        const teamThirdClassification = document.getElementById('teamThirdClassification');
        const scoreThirdClassification = document.getElementById('scoreThirdClassification');
        const timesAQualifying = [];
        const timesBQualifying = [];
        const golstimeAQualifying = [];
        const golstimeBQualifying = [];
        data.forEach(game => {
            if (game.fase === 'Classificatória') {
                if (game.timeA === country || game.timeB === country) {
                    timesAQualifying.push(game.timeA);
                    timesBQualifying.push(game.timeB);
                    golstimeAQualifying.push(game.gols.timeA);
                    golstimeBQualifying.push(game.gols.TimeB);
                }
            }
        });
        if (teamFirstClassification && scoreFirstClassification !== null) {
            teamFirstClassification.innerHTML = `${timesAQualifying[0]} x ${timesBQualifying[0]}`;
            scoreFirstClassification.innerHTML = `${golstimeAQualifying[0]} x ${golstimeBQualifying[0]}`;
        }
        if (teamSecondClassification && scoreSecondClassification !== null) {
            teamSecondClassification.innerHTML = `${timesAQualifying[1]} x ${timesBQualifying[1]}`;
            scoreSecondClassification.innerHTML = `${golstimeAQualifying[1]} x ${golstimeBQualifying[1]}`;
        }
        if (teamThirdClassification && scoreThirdClassification !== null) {
            teamThirdClassification.innerHTML = `${timesAQualifying[2]} x ${timesBQualifying[2]}`;
            scoreThirdClassification.innerHTML = `${golstimeAQualifying[2]} x ${golstimeBQualifying[2]}`;
        }
    });
}
getQualifyingGames('Brasil');
async function gamesApi() {
    fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        renderGamesCards(data);
    });
}
gamesApi();
function renderGamesCards(gamesList) {
    const main = document.getElementById('main');
    gamesList.forEach(game => {
        if (game.fase === 'Oitavas-Final') {
            if (game.timeA === 'Brasil' || game.timeB === 'Brasil') {
                let gameCard = `<section class="penultimateGame">
                <h1 class="titleQualifying">Oitavas de final</h1>
                <div class="scoreboard">
                    <p>${game.timeA} x ${game.timeB}</p><br>
                    <p>${game.gols.timeA} x ${game.gols.TimeB}</p>
                </div>
            </section>`;
                main === null || main === void 0 ? void 0 : main.insertAdjacentHTML('beforeend', gameCard);
            }
        }
        if (game.fase === 'Quartas-Final') {
            if (game.timeA === 'Brasil' || game.timeB === 'Brasil') {
                let gameCard = `<section class="lastGame">
                <h1 class="titleQualifying">Quartas de Final</h1>
                <div class="scoreboard">
                    <p>${game.timeA} x ${game.timeB}</p><br>
                    <p>${game.gols.timeA} x ${game.gols.TimeB}</p>
                </div>
            </section>`;
                main === null || main === void 0 ? void 0 : main.insertAdjacentHTML('beforeend', gameCard);
            }
        }
    });
}
//# sourceMappingURL=brasil.js.map