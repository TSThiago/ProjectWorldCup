interface iPlayers {
    nationalTeam: string,
    player: string,
    age: number,
    position: string,
    photo: string,
    id?: number
}

async function playersApi() {
    await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            renderPlayersCards(data)
        })
}

playersApi()

const goalkeepers: HTMLElement | null = document.getElementById('goalkeepers')
const laterals: HTMLElement | null = document.getElementById('laterals')
const defenders: HTMLElement | null = document.getElementById('defenders')
const midfielders: HTMLElement | null = document.getElementById('midfielders')
const attackers: HTMLElement | null = document.getElementById('attackers')

function renderPlayersCards(playersList: iPlayers[]) {
    playersList.forEach(player => {
        if (player.position === 'Goleiro' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age}</p>
            </div>`
            goalkeepers?.insertAdjacentHTML('beforeend', attackersCard)
        }
        if (player.position === 'Lateral' && player.nationalTeam === 'Brasil') {
            let lateralsCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`
            laterals?.insertAdjacentHTML('beforeend', lateralsCard)
        }
        if (player.position === 'Zagueiro' && player.nationalTeam === 'Brasil') {
            let defendersCard = `<div class="player" id="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`
            defenders?.insertAdjacentHTML('beforeend', defendersCard)
        }
        if (player.position === 'Meio-campista' && player.nationalTeam === 'Brasil') {
            let midfieldersCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`
            midfielders?.insertAdjacentHTML('beforeend', midfieldersCard)
        }
        if (player.position === 'Atacante' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
            <img src=${player.photo}>
            <p>${player.player}</p>
            <p>${player.age}</p>
        </div>`
            attackers?.insertAdjacentHTML('beforeend', attackersCard)
        }
    });
}

//FILTRO POR IDADE


//CARROSSEL
const arrowRightAttackers = document.getElementById('arrowRightAttackers')
const arrowLeftAttackers = document.getElementById('arrowLeftAttackers')
const attackersScroll = document.getElementById('attackers')

let carouselAttackersScroll: number = 0

function scrollAttackers(newCarouselScroll: number){
    if(newCarouselScroll < 0){
        return
    }
    attackersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    })
    carouselAttackersScroll = newCarouselScroll
}

arrowRightAttackers.addEventListener('click', () => scrollAttackers(carouselAttackersScroll + 200))
arrowLeftAttackers.addEventListener('click', () => scrollAttackers(carouselAttackersScroll - 200))


const arrowLeftMidFielders = document.getElementById('arrowLeftMidfielders')
const arrowRightMidFielders = document.getElementById('arrowRightMidfielders')
const midfieldersScroll = document.getElementById('midfielders')

let carouselMidfieldersScroll: number = 0

function scrollMidfielders(newCarouselScroll: number){
    if(newCarouselScroll < 0){
        return
    }
    midfieldersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    })
    carouselMidfieldersScroll = newCarouselScroll
}

arrowLeftMidFielders.addEventListener('click', () => scrollMidfielders(carouselMidfieldersScroll - 200))
arrowRightMidFielders.addEventListener('click', () => scrollMidfielders(carouselMidfieldersScroll + 200))


const arrowLeftDefenders = document.getElementById('arrowLeftDefenders')
const arrowRightDefenders = document.getElementById('arrowRightDefenders')
const defendersScroll = document.getElementById('defenders')

let carouselDefendersScroll: number = 0


function scrollDefenders(newCarouselScroll: number){
    if(newCarouselScroll < 0){
        return
    }
    defendersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    })
    carouselDefendersScroll = newCarouselScroll
}

arrowLeftDefenders.addEventListener('click', () => scrollDefenders(carouselDefendersScroll - 200))
arrowRightDefenders.addEventListener('click', () => scrollDefenders(carouselDefendersScroll + 200))


const arrowLeftLaterals = document.getElementById('arrowLeftLaterals')
const arrowRightLaterals = document.getElementById('arrowRightLaterals')
const lateralsScroll = document.getElementById('laterals')

let carouselLateralsScroll: number = 0

function scrollLaterals(newCarouselScroll: number){
    if(newCarouselScroll < 0){
        return
    }
    lateralsScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    })
    carouselLateralsScroll = newCarouselScroll
}

arrowLeftLaterals.addEventListener('click', () => scrollLaterals(carouselLateralsScroll - 200))
arrowRightLaterals.addEventListener('click', () => scrollLaterals(carouselLateralsScroll + 200))


const arrowLeftGoalkeepers = document.getElementById('arrowLeftGoalkeepers')
const arrowRightGoalkeepers = document.getElementById('arrowRightGoalkeepers')
const goalkeepersScroll = document.getElementById('goalkeepers')

let carouselGoalkeepersScroll: number = 0

function scrollGoalkeepers(newCarouselScroll: number){
    if(newCarouselScroll < 0){
        return
    }
    goalkeepersScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    })
    carouselGoalkeepersScroll = newCarouselScroll
}

arrowLeftGoalkeepers.addEventListener('click', () => scrollGoalkeepers(carouselGoalkeepersScroll - 200))
arrowRightGoalkeepers.addEventListener('click', () => scrollGoalkeepers(carouselGoalkeepersScroll + 200))

