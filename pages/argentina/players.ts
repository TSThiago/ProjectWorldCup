const menu4button = document.querySelector('#menuButton') as HTMLElement
const menu4Mobile = document.querySelector('.mobileMenu') as HTMLElement
const navBar = document.querySelector('.navBar') as HTMLElement
const defRightArrow = document.getElementById('defenderRightArrow') as HTMLElement
const defLeftArrow = document.getElementById('defenderLeftArrow') as HTMLElement
const midRightArrow = document.getElementById('midfielderRightArrow') as HTMLElement
const midLeftArrow = document.getElementById('midfielderLeftArrow') as HTMLElement
const attRightArrow = document.getElementById('attackerRightArrow') as HTMLElement
const attLeftArrow = document.getElementById('attackerLeftArrow') as HTMLElement
const goalkeeper : HTMLElement = document.getElementById('goalkeepers')
const defender : HTMLElement = document.getElementById('defenders')
const midfielder : HTMLElement = document.getElementById('midfielders')
const attacker : HTMLElement = document.getElementById('attackers')

// Menu Mobile

menu4button.addEventListener('click', (e) => {
    if(menu4Mobile.style.display === 'block') {
        menu4Mobile.style.display = 'none'
    }else{
        menu4Mobile.style.display = 'block'
        navBar.style.height = '30vh'
        menu4button.style.display = 'none'

    }
})   

// Arrows Function

defRightArrow.addEventListener('click', (e) => {
    defender.scrollLeft += 90
})

defLeftArrow.addEventListener('click', (e) => {
    defender.scrollLeft -= 90
})

midRightArrow.addEventListener('click' ,(e) => {
    midfielder.scrollLeft += 90
})

midLeftArrow.addEventListener('click', (e) => {
    midfielder.scrollLeft -= 90
})

attRightArrow.addEventListener('click' ,(e) => {
    attacker.scrollLeft += 90
})

attLeftArrow.addEventListener('click', (e) => {
    attacker.scrollLeft -= 90
})

//  Filter Function

let minAge = document.getElementById('minAge') as HTMLInputElement
let maxAge = document.getElementById('maxAge') as HTMLInputElement

async function filterPlayer(minAge : number, maxAge : number){
    let players : NodeListOf<Element> = document.querySelectorAll('.player')
    await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
        .then(function (players) {
            return players.json();
        })
    .then(function (data) {
        return getNationalTeamPlayers('Argentina', data)
    }).then(function(argentinaPlayers){
        let filteredPlayers = argentinaPlayers.filter(player => player.age >= minAge && player.age <= maxAge)
        players.forEach(player => {
            player.remove()
        });
        renderPlayers(filteredPlayers)
    })
}

maxAge.addEventListener('blur', () => {
    const minAgeValue : number = parseInt(minAge.value)
    const maxAgeValue : number = parseInt(maxAge.value)
    filterPlayer(minAgeValue, maxAgeValue)
})


// API Function

class Player {
    nationalTeam: string
    name: string
    age: number
    position: string
    photo: string
    id?: number
}

getAllPlayers()
.then(function(data){
    return getNationalTeamPlayers('Argentina', data)
})
.then(function(players){
renderPlayers(players)
})


async function getAllPlayers() : Promise<Response> {
     let playersArray : Response= await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players')
     playersArray = await playersArray.json()
     return playersArray
}

async function getNationalTeamPlayers(nationalTeam : string, data : any) : Promise<any[]> {
    let nationalTeamArray = [] 
    for(let index : number = 0; index < data.length; index++){
        if(data[index].nationalTeam === nationalTeam ){
            let nationalTeamPlayer = {
                nationalTeam: data[index].nationalTeam,
                name: data[index].player,
                age: data[index].age,
                position: data[index].position,
                photo: data[index].photo
            }
            nationalTeamArray.push(nationalTeamPlayer)
        }   
    }

    return nationalTeamArray
}

function renderPlayers(players : Player[]){
    players.forEach(player => {
        if(player.position === 'Goleiro'){
            let goalkeeperCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`
            goalkeeper?.insertAdjacentHTML('beforeend', goalkeeperCard)
        }
        if(player.position === "Defensor"){
            let defenderCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`
            defender?.insertAdjacentHTML('beforeend', defenderCard)
        }
        if(player.position === "Meio-Campista"){
            let midfielderCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`
            midfielder?.insertAdjacentHTML('beforeend', midfielderCard)
        }
        if(player.position === "Atacante"){
            let attackerCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.name}</p>
                <p>${player.age} anos</p>
            </div>`
            attacker?.insertAdjacentHTML('beforeend', attackerCard)
        }
    })
}