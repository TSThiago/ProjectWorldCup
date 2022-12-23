getNationalTeamPlayers('Argentina');
async function getNationalTeamPlayers(nationalTeam) {
    let nationalTeamArray = [];
    let allPlayers = await fetch('https://apigenerator.dronahq.com/api/x5mONs4F/players');
    allPlayers = await allPlayers.json();
    for (let index = 0; index < allPlayers.length; index++) {
        if (allPlayers[index].nationalTeam === nationalTeam) {
            let nationalTeamPlayer = {
                nationalTeam: allPlayers[index].nationalTeam,
                player: allPlayers[index].player,
                age: allPlayers[index].age,
                position: allPlayers[index].position,
                photo: allPlayers[index].photo
            };
            nationalTeamArray.push(nationalTeamPlayer);
        }
    }
    return nationalTeamArray;
}
//# sourceMappingURL=players.js.map