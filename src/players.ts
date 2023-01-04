interface iPlayers {
    nationalTeam: string,
    player: string,
    age: number,
    position: string,
    photo: string,
    id?: number
}

async function playersApi() {
    fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
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
                <img src=${player.photo} alt="goleiro do Brasil escalado para a Copa">
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`
            goalkeepers?.insertAdjacentHTML('beforeend', attackersCard)
        }
        if (player.position === 'Lateral' && player.nationalTeam === 'Brasil') {
            let lateralsCard = `<div class="player">
            <img src=${player.photo} alt="lateral do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`
            laterals?.insertAdjacentHTML('beforeend', lateralsCard)
        }
        if (player.position === 'Zagueiro' && player.nationalTeam === 'Brasil') {
            let defendersCard = `<div class="player">
            <img src=${player.photo} alt="zagueiro do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`
            defenders?.insertAdjacentHTML('beforeend', defendersCard)
        }
        if (player.position === 'Meio-campista' && player.nationalTeam === 'Brasil') {
            let midfieldersCard = `<div class="player">
            <img src=${player.photo} alt="meio-campista do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`
            midfielders?.insertAdjacentHTML('beforeend', midfieldersCard)
        }
        if (player.position === 'Atacante' && player.nationalTeam === 'Brasil') {
            let attackersCard = `<div class="player">
            <img src=${player.photo} alt="atacante do Brasil escalado para a Copa">
            <p>${player.player}</p>
            <p>${player.age} anos</p>
        </div>`
            attackers?.insertAdjacentHTML('beforeend', attackersCard)
        }
    });
}

//FILTRO POR IDADE
const minimumAge = document.getElementById('minimumAge') as HTMLInputElement
const maximumAge = document.getElementById('maximumAge') as HTMLInputElement

async function filterAge(minimumAge, maximumAge){
    const players: NodeListOf<Element> = document.querySelectorAll('.player')
    fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const filteredPlayers: iPlayers[] = data.filter(player => player.age >= minimumAge && player.age <= maximumAge)
            players.forEach(player => {
                player.remove()
            });
            renderPlayersCards(filteredPlayers)
        })
}

maximumAge.addEventListener('blur', () => {
    const minimumAgeValue: string = minimumAge.value
    const maximumAgeValue: string = maximumAge.value
    filterAge(minimumAgeValue, maximumAgeValue)
})


//CARROSSEL
let carouselScroll: number = 0

function scroll(newCarouselScroll: number, playerScroll){
    if(newCarouselScroll < 0){
        return
    }
    playerScroll.scroll({
        top: 0,
        left: newCarouselScroll,
        behavior: 'smooth'
    })
    carouselScroll = newCarouselScroll
}

const arrowRightAttackers: HTMLElement | null = document.getElementById('arrowRightAttackers')
const arrowLeftAttackers: HTMLElement | null = document.getElementById('arrowLeftAttackers')
const attackersScroll: HTMLElement | null = document.getElementById('attackers')

arrowLeftAttackers.addEventListener('click', () => scroll(carouselScroll - 200, attackersScroll))
arrowRightAttackers.addEventListener('click', () => scroll(carouselScroll + 200, attackersScroll))


const arrowLeftMidFielders: HTMLElement | null = document.getElementById('arrowLeftMidfielders')
const arrowRightMidFielders: HTMLElement | null = document.getElementById('arrowRightMidfielders')
const midfieldersScroll: HTMLElement | null = document.getElementById('midfielders')


arrowLeftMidFielders.addEventListener('click', () => scroll(carouselScroll - 200, midfieldersScroll))
arrowRightMidFielders.addEventListener('click', () => scroll(carouselScroll + 200, midfieldersScroll))


const arrowLeftDefenders: HTMLElement | null = document.getElementById('arrowLeftDefenders')
const arrowRightDefenders: HTMLElement | null = document.getElementById('arrowRightDefenders')
const defendersScroll: HTMLElement | null = document.getElementById('defenders')


arrowLeftDefenders.addEventListener('click', () => scroll(carouselScroll - 200, defendersScroll))
arrowRightDefenders.addEventListener('click', () => scroll(carouselScroll + 200, defendersScroll))


const arrowLeftLaterals: HTMLElement | null = document.getElementById('arrowLeftLaterals')
const arrowRightLaterals: HTMLElement | null = document.getElementById('arrowRightLaterals')
const lateralsScroll: HTMLElement | null = document.getElementById('laterals')


arrowLeftLaterals.addEventListener('click', () => scroll(carouselScroll - 200, lateralsScroll))
arrowRightLaterals.addEventListener('click', () => scroll(carouselScroll + 200, lateralsScroll))


const arrowLeftGoalkeepers: HTMLElement | null = document.getElementById('arrowLeftGoalkeepers')
const arrowRightGoalkeepers: HTMLElement | null = document.getElementById('arrowRightGoalkeepers')
const goalkeepersScroll: HTMLElement | null = document.getElementById('goalkeepers')

arrowLeftGoalkeepers.addEventListener('click', () => scroll(carouselScroll - 200, goalkeepersScroll))
arrowRightGoalkeepers.addEventListener('click', () => scroll(carouselScroll + 200, goalkeepersScroll))




