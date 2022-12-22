const button = document.getElementById('matchButton') as HTMLElement
const matchScores = document.getElementById('matchScores') as HTMLElement

let showMore : boolean = false 

button.addEventListener('click', (e) => {
    if(showMore){
        matchScores.style = 'heigth: 24vh'
        button.textContent = 'Ver Mais'
        showMore = false
    }else{
        matchScores.style.height = '60vh'
        button.textContent = 'Ver Menos'
        showMore = true
    }
})

