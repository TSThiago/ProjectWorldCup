async function playersApi() {
    fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
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
                <img src=${player.photo} alt="goleiro do Brasil escalado para a Copa">
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`;
            goalkeepers === null || goalkeepers === void 0 ? void 0 : goalkeepers.insertAdjacentHTML('beforeend', attackersCard);
        }
        if (player.position === 'Lateral' && player.nationalTeam === 'Brasil') {
            let lateralsCard = `<div class="player">
            <img src=${player.photo} alt="lateral do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            laterals === null || laterals === void 0 ? void 0 : laterals.insertAdjacentHTML('beforeend', lateralsCard);
        }
        if (player.position === 'Zagueiro' && player.nationalTeam === 'Brasil') {
            let defendersCard = `<div class="player">
            <img src=${player.photo} alt="zagueiro do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            defenders === null || defenders === void 0 ? void 0 : defenders.insertAdjacentHTML('beforeend', defendersCard);
        }
        if (player.position === 'Meio-campista' && player.nationalTeam === 'Brasil') {
            let midfieldersCard = `<div class="player">
            <img src=${player.photo} alt="meio-campista do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            midfielders === null || midfielders === void 0 ? void 0 : midfielders.insertAdjacentHTML('beforeend', midfieldersCard);
        }
        if (player.position === 'Atacante' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
            <img src=${player.photo} alt="atacante do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            attackers === null || attackers === void 0 ? void 0 : attackers.insertAdjacentHTML('beforeend', attackersCard);
        }
    });
}
//FILTRO POR IDADE
const minimumAge = document.getElementById('minimumAge');
const maximumAge = document.getElementById('maximumAge');
async function filterAge(minimumAge, maximumAge) {
    const players = document.querySelectorAll('.player');
    fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        const filteredPlayers = data.filter(player => player.age >= minimumAge && player.age <= maximumAge);
        players.forEach(player => {
            player.remove();
        });
        renderPlayersCards(filteredPlayers);
    });
}
maximumAge.addEventListener('blur', () => {
    const minimumAgeValue = minimumAge.value;
    const maximumAgeValue = maximumAge.value;
    filterAge(minimumAgeValue, maximumAgeValue);
});
//CARROSSEL
let carouselScroll = 0;
function scroll(newCarouselScroll, playerScroll) {
    if (newCarouselScroll < 0) {
        return;
    }
    playerScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    });
    carouselScroll = newCarouselScroll;
}
const arrowRightAttackers = document.getElementById('arrowRightAttackers');
const arrowLeftAttackers = document.getElementById('arrowLeftAttackers');
const attackersScroll = document.getElementById('attackers');
arrowLeftAttackers.addEventListener('click', () => scroll(carouselScroll - 200, attackersScroll));
arrowRightAttackers.addEventListener('click', () => scroll(carouselScroll + 200, attackersScroll));
const arrowLeftMidFielders = document.getElementById('arrowLeftMidfielders');
const arrowRightMidFielders = document.getElementById('arrowRightMidfielders');
const midfieldersScroll = document.getElementById('midfielders');
arrowLeftMidFielders.addEventListener('click', () => scroll(carouselScroll - 200, midfieldersScroll));
arrowRightMidFielders.addEventListener('click', () => scroll(carouselScroll + 200, midfieldersScroll));
const arrowLeftDefenders = document.getElementById('arrowLeftDefenders');
const arrowRightDefenders = document.getElementById('arrowRightDefenders');
const defendersScroll = document.getElementById('defenders');
arrowLeftDefenders.addEventListener('click', () => scroll(carouselScroll - 200, defendersScroll));
arrowRightDefenders.addEventListener('click', () => scroll(carouselScroll + 200, defendersScroll));
const arrowLeftLaterals = document.getElementById('arrowLeftLaterals');
const arrowRightLaterals = document.getElementById('arrowRightLaterals');
const lateralsScroll = document.getElementById('laterals');
arrowLeftLaterals.addEventListener('click', () => scroll(carouselScroll - 200, lateralsScroll));
arrowRightLaterals.addEventListener('click', () => scroll(carouselScroll + 200, lateralsScroll));
const arrowLeftGoalkeepers = document.getElementById('arrowLeftGoalkeepers');
const arrowRightGoalkeepers = document.getElementById('arrowRightGoalkeepers');
const goalkeepersScroll = document.getElementById('goalkeepers');
arrowLeftGoalkeepers.addEventListener('click', () => scroll(carouselScroll - 200, goalkeepersScroll));
arrowRightGoalkeepers.addEventListener('click', () => scroll(carouselScroll + 200, goalkeepersScroll));
//# sourceMappingURL=players.js.map