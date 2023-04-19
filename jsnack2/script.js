const nomeArray = ["Achille", "Alissa", "Antonio", "Dora", "Delia", "Franco", "Franz", "Josè", "Niccolo'", "Tabita"];
const cognomeArray = ["Rossi", "Galli", "Ferri", "Fermi", "Rizzi", "Longo", "Polidoro", "Greco", "Martini", "Di Stefano"]; //10 cognomi da fare
let listaInvitati = [];

function randomName(){

    let numeroNome, numeroCognome, divInvitati = "";
    const lunghezzaLista = Math.floor(Math.random()*20);

    for(let i = 0; lunghezzaLista > i; i++){
        numeroNome =  Math.floor(Math.random()*nomeArray.length);
        numeroCognome =  Math.floor(Math.random()*cognomeArray.length);
        listaInvitati[i] = `${nomeArray[numeroNome]} ${cognomeArray[numeroCognome]}`;
    }

    for(let i = 0; listaInvitati.length > i; i++){
        divInvitati += `<span>Il nome dell'invitato è ${listaInvitati[i]}</span>`;
    }
    document.getElementById("lista_invitati").innerHTML = divInvitati;
}