let menu2button = document.querySelector('.icon');
let menu2Mobile = document.querySelector('.mobileMenu');
let submitButton = document.getElementById('submit');
let nationalTeam = document.getElementById('nationalTeam');
let player = document.getElementById('name');
let age = document.getElementById('age');
let position = document.getElementById('position');
let photo = document.getElementById('photo');
registerPlayer();
function registerPlayer() {
    submitButton.addEventListener('click', (e) => {
        if (nationalTeam.value === '' || player.value === '' || age.value === '' || position.value === '' || photo.value === '') {
            alert("Insira as informações nos campos vazios");
        }
        else {
            let newPlayer = {
                nationalTeam: nationalTeam.value,
                player: player.value,
                age: parseInt(age.value),
                position: position.value,
                photo: photo.value
            };
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
                console.log(data);
            });
            console.log(nationalTeam.value);
            alert(player.value + " registrado com sucesso.");
            nationalTeam.value = '';
            player.value = '';
            age.value = '';
            position.value = '';
            photo.value = '';
        }
    });
}
menu2button.addEventListener('click', (e) => {
    console.log('teste');
    if (menu2Mobile.style.display === 'block') {
        menu2Mobile.style.display = 'none';
    }
    else {
        menu2Mobile.style.display = 'block';
    }
});
//# sourceMappingURL=cadastro.js.map