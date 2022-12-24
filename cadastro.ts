let menu2button = document.querySelector('.icon') as HTMLElement
let menu2Mobile = document.querySelector('.mobileMenu') as HTMLElement
let submitButton = document.getElementById('submit') as HTMLElement
let nationalTeam = document.getElementById('nationalTeam') as HTMLInputElement
let player = document.getElementById('name') as HTMLInputElement
let age = document.getElementById('age') as HTMLInputElement
let position = document.getElementById('position') as HTMLInputElement
let photo = document.getElementById('photo') as HTMLInputElement

registerPlayer()

function registerPlayer(): void {
    submitButton.addEventListener('click', (e) => {
        if (nationalTeam.value === '' || player.value === '' || age.value === '' || position.value === '' || photo.value === '') {
            alert("Insira as informações nos campos vazios")
        } else {
            let newPlayer: object = {
                nationalTeam: nationalTeam.value,
                player: player.value,
                age: parseInt(age.value),
                position: position.value,
                photo: photo.value
            }

            let myInit = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPlayer)
            };

            fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players', myInit)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                })
            console.log(nationalTeam.value)
            alert(player.value + " registrado com sucesso.")
            nationalTeam.value = ''
            player.value = ''
            age.value = ''
            position.value = ''
            photo.value = ''
        }
    })
}

menu2button.addEventListener('click', (e) => {
    console.log('teste')
    if(menu2Mobile.style.display === 'block') {
        menu2Mobile.style.display = 'none'
    }else{
        menu2Mobile.style.display = 'block'
    }
})   