let menubutton = document.querySelector('.icon') as HTMLElement
let menuMobile = document.querySelector('.mobileMenu') as HTMLElement

    menubutton.addEventListener('click', (e) => {
        if(menuMobile.style.display === 'block') {
            menuMobile.style.display = 'none'
        }else{
            menuMobile.style.display = 'block'
        }
    })    

