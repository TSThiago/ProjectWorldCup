const menu4button = document.querySelector('#menuButton');
const menu4Mobile = document.querySelector('.mobileMenu');
const navBar = document.querySelector('.navBar');
const defRightArrow = document.getElementById('defenderRightArrow');
const defLeftArrow = document.getElementById('defenderLeftArrow');
const midRightArrow = document.getElementById('midfielderRightArrow');
const midLeftArrow = document.getElementById('midfielderLeftArrow');
const attRightArrow = document.getElementById('attackerRightArrow');
const attLeftArrow = document.getElementById('attackerLeftArrow');
const goalkeeper = document.getElementById('goalkeepers');
const defender = document.getElementById('defenders');
const midfielder = document.getElementById('midfielders');
const attacker = document.getElementById('attackers');
// Menu Mobile
menu4button.addEventListener('click', (e) => {
    if (menu4Mobile.style.display === 'block') {
        menu4Mobile.style.display = 'none';
    }
    else {
        menu4Mobile.style.display = 'block';
        navBar.style.height = '30vh';
        menu4button.style.display = 'none';
    }
});
// Arrows Function
defRightArrow.addEventListener('click', (e) => {
    defender.scrollLeft += 90;
});
defLeftArrow.addEventListener('click', (e) => {
    defender.scrollLeft -= 90;
});
midRightArrow.addEventListener('click', (e) => {
    midfielder.scrollLeft += 90;
});
midLeftArrow.addEventListener('click', (e) => {
    midfielder.scrollLeft -= 90;
});
attRightArrow.addEventListener('click', (e) => {
    attacker.scrollLeft += 90;
});
attLeftArrow.addEventListener('click', (e) => {
    attacker.scrollLeft -= 90;
});
//  Filter Function
let minAge = document.getElementById('minAge');
let maxAge = document.getElementById('maxAge');
async function filterPlayer(minAge, maxAge) {
    let players = document.querySelectorAll('.player');
    await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (players) {
        return players.json();
    })
        .then(function (data) {
        return getNationalTeamPlayers('Argentina', data);
    }).then(function (argentinaPlayers) {
        let filteredPlayers = argentinaPlayers.filter(player => player.age >= minAge && player.age <= maxAge);
        players.forEach(player => {
            player.remove();
        });
        renderPlayers(filteredPlayers);
    });
}
maxAge.addEventListener('blur', () => {
    const minAgeValue = parseInt(minAge.value);
    const maxAgeValue = parseInt(maxAge.value);
    filterPlayer(minAgeValue, maxAgeValue);
});
// API Function
class Player {
}
getAllPlayers()
    .then(function (data) {
    return getNationalTeamPlayers('Argentina', data);
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
                name: data[index].player,
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
            let goalkeeperCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`;
            goalkeeper === null || goalkeeper === void 0 ? void 0 : goalkeeper.insertAdjacentHTML('beforeend', goalkeeperCard);
        }
        if (player.position === "Defensor") {
            let defenderCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`;
            defender === null || defender === void 0 ? void 0 : defender.insertAdjacentHTML('beforeend', defenderCard);
        }
        if (player.position === "Meio-Campista") {
            let midfielderCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`;
            midfielder === null || midfielder === void 0 ? void 0 : midfielder.insertAdjacentHTML('beforeend', midfielderCard);
        }
        if (player.position === "Atacante") {
            let attackerCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`;
            attacker === null || attacker === void 0 ? void 0 : attacker.insertAdjacentHTML('beforeend', attackerCard);
        }
    });
}
//# sourceMappingURL=players.js.map