"use strict";
// BOTÃO DE VER MAIS E VER MENOS
const buttonMore = document.getElementById('buttonMore');
const sectionQualifying = document.getElementById('qualifying');
const scoreboardHidden = document.getElementById('scoreboardHidden');
let isOpenMoreDetails = true;
function seeMoreDetails() {
    console.log('teste');
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '35vh';
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
    await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
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
async function getPenultimateGame(country) {
    await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        const teamPenultimateGame = document.getElementById('teamPenultimateGame');
        const scorePenultimateGame = document.getElementById('scorePenultimateGame');
        let timeAPenultimateGame = '';
        let timeBPenultimateGame = '';
        let golTimeAPenultimateGame = 0;
        let golTimeBPenultimateGame = 0;
        data.forEach(game => {
            if (game.fase === 'Oitavas-Final') {
                if (game.timeA === country || game.timeB === country) {
                    timeAPenultimateGame = game.timeA;
                    timeBPenultimateGame = game.timeB;
                    golTimeAPenultimateGame = game.gols.timeA;
                    golTimeBPenultimateGame = game.gols.TimeB;
                }
            }
        });
        if (teamPenultimateGame && scorePenultimateGame !== null) {
            teamPenultimateGame.innerHTML = `${timeAPenultimateGame} x ${timeBPenultimateGame}`;
            scorePenultimateGame.innerHTML = `${golTimeAPenultimateGame} x ${golTimeBPenultimateGame}`;
        }
    });
}
getPenultimateGame('Brasil');
async function getLastGame(country) {
    await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        const teamLastGame = document.getElementById('teamLastGame');
        const scoreLastGame = document.getElementById('scoreLastGame');
        let timeALastGame = '';
        let timeBLastGame = '';
        let golTimeALastGame = 0;
        let golTimeBLastGame = 0;
        data.forEach(game => {
            if (game.fase === 'Quartas-Final') {
                if (game.timeA === country || game.timeB === country) {
                    timeALastGame = game.timeA;
                    timeBLastGame = game.timeB;
                    golTimeALastGame = game.gols.timeA;
                    golTimeBLastGame = game.gols.TimeB;
                }
            }
        });
        if (teamLastGame && scoreLastGame !== null) {
            teamLastGame.innerHTML = `${timeALastGame} x ${timeBLastGame}`;
            scoreLastGame.innerHTML = `${golTimeALastGame} x ${golTimeBLastGame}`;
        }
    });
}
getLastGame('Brasil');
//# sourceMappingURL=brasil.js.map