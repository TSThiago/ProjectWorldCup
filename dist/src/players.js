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
                <p>${player.age} anos</p>
            </div>`;
            goalkeepers === null || goalkeepers === void 0 ? void 0 : goalkeepers.insertAdjacentHTML('beforeend', attackersCard);
        }
        if (player.position === 'Lateral' && player.nationalTeam === 'Brasil') {
            let lateralsCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            laterals === null || laterals === void 0 ? void 0 : laterals.insertAdjacentHTML('beforeend', lateralsCard);
        }
        if (player.position === 'Zagueiro' && player.nationalTeam === 'Brasil') {
            let defendersCard = `<div class="player" id="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            defenders === null || defenders === void 0 ? void 0 : defenders.insertAdjacentHTML('beforeend', defendersCard);
        }
        if (player.position === 'Meio-campista' && player.nationalTeam === 'Brasil') {
            let midfieldersCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`;
            midfielders === null || midfielders === void 0 ? void 0 : midfielders.insertAdjacentHTML('beforeend', midfieldersCard);
        }
        if (player.position === 'Atacante' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
            <img src=${player.photo}>
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
async function filterAge() {
    console.log('teste');
    await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        data.forEach(player => {
        });
    });
}
maximumAge.addEventListener('blur', filterAge);
//CARROSSEL
const arrowRightAttackers = document.getElementById('arrowRightAttackers');
const arrowLeftAttackers = document.getElementById('arrowLeftAttackers');
const attackersScroll = document.getElementById('attackers');
let carouselAttackersScroll = 0;
function scrollAttackers(newCarouselScroll) {
    if (newCarouselScroll < 0) {
        return;
    }
    attackersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    });
    carouselAttackersScroll = newCarouselScroll;
}
arrowRightAttackers.addEventListener('click', () => scrollAttackers(carouselAttackersScroll + 200));
arrowLeftAttackers.addEventListener('click', () => scrollAttackers(carouselAttackersScroll - 200));
const arrowLeftMidFielders = document.getElementById('arrowLeftMidfielders');
const arrowRightMidFielders = document.getElementById('arrowRightMidfielders');
const midfieldersScroll = document.getElementById('midfielders');
let carouselMidfieldersScroll = 0;
function scrollMidfielders(newCarouselScroll) {
    if (newCarouselScroll < 0) {
        return;
    }
    midfieldersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    });
    carouselMidfieldersScroll = newCarouselScroll;
}
arrowLeftMidFielders.addEventListener('click', () => scrollMidfielders(carouselMidfieldersScroll - 200));
arrowRightMidFielders.addEventListener('click', () => scrollMidfielders(carouselMidfieldersScroll + 200));
const arrowLeftDefenders = document.getElementById('arrowLeftDefenders');
const arrowRightDefenders = document.getElementById('arrowRightDefenders');
const defendersScroll = document.getElementById('defenders');
let carouselDefendersScroll = 0;
function scrollDefenders(newCarouselScroll) {
    if (newCarouselScroll < 0) {
        return;
    }
    defendersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    });
    carouselDefendersScroll = newCarouselScroll;
}
arrowLeftDefenders.addEventListener('click', () => scrollDefenders(carouselDefendersScroll - 200));
arrowRightDefenders.addEventListener('click', () => scrollDefenders(carouselDefendersScroll + 200));
const arrowLeftLaterals = document.getElementById('arrowLeftLaterals');
const arrowRightLaterals = document.getElementById('arrowRightLaterals');
const lateralsScroll = document.getElementById('laterals');
let carouselLateralsScroll = 0;
function scrollLaterals(newCarouselScroll) {
    if (newCarouselScroll < 0) {
        return;
    }
    lateralsScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    });
    carouselLateralsScroll = newCarouselScroll;
}
arrowLeftLaterals.addEventListener('click', () => scrollLaterals(carouselLateralsScroll - 200));
arrowRightLaterals.addEventListener('click', () => scrollLaterals(carouselLateralsScroll + 200));
const arrowLeftGoalkeepers = document.getElementById('arrowLeftGoalkeepers');
const arrowRightGoalkeepers = document.getElementById('arrowRightGoalkeepers');
const goalkeepersScroll = document.getElementById('goalkeepers');
let carouselGoalkeepersScroll = 0;
function scrollGoalkeepers(newCarouselScroll) {
    if (newCarouselScroll < 0) {
        return;
    }
    goalkeepersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    });
    carouselGoalkeepersScroll = newCarouselScroll;
}
arrowLeftGoalkeepers.addEventListener('click', () => scrollGoalkeepers(carouselGoalkeepersScroll - 200));
arrowRightGoalkeepers.addEventListener('click', () => scrollGoalkeepers(carouselGoalkeepersScroll + 200));
//# sourceMappingURL=players.js.map