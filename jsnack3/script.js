let arrayNumeri = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
let arraySomma = 0;

function sommaNumeri(){
    for (let i = 0; arrayNumeri.length > i; i++){
        arrayNumeri[i] = Math.floor((Math.random()*1000)+1);
        if(i % 2 != 0){
            arraySomma = arraySomma + arrayNumeri[i]
            console.log(i, arraySomma);
        }
    }
    console.log(arraySomma);
    arraySomma = 0;
}