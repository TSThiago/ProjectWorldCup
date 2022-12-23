// Show More Games Button

const button = document.getElementById('matchButton') as HTMLElement
const matchScores = document.getElementById('matchScores') as HTMLElement
let showMore : boolean = false 

button.addEventListener('click', (e) =>{
    if(showMore){
        matchScores.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 24vh; margin:0 auto 2vh auto;'
        button.textContent = 'Ver Mais'
        showMore = false
    }else{
        matchScores.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 48vh; margin:0 auto 2vh auto;'
        button.textContent = 'Ver Menos'
        showMore = true
    }
})

// Get API Datas

class Match {
    timeA!: string
    timeB!: string
    data!: string
    gols!: {
      timeA: number
      TimeB: number
    }
    fase!: string
    id!: number 
}

let allMatches = getAllMatches()
.then(function (data){
    let nationalTeamMatches = getNationalTeamMatches("Argentina", data)
    console.log(nationalTeamMatches)
})

async function getAllMatches() : Promise<Response> {
    let arrayMatches : Response = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    arrayMatches = await arrayMatches.json()
    return arrayMatches
}

async function getNationalTeamMatches(nationalTeam : string, data : Match[]) : Promise<Match[]> {
    let arrayNationalTeamMatches : Match[] = []  
    for(let index : number = 0; index < data.length; index++){
        if(data[index].timeA === nationalTeam ||  data[index].timeB === nationalTeam){
            let match = new Match()
            match.timeA = data[index].timeA
            match.timeB = data[index].timeB
            match.data = data[index].data
            match.gols.timeA = data[index].gols.timeA
            match.gols.TimeB = data[index].gols.TimeB
            match.fase = data[index].fase

            arrayNationalTeamMatches.push(match)
        }
    }
    return arrayNationalTeamMatches
}

