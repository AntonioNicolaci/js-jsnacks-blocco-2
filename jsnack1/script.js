let numeriArray = [];

function numeri(){
    let casellaArray = 0;
    for(let i = 0; 6 > i; i++) {
        let appoggio = prompt("Scrivi il primo numero");
        if([appoggio % 2] != 0){
            numeriArray[casellaArray] = appoggio;
            console.log(appoggio);
            casellaArray++;
        }
    }
    console.log(numeriArray);
}