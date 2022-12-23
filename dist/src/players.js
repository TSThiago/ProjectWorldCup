"use strict";
async function playersApi() {
    await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        renderPlayersCards(data);
    });
}
playersApi();
const goalkeepers = document.getElementById('goalkeepers');
const laterals = document.getElementById('laterals');
const defenders = document.getElementById('defenders');
const midfielders = document.getElementById('midfielders');
const attackers = document.getElementById('attackers');
function renderPlayersCards(playersList) {
    playersList.forEach(player => {
        if (player.position === 'Goleiro' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age}</p>
            </div>`;
            goalkeepers === null || goalkeepers === void 0 ? void 0 : goalkeepers.insertAdjacentHTML('beforeend', attackersCard);
        }
        if (player.position === 'Lateral' && player.nationalTeam === 'Brasil') {
            let lateralsCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`;
            laterals === null || laterals === void 0 ? void 0 : laterals.insertAdjacentHTML('beforeend', lateralsCard);
        }
        if (player.position === 'Zagueiro' && player.nationalTeam === 'Brasil') {
            let defendersCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`;
            defenders === null || defenders === void 0 ? void 0 : defenders.insertAdjacentHTML('beforeend', defendersCard);
        }
        if (player.position === 'Meio-campista' && player.nationalTeam === 'Brasil') {
            let midfieldersCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`;
            midfielders === null || midfielders === void 0 ? void 0 : midfielders.insertAdjacentHTML('beforeend', midfieldersCard);
        }
        if (player.position === 'Atacante' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`;
            attackers === null || attackers === void 0 ? void 0 : attackers.insertAdjacentHTML('beforeend', attackersCard);
        }
    });
}
//# sourceMappingURL=players.js.map