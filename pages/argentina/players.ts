const defRightArrow = document.getElementById('defenderRightArrow')
const defLeftArrow = document.getElementById('defenderLeftArrow')
const midRightArrow = document.getElementById('midfielderRightArrow')
const midLeftArrow = document.getElementById('midfielderLeftArrow')
const attRightArrow = document.getElementById('attackerRightArrow')
const attLeftArrow = document.getElementById('attackerLeftArrow')
const goalkeeper : HTMLElement = document.getElementById('goalkeepers')
const defender : HTMLElement = document.getElementById('defenders')
const midfielder : HTMLElement = document.getElementById('midfielders')
const attacker : HTMLElement = document.getElementById('attackers')

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

// API Function
class Player {
    nationalTeam: string
    player: string
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
                player: data[index].player,
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
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`
            goalkeeper?.insertAdjacentHTML('beforeend', goalkeeperCard)
        }
        if(player.position === "Defensor"){
            let defenderCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`
            defender?.insertAdjacentHTML('beforeend', defenderCard)
        }
        if(player.position === "Meio-Campista"){
            let midfielderCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`
            midfielder?.insertAdjacentHTML('beforeend', midfielderCard)
        }
        if(player.position === "Atacante"){
            let attackerCard = 
            `<div class="player">
                <img src=${player.photo}>
                <p>${player.player}</p>
                <p>${player.age} anos</p>
            </div>`
            attacker?.insertAdjacentHTML('beforeend', attackerCard)
        }
    })
}