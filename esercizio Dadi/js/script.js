/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/



//eventListener alla pressione del tasto 
    btn.addEventListener("click", function () {
    console.log("Event listener");

//generare numero random giocatore
    const numeroGiocatore = parseInt(Math.ceil(Math.random() * 6));
    console.log(numeroGiocatore, typeof (numeroGiocatore)); 

//generare numero random computer 
    const numeroComputer = parseInt(Math.ceil(Math.random() * 6));
    console.log(numeroComputer, typeof (numeroComputer));

    if (numeroGiocatore > numeroComputer) {
    document.getElementById("risultato").innerHTML = "HAI VINTO!";
    } else {
    document.getElementById("risultato").innerHTML = "HA VINTO IL COMPUTER!";
}
});


