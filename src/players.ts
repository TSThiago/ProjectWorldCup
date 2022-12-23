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
            let defendersCard = `<div class="player">
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