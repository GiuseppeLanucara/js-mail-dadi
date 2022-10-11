/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

//Bisogna chiedere all'utente la sua email.
const emailUtente = prompt("Quale è la sua email?");
console.log(emailUtente);

//Creare un ARRAY con all'interno una lista di email 
const listaEmail = ['pippo@gmail.com', 'pluto@gmail.com', 'pinco@gmail.com', 'panco@gmail.com'];
console.log(listaEmail);

//Controllare che la mail dell'utente sia nella lista delle email contenute nell'ARRAY

let risultato = "";

for (let i = 0; i<listaEmail.length; i++) {
    console.log(i);
    let emailLista = listaEmail[i];

    if (emailLista === emailUtente) {
        console.log("Accesso Consentito");
        risultato = "Accesso Consentito";

      break
    } else {
        console.log("Accesso Negato");
        risultato = "Accesso Negato";
    }


};
//OUTPUT : Messaggio esito controllo quindi sia positivo che negativo.
alert(risultato);