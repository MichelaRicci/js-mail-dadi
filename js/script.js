console.log('JS OK');


// # DADI ---------------------------------------------------------------


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato


// Inserire il pulsante e gli elementi

const btnDice = document.getElementById('btnDice');

const result = document.getElementById('result');

let content = '';


// Collego pulsante a event listener

btnDice.addEventListener("click", function(){
    let player = Math.floor(Math.random() * 6 + 1);
    let computer = Math.floor(Math.random() * 6 + 1);


    console.log(player, computer);


    if (player > computer) {
        console.log("Hai vinto!");

        content =`<p>${player} + ${computer}</p>` + "Hai vinto!";


    } else if (computer > player) {
        console.log("Hai perso!");

        content =`<p>${player} + ${computer}</p>` + "Hai perso!";
    } else {
        console.log("Pareggio!");

        content =`<p>${player} + ${computer}</p>` + "Pareggio!";
    }

 // Stampo in pagina
    result.innerHTML = content;

})



// EMAIL -------------------------------------------------------------------

// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Inserire il pulsante e gli elementi

const btnMail = document.getElementById('btnMail');

const validMail = ["tizio@mail.com", "caio@mail.com", "sempronio@mail.com"];

const message = document.getElementById('message');

let contentMessage = '';

btnMail.addEventListener("click", function(){
    let userMail = document.getElementById('userMail').value;

    for (let i = 0; i < validMail.length; i++) {
        if (userMail == validMail[i]) {
            validMail = true;

            contentMessage = `<p>"La tua mail è stata riconosciuta come valida."</p>`;

        } else {
            contentMessage = `<p>"La tua mail non è stata riconosciuta come valida."</p>`;
        }
    } 

    // Stampo in pagina
     
    message.innerHTML = contentMessage;


})













