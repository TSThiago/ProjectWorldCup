let menu3button = document.querySelector('.icon') as HTMLElement
let menu3Mobile = document.querySelector('.mobileMenu') as HTMLElement
const button = document.getElementById('groupButton') as HTMLElement
const groupStageBox = document.getElementById('groupStage') as HTMLElement
const groupBox = document.getElementById('groupBox') as HTMLElement
const knockoutBox: HTMLElement = document.getElementById('knockoutBox')

// Menu Mobile

menu3button.addEventListener('click', (e) => {
    if(menu3Mobile.style.display === 'block') {
        menu3Mobile.style.display = 'none'
    }else{
        menu3Mobile.style.display = 'block'
    }
})   

// Show More Games Button

let showMore: boolean = false

function ShowMoreMatches() {
    button.addEventListener('click', (e) => {
        if (showMore) {
            groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.2s; transition-timing-function: linear; height: 40vh; margin:0 auto 2vh auto;'
            button.textContent = 'Ver Mais'
            showMore = false
        } else {
            groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.2s; transition-timing-function: linear; height: 67vh; margin:0 auto 2vh auto;'
            button.textContent = 'Ver Menos'
            showMore = true
        }
    })
}


// Get API Datas


getAllMatches()
    .then(function (data) {
        return getNationalTeamMatches("Argentina", data)
    })
    .then(function (matches) {
        renderMatches(matches, "Argentina")
    })

ShowMoreMatches()

async function getAllMatches(): Promise<Response> {
    let arrayMatches: Response = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    arrayMatches = await arrayMatches.json()
    return arrayMatches
}

interface Match {
    timeA: string
    timeB: string
    data: string
    gols: {
        timeA: number
        TimeB: number
    }
    fase: string
    id: number
}

async function getNationalTeamMatches(nationalTeam: string, data: any): Promise<Match[]> {
    let arrayNationalTeamMatches: Match[] = []
    for (let index: number = 0; index < data.length; index++) {
        if (data[index].timeA === nationalTeam || data[index].timeB === nationalTeam) {
            let match : Match
            match = data[index]
            arrayNationalTeamMatches.push(match)
        }
    }
    return arrayNationalTeamMatches
}

function renderMatches(matches: Match[], nationalTeam : string) {
    let divCreated : boolean = false
    matches.forEach(match => {
        if ((match.timeA === nationalTeam && match.fase === 'Classificatória') || (match.timeB === nationalTeam && match.fase === 'Classificatória')) {
            let stageBox = 
            `<div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>`
            groupBox?.insertAdjacentHTML('beforeend', stageBox)
        }
        if ((match.timeA === nationalTeam && match.fase != 'Classificatória') || (match.timeB === nationalTeam && match.fase != 'Classificatória')) {
            let gameBox =
                `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.timeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`
            knockoutBox?.insertAdjacentHTML('beforeend', gameBox)
        }
    })
}

