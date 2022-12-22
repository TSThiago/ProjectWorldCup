const buttonMore: HTMLElement | null = document.getElementById('buttonMore')
const sectionQualifying: HTMLElement | null = document.getElementById('qualifying')
const scoreboardHidden: HTMLElement | null = document.getElementById('scoreboardHidden')

function seeMore() {
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '35vh';
        sectionQualifying.style.transition = '1s';
        scoreboardHidden.style.display = 'block';
        buttonMore.innerHTML = 'Ver menos';
    }
}

function seeLess(){
    if (sectionQualifying && scoreboardHidden && buttonMore !== null) {
        sectionQualifying.style.height = '25vh';
        sectionQualifying.style.transition = 'none';
        scoreboardHidden.style.display = 'none';
        buttonMore.innerHTML = 'Ver mais';
    }
}

buttonMore?.addEventListener('click', seeMore)