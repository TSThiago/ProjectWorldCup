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

async function getAllMatches() : Promise<Object[]> {
    let arrayMatches : Promise<Object[]>  = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    arrayMatches = await arrayMatches.json()
    return arrayMatches
}

