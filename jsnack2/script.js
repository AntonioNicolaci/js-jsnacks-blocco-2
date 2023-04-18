const nomeArray = ["Achille", "Alissa", "Antonio", "Dora", "Delia", "Franco", "Franz", "Josè", "Niccolo'", "Tabita"];
const cognomeArray = ["Rossi", "Galli", "Ferri", "Fermi", "Rizzi", "Longo", "Polidoro", "Greco", "Martini", "Di Stefano"]; //10 cognomi da fare

function randomName(){
    let numeroNome = Math.floor(Math.random()*nomeArray.length);
    let numeroCognome = Math.floor(Math.random()*nomeArray.length);
    document.getElementById("nome_invitato").innerHTML = `Il nome dell'invitato è ${nomeArray[numeroNome]} ${cognomeArray[numeroCognome]}`
}