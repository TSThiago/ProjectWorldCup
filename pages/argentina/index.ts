const button = document.getElementById('groupButton') as HTMLElement
const groupBox = document.getElementById('groupBox') as HTMLElement
const lasts16: HTMLElement = document.getElementById('last16')
const quarter: HTMLElement = document.getElementById('quarterFinals')
const semi: HTMLElement = document.getElementById('semiFinals')
const final: HTMLElement = document.getElementById('final')

// Show More Games Button

let showMore: boolean = false

button.addEventListener('click', (e) => {
    if (showMore) {
        groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 30vh; margin:0 auto 2vh auto;'
        button.textContent = 'Ver Mais'
        showMore = false
    } else {
        groupBox.style.cssText = 'border-radius: 1em; transition-duration: 0.5s; transition-timing-function: linear; height: 57vh; margin:0 auto 2vh auto;'
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
        TimeA: number
        TimeB: number
    }
    fase!: string
    id!: number
}

getAllMatches()
    .then(function (data) {
        console.log(data)
        return getNationalTeamMatches("Argentina", data)
    })
    .then(function (matches) {
        renderMatches(matches)
    })

async function getAllMatches(): Promise<Response> {
    let arrayMatches: Response = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    arrayMatches = await arrayMatches.json()
    return arrayMatches
}

async function getNationalTeamMatches(nationalTeam: string, data: any): Promise<Match[]> {
    let arrayNationalTeamMatches: Match[] = []
    for (let index: number = 0; index < data.length; index++) {
        if (data[index].timeA === nationalTeam || data[index].timeB === nationalTeam) {
            let match = new Match()
            match.timeA = data[index].timeA
            match.timeB = data[index].timeB
            match.data = data[index].data
            match.gols.TimeA = data[index].gols.timeA 
            match.gols.TimeB = data[index].gols.TimeB
            match.fase = data[index].fase

            arrayNationalTeamMatches.push(match)
            console.log(arrayNationalTeamMatches)
        }
    }
    return arrayNationalTeamMatches
}

function renderMatches(matches: Match[]) {
    matches.forEach(match => {
        // if ((match.timeA === 'Argentina' && match.fase === 'Classificatória') || (match.timeB === 'Argentina' && match.fase === 'Classificatória')) {
        //     let last16Box
        // }
        if ((match.timeA === 'Argentina' && match.fase === 'Oitavas-Final') || (match.timeB === 'Argentina' && match.fase === 'Oitavas-Final')) {
            let last16Box =
                `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`
            lasts16?.insertAdjacentHTML('beforeend', last16Box)
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Quartas-Final') || (match.timeB === 'Argentina' && match.fase === 'Quartas-Final')) {
            let quarterBox =
                `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`
            quarter?.insertAdjacentHTML('beforeend', quarterBox)
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Semi-Final') || (match.timeB === 'Argentina' && match.fase === 'Semi-Final')) {
            let semiBox =
                `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`
            semi?.insertAdjacentHTML('beforeend', semiBox)
        }
        if ((match.timeA === 'Argentina' && match.fase === 'Final') || (match.timeB === 'Argentina' && match.fase === 'Final')) {
            let finalBox =
                `<div class="box">
            <h3>${match.fase}</h3>
            <div class="score">
                <p>${match.timeA} X ${match.timeB}</p>
                <p>${match.gols.TimeA} X ${match.gols.TimeB}</p>
            </div>
            </div>`
            final?.insertAdjacentHTML('beforeend', finalBox)
        }
    })
}