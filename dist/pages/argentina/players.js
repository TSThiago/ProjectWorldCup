const goalkeeper = document.getElementById('goalkeepers');
const defender = document.getElementById('defenders');
const midfielder = document.getElementById('midfielders');
const attacker = document.getElementById('attackers');
class Player {
}
getAllPlayers()
    .then(function (data) {
    let argentinaPlayers = getNationalTeamPlayers('Argentina', data);
    return argentinaPlayers;
})
    .then(function (players) {
    renderPlayers(players);
});
async function getAllPlayers() {
    let playersArray = await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players');
    playersArray = await playersArray.json();
    return playersArray;
}
async function getNationalTeamPlayers(nationalTeam, data) {
    let nationalTeamArray = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].nationalTeam === nationalTeam) {
            let nationalTeamPlayer = {
                nationalTeam: data[index].nationalTeam,
                player: data[index].player,
                age: data[index].age,
                position: data[index].position,
                photo: data[index].photo
            };
            nationalTeamArray.push(nationalTeamPlayer);
        }
    }
    return nationalTeamArray;
}
function renderPlayers(players) {
    players.forEach(player => {
        if (player.position === 'Goleiro') {
            let goalkeeperCard = `<div class="player style="heigth: 180px; width:180px"">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`;
            goalkeeper === null || goalkeeper === void 0 ? void 0 : goalkeeper.insertAdjacentHTML('beforeend', goalkeeperCard);
        }
        if (player.position === "Defensor") {
            let defenderCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`;
            defender === null || defender === void 0 ? void 0 : defender.insertAdjacentHTML('beforeend', defenderCard);
        }
        if (player.position === "Meio-Campista") {
            let midfielderCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`;
            midfielder === null || midfielder === void 0 ? void 0 : midfielder.insertAdjacentHTML('beforeend', midfielderCard);
        }
        if (player.position === "Atacante") {
            let attackerCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`;
            attacker === null || attacker === void 0 ? void 0 : attacker.insertAdjacentHTML('beforeend', attackerCard);
        }
    });
}
//# sourceMappingURL=players.js.map