let menuButtonBar = document.querySelector('.icon') as HTMLElement
let menuMobileBar = document.querySelector('.mobileMenu') as HTMLElement

    menuButtonBar.addEventListener('click', (e) => {
        console.log('teste')
        if(menuMobileBar.style.display === 'block') {
            menuMobileBar.style.display = 'none'
        }else{
            menuMobileBar.style.display = 'block'
        }
    })    

// BOTÃO DE VER MAIS E VER MENOS

const buttonMore: HTMLElement | null = document.getElementById('buttonMore')
const sectionQualifying: HTMLElement | null = document.getElementById('qualifying')
const scoreboardHidden: HTMLElement | null = document.getElementById('scoreboardHidden')

let isOpenMoreDetails: boolean = true

function seeMoreDetails() {
    console.log('teste')
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '40vh';
        sectionQualifying.style.transition = '1s';
        scoreboardHidden.style.display = 'block';
        buttonMore.innerText = 'Ver menos';
        isOpenMoreDetails = false
    }
}

function seeLessDetails() {
    console.log('teste')
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '25vh';
        sectionQualifying.style.transition = '1s';
        scoreboardHidden.style.display = 'none';
        buttonMore.innerHTML = 'Ver mais';
        isOpenMoreDetails = true
    }
}

function openMoreDetails() {
    if (isOpenMoreDetails === true) {
        seeMoreDetails()
    } else {
        seeLessDetails()
    }
}

buttonMore?.addEventListener('click', openMoreDetails)

// INTEGRAÇÃO COM A API DE JOGOS
interface iGames {
    timeA: string,
    timeB: string,
    data: string,
    gols: {
        timeA: number,
        TimeB: number,
    },
    fase: string,
    id?: number,
}

async function getQualifyingGames(country: string) {
    await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iGames[]) {
            const teamFirstClassification: HTMLElement | null = document.getElementById('teamFirstClassification')
            const scoreFirstClassification: HTMLElement | null = document.getElementById('scoreFirstClassification')
            const teamSecondClassification: HTMLElement | null = document.getElementById('teamSecondClassification')
            const scoreSecondClassification: HTMLElement | null = document.getElementById('scoreSecondClassification')
            const teamThirdClassification: HTMLElement | null = document.getElementById('teamThirdClassification')
            const scoreThirdClassification: HTMLElement | null = document.getElementById('scoreThirdClassification')

            const timesAQualifying: string[] = []
            const timesBQualifying: string[] = []
            const golstimeAQualifying: number[] = []
            const golstimeBQualifying: number[] = []


            data.forEach(game => {
                if (game.fase === 'Classificatória') {
                    if (game.timeA === country || game.timeB === country) {
                        timesAQualifying.push(game.timeA)
                        timesBQualifying.push(game.timeB)
                        golstimeAQualifying.push(game.gols.timeA)
                        golstimeBQualifying.push(game.gols.TimeB)
                    }
                }
            });

            if (teamFirstClassification && scoreFirstClassification !== null) {
                teamFirstClassification.innerHTML = `${timesAQualifying[0]} x ${timesBQualifying[0]}`
                scoreFirstClassification.innerHTML = `${golstimeAQualifying[0]} x ${golstimeBQualifying[0]}`
            }

            if (teamSecondClassification && scoreSecondClassification !== null) {
                teamSecondClassification.innerHTML = `${timesAQualifying[1]} x ${timesBQualifying[1]}`
                scoreSecondClassification.innerHTML = `${golstimeAQualifying[1]} x ${golstimeBQualifying[1]}`
            }

            if (teamThirdClassification && scoreThirdClassification !== null) {
                teamThirdClassification.innerHTML = `${timesAQualifying[2]} x ${timesBQualifying[2]}`
                scoreThirdClassification.innerHTML = `${golstimeAQualifying[2]} x ${golstimeBQualifying[2]}`
            }

        })
}

getQualifyingGames('Brasil')


async function getPenultimateGame(country: string) {
    await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iGames[]) {
            const teamPenultimateGame: HTMLElement | null = document.getElementById('teamPenultimateGame')
            const scorePenultimateGame: HTMLElement | null = document.getElementById('scorePenultimateGame')

            let timeAPenultimateGame: string = ''
            let timeBPenultimateGame: string = ''
            let golTimeAPenultimateGame: number = 0
            let golTimeBPenultimateGame: number = 0

            data.forEach(game => {
                if (game.fase === 'Oitavas-Final') {
                    if (game.timeA === country || game.timeB === country) {
                        timeAPenultimateGame = game.timeA
                        timeBPenultimateGame = game.timeB
                        golTimeAPenultimateGame = game.gols.timeA
                        golTimeBPenultimateGame = game.gols.TimeB
                    }
                }
            });

            if (teamPenultimateGame && scorePenultimateGame !== null) {
                teamPenultimateGame.innerHTML = `${timeAPenultimateGame} x ${timeBPenultimateGame}`
                scorePenultimateGame.innerHTML = `${golTimeAPenultimateGame} x ${golTimeBPenultimateGame}`
            }
        })
}

getPenultimateGame('Brasil')


async function getLastGame(country: string) {
    await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
        .then(function (response) {
            return response.json()
        })
        .then(function (data: iGames[]) {
            const teamLastGame: HTMLElement | null = document.getElementById('teamLastGame')
            const scoreLastGame: HTMLElement | null = document.getElementById('scoreLastGame')

            let timeALastGame: string = ''
            let timeBLastGame: string = ''
            let golTimeALastGame: number = 0
            let golTimeBLastGame: number = 0

            data.forEach(game => {
                if (game.fase === 'Quartas-Final') {
                    if (game.timeA === country || game.timeB === country) {
                        timeALastGame = game.timeA
                        timeBLastGame = game.timeB
                        golTimeALastGame = game.gols.timeA
                        golTimeBLastGame = game.gols.TimeB
                    }
                }
            });

            if (teamLastGame && scoreLastGame !== null) {
                teamLastGame.innerHTML = `${timeALastGame} x ${timeBLastGame}`
                scoreLastGame.innerHTML = `${golTimeALastGame} x ${golTimeBLastGame}`
            }
        })
}

getLastGame('Brasil')

// async function gamesApi() {
//     await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             renderGamesCards(data)
//         })
// }

// gamesApi()

// const divGames: HTMLElement | null = document.getElementById('games')

// function renderGamesCards(gamesList: iGames[]){
//     gamesList.forEach(game => {
//         if(game.fase === 'Classificatória'){
//             if(game.timeA === 'Brasil' || game.timeB === 'Brasil'){
//                 let gamesCard = `<div class="scoreboard"> 
//                 <p id="gameTeams">${game.timeA} x ${game.timeB}</p><br>
//                 <p id="gameScore">${game.gols.timeA} x ${game.gols.TimeB}</p>
//             </div>`
//             divGames?.insertAdjacentHTML('beforeend', gamesCard)
//             }
//         }
//     });
// }