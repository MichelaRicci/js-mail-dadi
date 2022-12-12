console.log('JS OK');

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato

// Inserire il pulsante

const number = document.getElementById('btn');


//collego pulsante a event listener

number.addEventListener("click", function(){
    let player = Math.floor(Math.random() * 6 + 1);
    let computer = Math.floor(Math.random() * 6 + 1);

    console.log(player, computer);

    if (player > computer) {
        console.log("Hai vinto!");
    } else if (computer > player) {
        console.log("Hai perso!");
    } else {
        console.log("Pareggio!");
    }
})

