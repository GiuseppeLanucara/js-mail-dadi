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
for (let i = 0; i<listaEmail.length; i++);
//OUTPUT : Messaggio esito controllo quindi sia positivo che negativo.